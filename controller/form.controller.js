const User = require("../models/registration.model");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
// const cookie = require('cookie-parser');
const { v4: uuid } = require('uuid');
// require('dotenv').config();

const getSignUpForm = (req, res) => {
    res.sendFile('/views/sign-up.html', { root: __dirname + "/../" });
}

const postSingUpForm = async (req, res) => {
    req.body.id = uuid();
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const userdata = {
            id: req.body.id,
            username: req.body.username,
            class: req.body.class,
            email: req.body.email,
            password: hashedPassword
        }

        const newUser = new User(userdata);
        await newUser.save();
        res.status(200);
        res.redirect('/submited');
    } catch {
        res.sendFile('/views/submit-error.html', { root: __dirname + '/../' });
    }
}

const getSingInForm = (req, res) => {
    res.sendFile('views/sign-in.html', { root: __dirname + "/../" });
}

const postSingInForm = async (req, res) => {
    // res.send('you posted username and password,');
    const _user = req.body.username;
    // console.log(`_user ${_user}`);
    try {
        const users = await User.find({ username: _user });
        // console.log(`users: ${users}`);
        if (users && users.length > 0) {
            const _password = req.body.password;
            // console.log(`_password: ${_password}`);
            let valid = false;
            let user_id;
            let user_name;
            for (let i = 0; i < users.length; i++) {
                valid = await bcrypt.compare(_password, users[i].password);
                // console.log(valid);
                if (valid) {
                    user_id = users[i]._id;
                    user_name = users[i].username;
                    break;
                }
            }
            if (!valid) {
                res.sendFile('views/sign-in-error.html', { root: __dirname + "/../" });
            } else {
                const token = jwt.sign({
                    username: user_name,
                    userId: user_id
                }, process.env.JWT_SECRET);
                res.cookie('logged_in', token);
                // console.log(token); //need to be commented
                res.sendFile('views/dashboard.html', { root: __dirname + '/../' });
            }
        } else {
            res.sendFile('views/sign-in-error.html', { root: __dirname + "/../" });
        }
    } catch (err) {
        console.log(err);
        res.send("Authentication cann't success");
    }


}
module.exports = {
    getSignUpForm,
    postSingUpForm,

    getSingInForm,
    postSingInForm
};
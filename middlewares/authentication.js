const jwt = require('jsonwebtoken');
const authentication = (req, res, next) => {
    const token = req.cookies.logged_in;
    // console.log(`authorization : ${token}`)
    try {
        
        // console.log(`token: ${token}`);
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { user_name, user_id } = decoded;
        req.username = user_name;
        req.userId = user_id
        next();
    } catch(err) {
        // console.log('Authorization token error');
        console.log(err);
        res.redirect('/sign-in');
        next('Authentication failure!');

    }
}

module.exports =  authentication ;
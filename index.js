const express = require('express');
const env = require('dotenv');
const path = require('path');
const cookie_parser = require('cookie-parser');

const home = require('./routes/home.router');
const form = require('./routes/form.router');
const news = require('./routes/news.route');
const courses = require('./routes/cousrses.router');
const contact = require('./routes/contact.router');
const submited = require('./routes/submited.route');

const app = express();
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`server at http://localhost:${PORT}`);
});
app.use(cookie_parser());
env.config();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(home);
app.use(form);
app.use(news);
app.use(courses);
app.use(contact);
app.use(submited);
app.get('/notice', (req, res) => {
    res.sendFile('/views/noticeboard.html', { root: __dirname });
});

// app.get('/set', (req, res) => {
//     res.cookie('new user', false, { maxAge: 1000 * 10, httpOnly: true });
//     // res.setHeader('Set-Cookie','username  = yousuf');
//     res.send('you got the cookies');
// })
// // app.
// app.get('/read', (req, res) => {
//     const cookie = req.cookies;
//     console.log(cookie['new user']);
//     if (cookie) {
//         res.send('read successfull')
//     }
// })

//json web token.


app.use((req, res,) => {
    res.status(404);
    res.sendFile('/views/error.html', { root: __dirname });
})
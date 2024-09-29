const express = require('express');
const getNews = require('../controller/news.controller');
const authentication  = require('../middlewares/authentication');

const NewsRoute = express.Router();
NewsRoute.get('/news',authentication,getNews);

module.exports = NewsRoute;
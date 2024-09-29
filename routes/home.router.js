const express = require('express');
const Home = require('../controller/home.controller');
const Homeroute = express.Router();

Homeroute.get('/',Home.getHome);

module.exports = Homeroute;
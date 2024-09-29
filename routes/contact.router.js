const express = require('express');
const getContact = require('../controller/contact.controller');

const ContactRouter = express.Router();

ContactRouter.get('/contact',getContact);

module.exports = ContactRouter;
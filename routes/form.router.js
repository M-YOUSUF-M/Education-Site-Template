const express = require('express');
const {getSignUpForm , postSingUpForm,getSingInForm,postSingInForm} = require('../controller/form.controller');

const Formroute = express.Router();

Formroute.get('/sign-up',getSignUpForm);
Formroute.get('/sign-in',getSingInForm);

Formroute.post('/sign-up',postSingUpForm);
Formroute.post('/sign-in',postSingInForm);

module.exports = Formroute;


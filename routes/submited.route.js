const express = require('express');

const getsubmited = require('../controller/submited.controller');

const SubmitRouter = express.Router();

SubmitRouter.get('/submited',getsubmited);

module.exports = SubmitRouter;

//Y0u5ufMazumder*1785

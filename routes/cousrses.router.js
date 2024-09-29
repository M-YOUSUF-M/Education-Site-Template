const express = require('express');
const getCourses = require('../controller/courses.controller');

const CousreRouter = express.Router(); 

CousreRouter.get('/courses',getCourses);

module.exports = CousreRouter;
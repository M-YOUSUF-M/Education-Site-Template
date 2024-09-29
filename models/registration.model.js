require('../config/config');
const mongoose = require('mongoose');
const Schema = require('../schema/userdb.schema');

//creating the model based on the schema
const Users = new mongoose.model('User',Schema);  

module.exports = Users;


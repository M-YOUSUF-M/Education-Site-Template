const mongoose = require('mongoose');
require('dotenv').config();
//connect with databse
mongoose.connect(process.env.DataBaseUrl)
.then(()=>console.log('connected with database'))
.catch(err=>console.log(err));
const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    id:String,
    username:{
        type:String,
        required:true
    },
    class:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now,
        required:false
    }
});

module.exports = Schema
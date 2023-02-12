const mongoose = require('mongoose');


//schema or pattern for storing data in DB
let schema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    gender:String,
    status: String
});

const Userdb = mongoose.model('userdb',schema);  //the first parameter is any name (for collection)

module.exports = Userdb;
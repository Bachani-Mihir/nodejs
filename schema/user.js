const mongoose = require('../db/db');
const schema = new mongoose.Schema({
    
    name:{
        type:String
    },
    username:{   
        type:String
    },
    password:{
        type:String
    }
})
 const User = mongoose.model("users",schema) //here student represents collection name 
 module.exports = User;
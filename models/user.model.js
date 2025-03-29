const mongoose=require("mongoose");
const { applyTimestamps } = require("./tracking.model");

const userSchema=new mongoose.Schema({
    username:
    {
        type:String,
        required:true,
        unique:true,
    },

    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        requird:true,
        enum:["Admin","Manager","User"],

    },
   

    },
    {
        timestamps:true,
    }

);
module.exports=mongoose.model(" user ",userSchema);
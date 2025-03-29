const mongoose=require('mongoose');

const user_adminSchema=new mongoose.Schema({
    user_id : {
        type: String,
        required: [true,"PLEASE ENTER user_id"],
    },
    user_name : {
        type: String,
        required: [true,"PLEASE ENTER user_name"],
    },
    user_email : {
        type: String,
        required: [true,"PLEASE ENTER user_email"],
    },
    user_password : {
        type: String,
        required: [true,"PLEASE ENTER user_password"],
    },
    user_role : {
        type: String,
        required: [true,"PLEASE ENTER user_role"],
        enum: ["admin","user"],
    },
    created_at : {
        type: Date,
        default: Date.now,
    },
    updated_at : {
        type: Date,
        default: Date.now,
    },
    address:{
        type:String,
        required:[true,"PLEASE ENTER ADDRESS"]
    },
    country:{
        type:String,
        required:[true,"PLEASE ENTER COUNTRY"]
    },
    zip_code:{
        type:String,
        required:[true,"PLEASE ENTER ZIP CODE"]
    },
    phone_number:{
        type:String,
        required:[true,"PLEASE ENTER PHONE NUMBER"]
    },
    permissions:{
        type:Array,
        required:[true,"PLEASE ENTER PERMISSIONS"]
    }

    
});

const User_admin=mongoose.model('User_admin',user_adminSchema);
module.exports=User_admin;
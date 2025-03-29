const mongoose=require('mongoose');

const zoneSchema=new mongoose.Schema({

    zone_id:{
        type:String,
        required:[true,"PLEASE ENTER zone_id"],
    },

    zone_name:{
        type:String,
        required:[true,"PLEASE ENTER zone_name"],
    },
    pincode:{
        type:Number,
        required:[true,"PLEASE ENTER pincode"],
    },
    city:{
        type:String,
        
    },
    state:{
        type:String,
        
    },
    country:{
        type:String,
        required:[true,"PLEASE ENTER country"],
    },
    created_at:{
        type:Date,
        default:Date.now,
    },
    updated_at:{
        type:Date,
        default:Date.now,
    },

});

const Zone=mongoose.model('Zone',zoneSchema);
module.exports=Zone;
// Compare this snippet from models/zone.model.js:
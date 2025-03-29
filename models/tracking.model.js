const mongoose=require('mongoose');

//schema  

const trackingSchema=new mongoose.Schema({
  track_id : {
        type: String,
        required: [true,"PLEASE ENTER track_id"],
    },
    order_id : {
        type: String,
        required: [true,"PLEASE ENTER order_id"],
    },

    user_id : {
        type: String,
        required: [true,"PLEASE ENTER user_id"],

    },
    current_status : {
        type: String,
        required: [true,"PLEASE ENTER current_status"],
        enum: ["Picked Up","In Transit","out_for_delivery","delivered"],
    },
    created_at : {
        type: Date,
        default: Date.now,
    },
    updated_at : {
        type: Date,
        default: Date.now,
    },
    
});

const Tracking=mongoose.model('Tracking',trackingSchema);

module.exports=Tracking;



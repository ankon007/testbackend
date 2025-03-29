const mongoose = require('mongoose');

//schema

const shipmentSchema=mongoose.Schema(
    {
        shipment_id : {
            type: String,
            required: [true,"PLEASE ENTER shipment_id"],
        },
        order_id : {
            type: String,
            required: [true,"PLEASE ENTER order_id"],
        },
        sender_id:{
            type: mongoose.Schema.Types.ObjectId,
            required: [true,"PLEASE ENTER sender_id"],
        },
        recipient_name:{
            type: String,
        },
        origin : {
            type: String,
        },
        current_location : {
            type: String,
            
        },
        status:{
            type: String,
           enum: ["Picked Up","In Transit","out_for_delivery","delivered"],
        },
        estimated_delivery_date : {
            type: Date,
            
        },
        shipped_date : {
            type: Date,
            default: Date.now,
        },
        deliverd_date : {
            type: Date,
            
        },
        carrier:{
            type: String,
           
        },

        weight : {
            type: Number,
            
        },
        cost : {
            type: Number,
           
        },
        payment_status : {
            type: String,
            
            enum: ["Paid","Unpaid"],
        },
        created_at : {
            type: Date,
            default: Date.now,
        },
        updated_at : {
            type: Date,
            default: Date.now,
        },



    }

);
const Shipment=mongoose.model('Shipment',shipmentSchema);
module.exports=Shipment;
const mongoose=require('mongoose');

const price_chartSchema=new mongoose.Schema({
    product_id : {
        type: String,
        required: [true,"PLEASE ENTER product_id"],
    },
    zone_id : {
        type: String,
        required: [true,"PLEASE ENTER zone_id"],
    },
    weight_range : {
        type: String,
        required: [true,"PLEASE ENTER weight_range"],
    },
    shipping_method : {
        type: String,
        required: [true,"PLEASE ENTER shipping_method"],
        enum: ["Standard","Express","Same Day"],
    },
    base_price : {
        type: Number,
        required: [true,"PLEASE ENTER price"],
    },
    additional_weight_price : {
        type: Number,//cost per kg
        required: [true,"PLEASE ENTER additional_weight"],
    },
    delivery_time : {
        type: Number,//in days"
    },
    carrier: {
        type: String, 
    },
    updated_at : {
        type: Date,
        default: Date.now,
    },


});


const Price_chart=mongoose.model('Price_chart',price_chartSchema);
module.exports=Price_chart;

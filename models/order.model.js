const mongoose=require('mongoose');

const orderSchema=new mongoose.Schema({

    order_id:{
        type:String,
    },

    user_id:{
        type:String,
    },

    item_info:{
    type:String,

    },
    total_amount:{
        type:Number,
       
    },
    payment_status:{
        type:String,
        enum:["pending","paid","failed"],
    },
    payment_method:{
        type:String,
        enum:["cash","card","upi"],
    },
    order_status:{
        type:String,
        enum:["placed","packed","shipped","delivered"],
    },
    placed_at:{
        type:Date,
        default:Date.now,
    },
    update_at:{
        type:Date,
        default:Date.now,
    },
    

});


const Order=mongoose.model('Order',orderSchema);
module.exports=Order;

const mongoose=require('mongoose');

const reviewSchema=new mongoose.Schema({

    review_id:{
        type:String,
        required:[true,"PLEASE ENTER review_id"],
    },

    //reference to the user who wrote the review
    user_id:{
        type:String,
        required:[true,"PLEASE ENTER user_id"],
    },
//(reference to the associated order
     order_id:{
       type:String,
       required:[true,"PLEASE ENTER order_id"],
 },

    rating:{
        type:Number,
        required:[true,"PLEASE ENTER rating"],
    },
    Comment:{
        type:String,
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


const Review=mongoose.model('Review',reviewSchema);
module.exports=Review;
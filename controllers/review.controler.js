const review=require('../models/review.model');

const getreviews=async(req,res)=>{
    try{
        const reviews=await review.find({});
        res.status(200).json(reviews);
    }
    catch(error){
        res.status(404).json({message:error.message});
    }
};

const singlereview=async(req,res)=>{
    try{
    
          const {review_id}=req.params;
          const review=await review.findById(review_id);
          if(!review)
          {
              return res.status(404).json({message:"No review found"});
          }
          res.status(200).json(review);
          
    }
     catch(error){
            res.status(500).json({message:error.message});
            
     }
};

const createsinglereview=async(req,res)=>{
    try{
        const review=await review.create(req.body);
        res.status(201).json({review:review});        
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
};  

const updatesinglereview=async(req,res)=>{     
    try{
        const {review_id}=req.params;
        const review=await review.findByIdAndUpdate(review_id,req.body,{new:true});
        if(!review)
        {
            return res.status(404).json({message:"No review found"});
        }
        res.status(200).json({review:review});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
 };

 const deletesinglereview=async(req,res)=>{         
    try{
        const {review_id}=req.params;
        const review=await review.findByIdAndDelete(review_id);
        if(!review)
        {
            return res.status(404).json({message:"No review found"});
        }
        res.status(200).json({message:"Review deleted"});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
};




module.exports={    
    getreviews,
    singlereview,
    createsinglereview,
    updatesinglereview,
    deletesinglereview
};

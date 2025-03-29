const order=require('../models/order.model');
const getorders=async(req,res)=>{

    try{
        const orders=await order.find({});
        res.status(200).json(orders);
    }
    catch(error){
        res.status(404).json({message:error.message});
    }
};


const singleorder=async(req,res)=>{
    try{
    
          const {order_id}=req.params;
          const order=await order.findById(order_id);
          if(!order)
          {
              return res.status(404).json({message:"No order found"});
          }
          res.status(200).json(order);
          
        
    }
     catch(error){
            res.status(500).json({message:error.message});
            
     }
};

const createsingleorder=async(req,res)=>{
    try{
        const order=await order.create(req.body);
        res.status(201).json({order:order});        
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
};

const updatesingleorder=async(req,res)=>{
    try{
        const {order_id}=req.params;
        const order=await order.findByIdAndUpdate(order_id,req.body,{new:true});
        if(!order)
        {
            return res.status(404).json({message:"No order found"});
        }
        res.status(200).json({order:order});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }

};
const deletesingleorder=async(req,res)=>{
    try{
        const {order_id}=req.params;
        const order=await order.findByIdAndDelete(order_id);

        if(!order)
        {
            return res.status(404).json({message:"No order found"});
        }
        res.status(200).json({message:"Order deleted successfully"});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
};

module.exports={ 
    getorders,
    singleorder,
    createsingleorder,
    updatesingleorder,
    deletesingleorder
   }

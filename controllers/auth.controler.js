const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const user=require("../models/user.model");
const register=async(req,res)=>{

    try{
   const {username,password,role}=req.body;
   const  hashedpassword=await bcrypt.hash(password,10);
   
   const newuser=new user({username,password: hashedpassword,role});
   await newuser.save();
   res.status(201).json({message:'user registered with username  ${username}'});
    }
    catch(error){
        res.status(500).json({messasge:"something went wrong"});

    }

};


const login =async(req,res)=>{

    try{
    const {username,password}=req.body;
    const user=await user.findOne({username});
    

    if(!user){
        return res.status(404).json({message:"user with username ${username} not found "});

    }

    const isMatch=await bcrypt.compare(password,user.password);
    if(!isMatch)
    {
        return res.status(400).json({message:"Invalid credentials"});

    }
    const token=jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET,
        {expiresIn:"1h"}


    );
    res.status(200).json({token});


}catch(error)
{
    res.status(500).json({messasge:"something went wrong"});
}

};


module.exports={
    register,
    login,
};
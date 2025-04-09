const express =require("express");
const {verifyToken,authorizeRoles }=require("../middleware/authMiddleware");


const router=express.Router();

//example toure using verfy token middleware
router.get("/protected-route",verifyToken,(res,req)=>
{
    res.status(200).json({message:"access granted",user:req.user});
});


//only admin can access this router

router.get("/admin",verifyToken,authorizeRoles("admin"),(req,res)=>{
    res.json({message:"welcome admin"});
});

//both admin and manager can access  this route

router.get("/manager",verifyToken,authorizeRoles("admin","manager",(req,res)=>{
    res.json({message:"welcome manager "});
}));

//all admin , manager , and user can access the router
router.get("/user",verifyToken,authorizeRoles("admin","manager","user"),(req,res)=>{
    res.json({message:"welcome user"});
    });

    module.exports=router;
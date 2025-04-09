const express=require("express");
const {register,login}=require("../controllers/authControler");


const router = express.Router();
//Register rote
router.post("/register",register);
//Login route
router.post("/login",login);

module.exports=router;

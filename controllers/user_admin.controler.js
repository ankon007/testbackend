const user_admin=require('../models/user_admin.model');

const getuser_admins = async (req, res) => {
    try {
        const user_admins = await user_admin.find();
        res.status(200).json(user_admins);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const singleuser_admin = async (req, res) => {
    try{
        const{user_id}=req.params;
        const user_admins=await user_admin.findById(user_id);
        if(!user_admins)
        {
            return res.status(404).json({message:"No user found"});

        }
        res.status(200).json(user_admins);

    }
    catch(error)
    {
        res.status(404).json({message:error.message});
    }
};
const createsingleuser_admin = async (req, res) => {
    try{
        const  user_admins=await user_admin.create(req.body);
        res.status(201).json({user_admins:user_admins});
    }
    catch(error)
    {
        res.status(500).json({message:error.message});
    }
};
const updatesingleuser_admin = async (req, res) => {
    try{
        const {user_id}=req.params;
        const user_admin=await user_admin.findByIdAndUpdate(user_id,req.body,{new:true});
        if(!user_admin)
        {
            return res.status(404).json({message:"No user found"});
        }
        res.status(200).json({user_admin:user_admin});
    }
    catch(error)
    {
        res.status(500).json({message:error.message});
    }


};

const deletesingleuser_admin = async (req, res) => {
    try{
        const {user_id}=req.params;
        const user_admin=await user_admin.findByIdAndDelete(user_id);
        if(!user_admin)
        {
            return res.status(404).json({message:"No user found"});
        }
        res.status(200).json({message:"User deleted"});
    }
    catch(error)
    {
        res.status(500).json({message:error.message});
    }
};


module.exports = {
    getuser_admins,
    singleuser_admin,
    createsingleuser_admin,
    updatesingleuser_admin,
    deletesingleuser_admin
};
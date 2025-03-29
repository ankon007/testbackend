const zone = require('../models/zone.model');


const getzones = async (req, res) => {
    try {
        const zones = await zone.find();
        res.status(200).json(zones);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const singlezone = async (req, res) => {
    try{
        const {zone_id} = req.params;
        const zone = await zone.findById(zone_id);
        if (!zone){
            return res.status(404).json({ message: "No zone found" });
        } 
        res.status(200).json(zone);
           

       }

    catch(error){
        res.status(500).json({message:error.message});
    
    }
};

const createsinglezone = async (req, res) => {  
    try{
        const zone = await zone.create(req.body);
        res.status(201).json({ zone: zone });        
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
};

 const updatesinglezone = async (req, res) => { 
   try{
    const {zone_id} = req.params;
    const zone= await zone.findByIdAndUpdate(zone_id,req.body,{new:true});
    if(!zone){
        return res.status(404).json({message:"No zone found"});
    }
    res.status(200).json({zone:zone});
   }
    catch(error){
     res.status(500).json({message:error.message});
    }
  
};

const deletesinglezone = async (req, res) => {
    try{
        const {zone_id} = req.params;
        const zone = await zone.findByIdAndDelete(zone_id);
        if(!zone){
            return res.status(404).json({message:"No zone found"});
        }
        res.status(200).json({message:"Zone deleted"});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
};

module.exports = {
    getzones,
    singlezone,
    createsinglezone,
    updatesinglezone,
    deletesinglezone
};

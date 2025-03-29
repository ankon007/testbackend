const price_chart = require('../models/price_chart.model.js');


const getprice_charts = async (req, res) => {
    try {
        const price_charts = await price_chart.find();
        res.status(200).json(price_charts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
const singleprice_chart = async (req, res) => {
    try{
        const{product_id}=req.params;
        const price_chart=await price_chart.findById(product_id);
        if(!price_chart){
            return res.status(404).json({message:"No price_chart found"});
        }
        res.status(200).json(price_chart);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const createsingleprice_chart = async (req, res) => {
    try{
        const price_chart=await price_chart.create(req.body);
        res.status(201).json({price_chart:price_chart});
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updatesingleprice_chart = async (req, res) => {
    try{
        const{product_id}=req.params;
        const price_chart=await price_chart.findByIdAndUpdate(product_id,req.body,{new:true});
        if(!price_chart){
            return res.status(404).json({message:"No price_chart found"});
        }
        res.status(200).json({price_chart:price_chart});
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const deletesingleprice_chart = async (req, res) => {
    try{
        const{product_id}=req.params;
        const price_chart=await price_chart.findByIdAndDelete(product_id);
        if(!price_chart){
            return res.status(404).json({message:"No price_chart found"});
        }
        res.status(200).json({message:"price_chart deleted"});

    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports = {  
    getprice_charts,
    singleprice_chart,
    createsingleprice_chart,
    updatesingleprice_chart,
    deletesingleprice_chart
};
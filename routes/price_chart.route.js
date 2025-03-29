const express = require('express');
const router = express.Router();


const{getprice_charts,singleprice_chart,createsingleprice_chart,updatesingleprice_chart,deletesingleprice_chart}=require('../controllers/price_chart.controler');


router.get('/', getprice_charts);
router.get('/:product_id', singleprice_chart);      
router.post('/', createsingleprice_chart);
router.put('/:product_id', updatesingleprice_chart);
router.delete('/:product_id', deletesingleprice_chart);


module.exports=router;
// Compare this snippet from routes/tracking.route.js:

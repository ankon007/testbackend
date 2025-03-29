const express= require('express');
const router=express.Router();

const {getorders,singleorder,createsingleorder,updatesingleorder,deletesingleorder}=require('../controllers/order.controler');




router.get('/order',getorders);
router.get('/order/:order_id',singleorder);
router.post('/order',createsingleorder);
router.put('/order/:order_id',updatesingleorder);
router.delete('/order/:order_id',deletesingleorder);


module.exports=router;
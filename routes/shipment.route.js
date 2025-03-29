const express= require('express');
const router=express.Router();
const {  getshipments, singleshipment,createsingleshipment,updatesingleshipment,deletesingleshipment}=require('../controllers/shipment.controler');

router.get('/', getshipments);
router.get('/:shipment_id', singleshipment);
router.post('/', createsingleshipment);
router.put('/:shipment_id', updatesingleshipment);
router.delete('/:shipment_id', deletesingleshipment);

module.exports=router;



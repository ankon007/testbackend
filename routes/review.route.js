
const express=require('express');
const router=express.Router();

const {getreviews,singlereview,createsinglereview,updatesinglereview,deletesinglereview}=require('../controllers/review.controler');    

router.get('/',getreviews);
router.get('/:review_id',singlereview);
router.post('/',createsinglereview);
router.put('/:review_id',updatesinglereview);
router.delete('/:review_id',deletesinglereview);



module.exports=router;
// Compare this snippet from controllers/tracking.controller.js:
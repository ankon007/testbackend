const express = require('express');
const router = express.Router();
const{gettrackings,singletracking,createsingletracking,updatesingletracking,deletesingletracking}=require('../controllers/tracking.controler');

router.get('/', gettrackings);
router.get('/:track_id', singletracking);
router.post('/', createsingletracking); 
router.put('/:track_id', updatesingletracking);
router.delete('/:track_id', deletesingletracking);

module.exports=router;
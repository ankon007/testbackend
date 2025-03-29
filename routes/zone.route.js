const express = require('express');
const router = express.Router();
const { getzones, singlezone, createsinglezone, updatesinglezone, deletesinglezone } = require('../controllers/zone.controler');   

router.get('/', getzones);
router.get('/:zone_id', singlezone);
router.post('/', createsinglezone);
router.put('/:zone_id', updatesinglezone);
router.delete('/:zone_id', deletesinglezone);


module.exports = router;
// Compare this snippet from routes/zone.route.js:
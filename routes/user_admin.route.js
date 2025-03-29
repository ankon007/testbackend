const express = require('express');
const router = express.Router();

const{getuser_admins,singleuser_admin,createsingleuser_admin,updatesingleuser_admin,deletesingleuser_admin}=require('../controllers/user_admin.controler');

router.get('/', getuser_admins);
router.get('/:user_id', singleuser_admin);

router.post('/', createsingleuser_admin);
router.put('/:user_id', updatesingleuser_admin);
router.delete('/:user_id', deletesingleuser_admin);

module.exports=router;
// Compare this snippet from controllers/tracking.controler.js:
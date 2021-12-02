const express=require('express');
const router= express.Router();

let loginController=require('../controllers/loginController');
router.get('/',loginController.index);

module.exports = router;
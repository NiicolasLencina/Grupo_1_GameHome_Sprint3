const express = require('express')
const router = express.Router();
let controller = require('../controllers/productDetailController')

router.get('/',controller.index)


module.exports=router;
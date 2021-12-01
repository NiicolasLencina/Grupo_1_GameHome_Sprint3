const express= require('express');
const router= express.Router();


let carritoController= require('../controllers/productCartController');

router.get('/',carritoController.index);

module.exports= router;
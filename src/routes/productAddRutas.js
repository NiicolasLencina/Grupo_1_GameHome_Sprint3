const express= require('express');
const router= express.Router();


/*Con esta variable llamo a mi archivo localizado en la carpeta CONTROLLER*/ 
let createController= require('../controllers/productAddController');

router.get('/', createController.index);


module.exports= router;
const express= require('express');
const router= express.Router();


/*Con esta variable llamo a mi archivo localizado en la carpeta CONTROLLER*/ 
let indexController= require('../controllers/indexController');

router.get('/', indexController.index);


module.exports= router;


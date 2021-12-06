const express= require('express');
const router= express.Router();


/*Con esta variable llamo a mi archivo localizado en la carpeta CONTROLLER*/ 
let registerController= require('../controllers/registerController');

router.get('/', registerController.index);


module.exports= router;

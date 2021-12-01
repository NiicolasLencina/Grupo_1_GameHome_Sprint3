const path = require('path');

let controllerCarrito={
    index: (req,res)=>{
        res.sendFile(path.join(__dirname, '../views/products/productCart.html'))
    }

}


module.exports= controllerCarrito;
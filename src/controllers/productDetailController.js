const path= require('path')

let controllerProductDetail = {
    index: function (req,res) {
        res.sendFile(path.join(__dirname,"../views/products/productDetail.html"))
    }
    
}

module.exports=controllerProductDetail;
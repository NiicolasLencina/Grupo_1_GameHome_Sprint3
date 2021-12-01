const path= require('path');

let indexController={
    index: (req,res)=>{
        res.sendFile(path.join(__dirname, '../views/users/index.html'))
    }


}

module.exports= indexController;
const path=require('path');
const loginController={
    index:(req,res)=>{
        res.sendFile(path.join(__dirname,'../views/users/login.html'))
    }
}
module.exports=loginController;
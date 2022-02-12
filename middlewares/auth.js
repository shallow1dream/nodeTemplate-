const { httpResultUtil }=require("../until/index")
const auth=(req,res,next) => {
    if(req.session.username){
        next()
    }else{
        httpResultUtil.failure({res,code:10001,message:"请登录"})
    }
}
module.exports=auth;
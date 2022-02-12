const express=require("express")
const { httpResultUtil,paramsVaildUtil }=require("../../until/index")
const { getUserInfo }=require("../../server/user")
const router=express.Router()


router.post("/login", ( req , res ) => {
    const { isErr,errMsg } = paramsVaildUtil(req, ["account","password"])
    if(isErr){
        httpResultUtil.failure({res,message:errMsg})
        return;
    }
    const {account,password}=req.body
    //先判断用户是否存在，在匹配密码
    getUserInfo({account}).then((result) => {
        console.log(result,"结果")
        if(result.password===password){ //登录成功
            req.session.username=result.account
            let userInfo={
                account:result.account,
            }
            req.session.userInfo=userInfo
            httpResultUtil.success({res,entry:userInfo})
        }else{
            httpResultUtil.failure({res,message:"密码不正确"})
        }
    }).catch(()=>{
        httpResultUtil.failure({res,message:"手机号未注册"})
    })
})

module.exports=router;
const express=require("express")
const { httpResultUtil }=require("../../until/index")
const { getUserInfo,registerUser }=require("../../server/user")
const router=express.Router()

router.post("/register", ( req , res ) => {
    console.log(req.body)
    const { account, password, create_time, updata_time }=req.body
    //先判断用户是否存在，在匹配密码
    getUserInfo({account}).then((result) => {
        console.log(result,"结果")
        httpResultUtil.failure({res,message:"用户存在"})
    }).catch(()=>{
        registerUser({account,password,create_time,updata_time}).then((result) => {
            httpResultUtil.success({res,entry:null})
        }).catch((err) => {
            console.log(err,"err")
        })
    })
})
module.exports=router;
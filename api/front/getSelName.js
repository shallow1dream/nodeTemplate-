const express=require("express")
const { httpResultUtil }=require("../../until/index")
const { SelectName }=require("../../server/user")
const router=express.Router()
router.post("/getSelName", ( req , res ) =>{
    const { keyword }=req.body
    SelectName(keyword).then((result) => {
        console.log(result,"结果")
        httpResultUtil.success({res,entry:result})
    }).catch(() => {
        httpResultUtil.failure({res,message:"错误"})
    })
})
module.exports=router;
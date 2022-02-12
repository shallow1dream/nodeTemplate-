const express=require("express")
const { httpResultUtil }=require("../../until/index")
const router=express.Router()
router.get("/logout",(req,res)=>{
    req.session.destroy((err)=>{
        console.log(err);
    })
    httpResultUtil.success({res,entry:null})
})
module.exports=router;
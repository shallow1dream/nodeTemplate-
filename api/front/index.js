const express=require("express")
const login=require("./login")
const logout=require("./logout")
const getSelName=require("./getSelName")
const register=require("./register")

const router=express.Router()
router.use(login)
router.use(getSelName)
router.use(logout)
router.use(register)


module.exports=router;
const express=require("express")
const session=require("express-session")
const frontApi=require("./api/front/index")

const app=express()

app.use(session({
    secret:'singer_node_cookie',
    name:'sessionId',
    cookie:{
        httpOnly:true, //前端无法操作cookie
        maxAge:1000*60*60*24,// ms
        secure:false, //true https 才可以访问cookie
    },
    resave:false,
    saveUninitialized:true
}))

app.use(express.urlencoded({extended:false}))
app.use(express.json())
//跨域配置
app.use("/",(req,res,next)=>{
    res.set({
        "Access-Control-Allow-Origin":req.headers.origin,
        "Access-Control-Allow-Methods":"GET,POST,PUT",
        "Access-Control-Allow-Headers":"Origin,cookie,Content-type",
        "Access-Control-Allow-Credentials":"true",
        "Access-Control-Max-Age":30*60
    })
    next()
})
//前台接口路由
app.use("/front",frontApi)




app.listen(7777,() => {
    console.log("服务器启动成功")
})
module.exports={
    success({res,entry}){
        this.resResult(res,1,true,entry,"成功")
    },
    failure({res,code,message}){
        this.resResult(res,code,false,null,message)
    },
    resResult(res,code,status,entry,message){
        res.json({
            code, //10001未登录
            status,//业务结果(登录 注册) true 成功 ，false失败
            entry,//给前端的数据
            message,//信息 错误信息
        })
    }
}
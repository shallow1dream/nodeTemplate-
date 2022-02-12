const mysql=require("mysql")

//创建数据库连接池
const pool = mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"qianmeng99",
    database:"myproject",
    connectionLimit:20
})
module.exports={
    query({sql,args=[]}){
        return new Promise((resolve,reject)=>{
            pool.getConnection((error,connection) =>{
                if(error){
                    reject(error.message)
                }else{
                    // sql select * from xxx where accout =? and xxx
                    // args:['NANA',xxx]
                    connection.query(sql,args,(err,result)=>{
                        //释放连接池
                        connection.release()
                        if(err){
                            reject(err.message)
                        }
                        resolve(result)
                    })
                }
            })
        })
    }
}
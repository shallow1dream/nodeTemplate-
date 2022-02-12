const { getObjNotNull,formatSqlSelectString ,query}=require("../until")
/**
 * 查询用户信息
 * @param {*} param0 
 * @returns 
 */
const getUserInfo=({account,password,create_time,updata_time})=>{
    return new Promise((resolve,reject)=>{
        let sql="select * from login_account where 1=1 ";
        const queryParams = getObjNotNull({
            account,
            password,
            create_time,
            updata_time,
        });
        console.log(queryParams,"queryParams");
        sql=formatSqlSelectString(sql,queryParams)
        console.log(sql,"sql");
        query({sql,args:Object.values(queryParams)}).then((result) => {
            console.log(result,"result")
            if(result.length===0){
                reject("用户不存在")
            }else{
                resolve(result[0])
            }
        }).catch(reject)
    });
}
const SelectName=(keyword)=>{
    return new Promise((resolve,reject)=>{
        let sql=`select * from user_info where name LIKE '${keyword}%'`;
        query({sql}).then((result) => {
            console.log(result,"result")
            if(result.length===0){
                reject("列表里没有这个数据")
            }else{
                resolve(result)
            }
        }).catch(reject)
    })
}
const registerUser=({account,password,create_time,updata_time}) => {
    return new Promise((resolve,reject)=>{
        let sql=`INSERT INTO login_account(account,password,create_time,updata_time) VALUES('${account}','${password}','${create_time}','${updata_time}');`;
        // INSERT INTO `login_account` (`account`, `password`, `create_time`, `updata_time`) VALUES ('123', '123', '2022-02-09 14:00:55', '2022-02-09 14:01:00')
        query({sql}).then((result) => {
            resolve(result)
        }).catch(reject)
    })
}
module.exports={
    getUserInfo,
    SelectName,
    registerUser
}
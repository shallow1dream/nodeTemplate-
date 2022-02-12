//过滤对象值为null undefined ""
const getObjNotNull=(obj) => {
    let result={};
    //二维数组 第一项是key 第二项是value
    Object.entries(obj).forEach((item) => {
        if(item[1] || item[1]===0){
            result[item[0]]=item[1]
        }
    })
    return result;
}
module.exports={
    getObjNotNull
}
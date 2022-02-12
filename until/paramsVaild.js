const paramsVaild=(req,paramsArr=[])=>{
    const body=req.body;
    let errMsg="";
    let isErr=false;
    for(let i=0;i<paramsArr.length;i++){
        if(!body[paramsArr[i]]){
            isErr=true;
            errMsg=`参数${paramsArr[i]}必传`;
            console.log(isErr,errMsg)
            break;
        }
    }
    return {isErr,errMsg,}
}
module.exports=paramsVaild;
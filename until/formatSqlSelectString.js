const formatSqlSelectString=(sql,selectObj={}) => {
    Object.keys(selectObj).forEach((key) => {
        // ? 占位符
        sql+=` and ${key} = ?`;
    })
    return sql
}
module.exports=formatSqlSelectString
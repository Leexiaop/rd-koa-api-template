const list = require('koa-router')()
const mysql = require('../../config/mysqlConfig')
list.get('/', async (ctx, next) => {
    let name = ctx.query.name
    let _sql = `select * from user where name="${name}";`
    await mysql.mysqlQuery(_sql).then(res => {
        ctx.body = {
            code: 0,
            data: res
        }
    })
})
module.exports = list
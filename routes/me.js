const me = require('koa-router')()

me.get('/', async (ctx, next) => {
    ctx.body = 'This is the me inital response'
})

module.exports = me

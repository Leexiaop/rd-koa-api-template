const order = require('koa-router')()

order.get('/', async (ctx, next) => {
    ctx.body = 'This is the inital order response'
})

module.exports = order

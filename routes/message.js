const message = require('koa-router')()

message.get('/', async (ctx, next) => {
    ctx.body = 'This is the message inital response'
})

module.exports = message

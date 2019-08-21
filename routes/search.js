const search = require('koa-router')()

search.get('/', async (ctx, next) => {
    ctx.body = 'This is the search inital response'
})

module.exports = search

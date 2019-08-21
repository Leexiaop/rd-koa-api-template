const list = require('koa-router')()

list.get('/', async (ctx, next) => {
    ctx.body = {
        code: 0,
        data: [
            {
                id: 1,
                title: '世界那么大',
                content: 'dddddd'
            }
        ]
    }
})

module.exports = list
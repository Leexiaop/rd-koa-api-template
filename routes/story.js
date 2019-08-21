const story = require('koa-router')()
const list = require('../middleware/story/list')
story.get('/', function (ctx, next) {
  ctx.body = 'this is a inital story response!'
})

story.use('/list', list.routes(), list.allowedMethods())

module.exports = story

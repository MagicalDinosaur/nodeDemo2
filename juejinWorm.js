console.log('worm is working!')

let Express = require('express')
let superagent = require('superagent')// 爬虫
let cheerio = require('cheerio')// 解析dom
let app = new Express()

app.get('/getArticle', (req, res) => {
  res.send('666')
})

superagent.get('https://juejin.im/book/5a6abad5518825733c144469/section/5a6abad5518825732e2f8546').end((err, sres) => {
  if (err) {
    console.log('worm error!')
  }
  var $ = cheerio.load(sres.text)
  $('.article-content').each(element => {
    console.log(element)
  })
})

app.listen('4000')

const express = require('express')
const path = require('path')

const app = express()

app.use('/', express.static(path.resolve(__dirname, './dist')))

/**
 * ここで動的になにかしようと思うとdevServerとの齟齬が出る...どうするべきか悩み中。
 * ひとまず以下はデッドコード。このままだとブラウザキャッシュに負ける……
 */
app.get('/', (req, res) => {
  console.log('just get')
  res.status(200).sendFile(path.resolve(__dirname, './dist/index.html'))
})

app.listen('8001', () => {
  console.log('start integration layer. open http://localhost:8001/')
})

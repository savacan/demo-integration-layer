const express = require('express')
const path = require('path')

const app = express()

app.use('/public', express.static(path.resolve(__dirname, './dist')))

app.get('/', (req, res) => {
  console.log('just get')
  res.status(200).sendFile(path.resolve(__dirname, './dist/index.html'))
})

app.listen('8001', () => {
  console.log('start integration layer. open http://localhost:8001/')
})

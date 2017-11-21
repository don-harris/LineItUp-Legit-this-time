const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const deals = require('./routes/deals')

var server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/deals', deals)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server

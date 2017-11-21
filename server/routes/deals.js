const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
const db = require('../db/db')

router.use(bodyParser.json())

router.get('/', (req, res) => {
  db.getDeals()
    .then(result => res.json(result))
})

module.exports = router

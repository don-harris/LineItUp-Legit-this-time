const path = require('path')
const config = require(path.join(__dirname, '/../../knexfile')).development
const knex = require('knex')(config)

function getDeals() {
  return knex('deals')
  .select()
}

module.exports = {
  getDeals,
}
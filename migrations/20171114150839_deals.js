
exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('deals', function (table) {
    table.increments().primary(
      table.string('company'),
      table.string('image'),
      table.string('deal'),
      table.string('buyers'),
      table.string('gender')
    )
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('deals')
}

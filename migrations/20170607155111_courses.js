
exports.up = function(knex, Promise) {
  return knex.schema.createTable('courses', table => {
    table.increments()
    table.integer("ranking").notNullable()
    table.string("name").notNullable()
    table.string("image").notNullable()
    table.integer("yearFounded").notNullable()
    table.string("privatOrPublic").notNullable()
    table.string("city").notNullable()
    table.string("stateOrProvince").notNullable()
    table.string("country").notNullable()
    table.string("architects").notNullable()
    table.integer("yards").notNullable()
    table.integer("par").notNullable()
    table.float('lat', 14, 10).notNullable()
    table.float('lng', 14, 10).notNullable()
    table.text("description").notNullable()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('courses')
}

//  table.boolean("isPrivate").notNullable()

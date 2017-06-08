
exports.up = function(knex, Promise) {
  return knex.schema.createTable('courses', table => {
    table.increments()
    table.string("courseName").notNullable()
    table.string("courseImg").notNullable()
    table.string("city").notNullable()
    table.string("stateOrProvince").notNullable()
    table.string("country").notNullable()
    table.string("courseCreator").notNullable()
    table.boolean("isPrivate").notNullable()
    table.integer("yards").defaultTo(0).notNullable()
    table.integer("par").defaultTo(0).notNullable()
    table.integer("ranking").defaultTo(0).notNullable()
    table.float('lat', 14, 10).notNullable()
    table.float('lng', 14, 10).notNullable()
    table.text("description").notNullable()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('courses')
}

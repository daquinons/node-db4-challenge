
exports.up = function(knex) {
  return knex.schema
    .createTable('Recipes', table => {
      table.increments();
      table.string('name', 128).notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('Recipes');
};

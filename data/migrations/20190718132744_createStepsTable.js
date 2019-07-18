exports.up = function(knex) {
  return knex.schema.createTable('Steps', table => {
    table.increments();
    table
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('Recipes');
    table
      .integer('number_step')
      .unsigned()
      .notNullable();
    table.text('description').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('Steps');
};

exports.up = function(knex) {
  return knex.schema.createTable('RecipeIngredients', table => {
    table.increments();
    table
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('Recipes');
    table
      .integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('Ingredients');
    table
      .float('quantity')
      .unsigned()
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('RecipeIngredients');
};

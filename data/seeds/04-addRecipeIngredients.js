
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('RecipeIngredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('RecipeIngredients').insert([
        { id: 1, recipe_id: 1, ingredient_id: 1, quantity: 200 },
        { id: 2, recipe_id: 1, ingredient_id: 3, quantity: 10 },
        { id: 3, recipe_id: 1, ingredient_id: 7, quantity: 5 },
        { id: 4, recipe_id: 2, ingredient_id: 4, quantity: 100 },
        { id: 5, recipe_id: 2, ingredient_id: 2, quantity: 30 },
        { id: 6, recipe_id: 3, ingredient_id: 5, quantity: 2 },
        { id: 7, recipe_id: 3, ingredient_id: 6, quantity: 8 }
      ]);
    });
};

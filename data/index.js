const knex = require('knex');
const config = require('../knexfile');
const db = knex(config.development);

exports.getRecipes = () => {
  /*
  SELECT * FROM Recipes;
  */

  return db('Recipes');
};

exports.getShoppingList = recipe_id => {
  /*
  SELECT Ingredients.name as 'Ingredient', RecipeIngredients.quantity as 'Quantity'
    FROM RecipeIngredients
        JOIN Ingredients on RecipeIngredients.ingredient_id = Ingredients.id
          WHERE RecipeIngredients.recipe_id = recipe_id
  */

  return db('RecipeIngredients')
    .join('Ingredients', 'RecipeIngredients.id', 'Ingredients.id')
    .select('Ingredients.name', 'RecipeIngredients.quantity')
    .where('RecipeIngredients.recipe_id', recipe_id);
};

exports.getInstructions = recipe_id => {
  /*
  SELECT number_step, description from Steps
    WHERE recipe_id = 1;
  */
  return db('Steps')
    .select('Steps.number_step', 'Steps.description')
    .where('Steps.recipe_id', recipe_id);
};

const run = async () => {
  console.log('Recipes', await this.getRecipes(), '\n');
  console.log('Shopping List', await this.getShoppingList(2), '\n');
  console.log('Instructions', await this.getInstructions(1), '\n');
};

run();

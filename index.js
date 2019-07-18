const db = require('./data');
const run = async () => {
  console.log('Recipes', await db.getRecipes(), '\n');
  console.log('Shopping List', await db.getShoppingList(2), '\n');
  console.log('Instructions', await db.getInstructions(1), '\n');
  process.exit();
};

run();

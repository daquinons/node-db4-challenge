exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Ingredients')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('Ingredients').insert([
        { id: 1, name: 'Ingredient 1' },
        { id: 2, name: 'Ingredient 2' },
        { id: 3, name: 'Ingredient 3' },
        { id: 4, name: 'Ingredient 4' },
        { id: 5, name: 'Ingredient 5' },
        { id: 6, name: 'Ingredient 6' },
        { id: 7, name: 'Ingredient 7' }
      ]);
    });
};

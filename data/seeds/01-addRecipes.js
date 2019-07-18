
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('Recipes').insert([
        { id: 1, name: 'Recipe 1' },
        { id: 2, name: 'Recipe 2' },
        { id: 3, name: 'Recipe 3' }
      ]);
    });
};

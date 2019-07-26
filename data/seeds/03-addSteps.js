
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('Steps').insert([
        {
          id: 1,
          recipe_id: 1,
          number_step: 1,
          description: 'Step 1 for Recipe 1'
        },
        {
          id: 2,
          recipe_id: 1,
          number_step: 2,
          description: 'Step 2 for Recipe 1'
        },
        {
          id: 3,
          recipe_id: 1,
          number_step: 3,
          description: 'Step 3 for Recipe 1'
        },
        {
          id: 4,
          recipe_id: 2,
          number_step: 1,
          description: 'Step 1 for Recipe 2'
        },
        {
          id: 5,
          recipe_id: 2,
          number_step: 2,
          description: 'Step 2 for Recipe 2'
        },
        {
          id: 6,
          recipe_id: 2,
          number_step: 3,
          description: 'Step 3 for Recipe 2'
        },
        {
          id: 7,
          recipe_id: 3,
          number_step: 1,
          description: 'Step 1 for Recipe 3'
        },
        {
          id: 8,
          recipe_id: 3,
          number_step: 2,
          description: 'Step 2 for Recipe 3'
        },
        {
          id: 9,
          recipe_id: 3,
          number_step: 3,
          description: 'Step 3 for Recipe 3'
        }
      ]);
    });
};

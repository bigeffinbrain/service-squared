
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('people').del()
    .then(function () {
      // Inserts seed entries
      return knex('people').insert([
        { first_name: 'Anthony', last_name: 'Kallhoff', email: 'nonyabiz@shoofly.com'},
        { first_name: 'Power', last_name: 'Ranger', email: 'zord@crystal.com'},
        { first_name: 'Captain', last_name: 'Planet', email: 'green@earth.com'},
        { first_name: 'Luke', last_name: 'Skywalker', email: 'luke@toschestation.com'},
        { first_name: 'Sire', last_name: 'Denathrius', email: 'sword@flysitself.com'},
        { first_name: 'Jake', last_name: 'The-Dog', email: 'curlywhurly@adventure.com'},
        { first_name: 'Fin', last_name: 'The-Human', email: 'makin@baconpancakes.com'},
        { first_name: 'Bilbo', last_name: 'Baggins', email: 'circlehunter808@tinyhomes.com'}
      ]);
    });
};


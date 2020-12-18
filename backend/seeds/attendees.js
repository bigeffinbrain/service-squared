
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('attendees').del()
    .then(function () {
      // Inserts seed entries
      return knex('attendees').insert([
        {event_id: '1', person_id: '1'},
        {event_id: '1', person_id: '2'},
        {event_id: '1', person_id: '7'},
        {event_id: '1', person_id: '6'},
        {event_id: '2', person_id: '2'},
        {event_id: '2', person_id: '8'},
        {event_id: '3', person_id: '4'},
        {event_id: '3', person_id: '5'},
        {event_id: '5', person_id: '3'},
        {event_id: '6', person_id: '1'},
        {event_id: '6', person_id: '7'},
      ]);
    });
};


// table.integer('eventId')
// table.integer('personId')


// { fName: 'Anthony', lName: 'Kallhoff', email: 'nonyabiz@shoofly.com'},
// { fName: 'Power', lName: 'Ranger', email: 'zord@crystal.com'},
// { fName: 'Captain', lName: 'Planet', email: 'green@earth.com'},
// { fName: 'Luke', lName: 'Skywalker', email: 'luke@toschestation.com'},
// { fName: 'Sire', lName: 'Denathrius', email: 'sword@flysitself.com'},
// { fName: 'Jake', lName: 'The-Dog', email: 'curlywhurly@adventure.com'},
// { fName: 'Fin', lName: 'The-Human', email: 'makin@baconpancakes.com'},
// { fName: 'Bilbo', lName: 'Baggins', email: 'circlehunter808@tinyhomes.com'}
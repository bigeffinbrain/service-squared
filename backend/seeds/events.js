
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {name: 'Puppy Wrangling', description: 'We got a lot of pups that need wrangled', start: '2020-12-25 06:30:00', end: '2020-12-25 13:00:00', creator_id: 1},
        {name: 'Moving Chairs', description: 'Do you have strong arms?  how about strong shoulders? If you answered yes to both questions, you might be a perfect fit to help us move chairs. Please join and help us bring chairs to people around the globe. Our motto is, if you chair it, they will come.', start: '2021-01-25 00:00:00', end: '2021-02-25 23:59:00', creator_id: 2},
        {name: 'Blood Drive', description: 'The nine-line needs your blood!', start: '2022-09-23 06:30:00', end: '2022-09-30 13:00:00', creator_id: 1},
        {name: 'CMSAF Event Setup', description: 'Our CMSAF is visting and we are looking for Airmen to help setup food and drinks at the event. Its a great EPR bullet RSVP ASAP!!', start: '2020-07-23 06:30:00', end: '2020-07-23 08:00:00', creator_id: 3},
        {name: 'Pet Cemetery Cleanup', description: 'A local non-profit has asked our unit for help cleaning up the pet cemetery (pulling weeds, mowing grass, etc) if you are intrested in gaining some volunteer hours come help out!', start: '2021-06-25 06:30:00', end: '2021-06-25 13:00:00', creator_id: 4},
        {name: 'Need an app built', description: 'Our website stinks. pls make app', start: '2021-01-01 00:30:00', end: '2022-01-30 13:00:00', creator_id: 5},
      ]);
    });
};



//TIMESTAMP - format: YYYY-MM-DD HH:MI:SS
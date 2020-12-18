
exports.up = function(knex) {
    return (knex.schema.createTable('attendees', (table) => {
        table.increments('id')
        table.integer('event_id')
        table.integer('person_id')
        table.timestamp('created_at').defaultTo(knex.fn.now())
    })
    )
};

exports.down = function(knex) {
    return (knex.schema.dropTableIfExists('attendees'))
  
};

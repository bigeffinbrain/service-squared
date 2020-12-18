
exports.up = function(knex) {
    return (knex.schema.createTable('events', (table) => {
        table.increments('id')
        table.string('name')
        table.string('description')
        table.timestamp('start')
        table.timestamp('end')
        table.integer('creator_id')
        table.timestamp('created_at').defaultTo(knex.fn.now())
    })
    )
};

exports.down = function(knex) {
    return (knex.schema.dropTableIfExists('events'))
  
};

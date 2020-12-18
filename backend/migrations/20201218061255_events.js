
exports.up = function(knex) {
    return (knex.schema.createTable('events', (table) => {
        table.increments('id')
        table.string('name')
        table.string('description')
        table.date('start_date')
        table.time('start_time')
        table.date('end_date')
        table.time('end_time')
        table.integer('creatorId')
        table.timestamp('created_at').defaultTo(knex.fn.now())
    })
    )
};

exports.down = function(knex) {
    return (knex.schema.dropTableIfExists('events'))
  
};

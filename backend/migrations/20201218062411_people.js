
exports.up = function(knex) {
    return (knex.schema.createTable('people', (table) => {
        table.increments('id')
        table.string('fName')
        table.string('lName')
        table.string('email')
        table.timestamp('created_at').defaultTo(knex.fn.now())
    })
    )
};

exports.down = function(knex) {
    return (knex.schema.dropTableIfExists('people'))
  
};

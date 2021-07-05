exports.up = knex => {
    return knex.schema.createTable('products', table => {
        table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
        table.string('categoria', 255).notNullable();
        table.string('sub_categoria', 255).notNullable();
        table.string('tipo', 255).notNullable();
        table.string('marca', 255).notNullable();
        table.integer('precio').notNullable();
        table.timestamps(true, true);
    });
};

exports.down = knex => {
    return knex.schema.dropTableIfExists("products");
};

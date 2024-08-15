exports.up = async (knex) => {
  await knex.schema.createTable("tasks", (tbl) => {
    tbl.increments();
    tbl.text("title").notNullable();
    tbl.text("details").notNullable();
    tbl.boolean("completed").defaultTo(false);
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists("tasks");
};

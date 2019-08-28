exports.up = function(knex) {
  console.log("Creating topics table....");
  return knex.schema.createTable("topics", topicsTable => {
    topicsTable
      .string("slug")
      .primary()
      .unique();
    topicsTable.string("description");
  });
};

exports.down = function(knex) {
  console.log("removing topics tables...");
  return knex.schema.dropTable("topics");
};

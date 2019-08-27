exports.up = function(knex) {
  console.log("Creating topics table....");
  knex.schema.createTable("topics", topicsTable => {
    topicsTable
      .string("slug")
      .primary()
      .unique();
    topicsTable.string("description");
  });

  knex.schema.createTable("user", usersTable => {
    usersTable
      .string("username")
      .primary()
      .unique();
    usersTable.string("avatar_url");
    usersTable.string("name");
  });

  knex.schema.createTable("articles", articlesTable => {
    articlesTable.increments("article_id").primary(); // what format is the article_id? Is it a number?
    articlesTable.string("title");
    articlesTable.string("body");
    articlesTable.integer("votes", [0]);
    articlesTable.string("topic").references("topics.slug");
    articlesTable.string("author").references("users.username");
    articlesTable.timestamp("created_at");
  });
  knex.schema.createTable("comments", commentsTable => {
    commentsTable.increments("comment_id").primary(); // what format is the comment_id? Is it a number?
    commentsTable.string("author").references("users.username");
    commentsTable.integer("article_id").references("articles.article_id");
    commentsTable.integer("votes", [0]);
    commentsTable.timestamp("created_at");
    commentsTable.string("body");
  });
};

exports.down = function(knex) {};

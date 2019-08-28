// link to index file in data folder
const {
  topicData,
  articleData,
  commentData,
  userData
} = require("../data/index.js");

// utility functions
const {
  formatDates,
  formatComments,
  makeRefObj
} = require("../utils/utils.js");

exports.seed = function(knex) {
  const topicsInsertions = knex("topics").insert(topicData);
  const usersInsertions = knex("users").insert(userData);

  return (
    knex.migrate
      .rollback()
      .then(() => knex.migrate.latest())
      .then(() => {
        return Promise.all([topicsInsertions, usersInsertions]);
      })
      // articles
      .then(() => {
        // console.log("Inserted topics and users okay");
        const formattedArticles = formatDates(articleData);
        // console.log(formattedArticles);
        return knex("articles")
          .insert(formattedArticles)
          .returning("*");
      })
      .then(articleRows => {
        // console.log(makeRefObj(articleRows));
        const articleRef = makeRefObj(articleRows);
        // console.log(articleRef);
        const formattedComments = formatComments(commentData, articleRef);
        // console.log(formattedComments);
        return knex("comments").insert(formattedComments);
      })
  );
};

/* 
      
      Your article data is currently in the incorrect format and will violate your SQL schema. 
      
      You will need to write and test the provided formatDate utility function to be able insert your article data.

      Your comment insertions will depend on information from the seeded articles, so make sure to return the data after it's been seeded.
      */

/* 

      Your comment data is currently in the incorrect format and will violate your SQL schema. 

      Keys need renaming, values need changing, and most annoyingly, your comments currently only refer to the title of the article they belong to, not the id. 
      
      You will need to write and test the provided makeRefObj and formatComments utility functions to be able insert your comment data.
      */

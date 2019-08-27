// Is seed file now set up to require in either test or dev data depending on the environment?

// NOTES ON SEEDFILE
// function for logic for inserting our data in DB
// takes a connection object and a promise parameter
// consider the order the data needs to be inserted into the db (e.g. the one with the id first)

const {
  topicData,
  articleData,
  commentData,
  userData
} = require("../data/index.js");

const {
  formatDates,
  formatComments,
  makeRefObj
} = require("../utils/utils.js");

exports.seed = function(knex) {
  const topicsInsertions = knex("topics").insert(topicData);
  const usersInsertions = knex("users").insert(userData);

  return Promise.all([topicsInsertions, usersInsertions])
    .then(() => {
      /* 
      
      Your article data is currently in the incorrect format and will violate your SQL schema. 
      
      You will need to write and test the provided formatDate utility function to be able insert your article data.

      Your comment insertions will depend on information from the seeded articles, so make sure to return the data after it's been seeded.
      */
    })
    .then(articleRows => {
      /* 

      Your comment data is currently in the incorrect format and will violate your SQL schema. 

      Keys need renaming, values need changing, and most annoyingly, your comments currently only refer to the title of the article they belong to, not the id. 
      
      You will need to write and test the provided makeRefObj and formatComments utility functions to be able insert your comment data.
      */

      const articleRef = makeRefObj(articleRows);
      const formattedComments = formatComments(commentData, articleRef);
      return knex("comments").insert(formattedComments);
    });
};

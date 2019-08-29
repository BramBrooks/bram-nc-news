const { connection } = require("../db/connection");

exports.selectTopics = () => {
  console.log("hello I am a model!");
  return connection("topics").then(() => {
    return connection.select("*").from("topics");
  });
};

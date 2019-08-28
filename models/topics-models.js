const { connection } = require("../db/connection");

exports.selectTopics = () => {
  return connection.select("topics").from("topics");
};

const { selectTopics } = require("../models/topics-models");

exports.sendTopics = (req, res, next) => {
  console.log("hello I am a controller!");

  selectTopics(req.query)
    .then(topics => {
      res.status(200).send({ topics });
    })
    .catch(next);
};

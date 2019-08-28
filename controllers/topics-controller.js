const selectTopics = require("../models/topics-models");

// is this right or should it be req.body?
exports.sendTopics = (req, res, next) => {
  selectTopics(req.query)
    .then(topics => {
      res.status(200).send({ topics });
    })
    .catch(next);
};

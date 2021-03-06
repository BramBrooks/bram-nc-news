const topicsRouter = require("express").Router();

const { sendTopics } = require("../controllers/topics-controller.js");

topicsRouter.route("/").get(sendTopics);

module.exports = topicsRouter;

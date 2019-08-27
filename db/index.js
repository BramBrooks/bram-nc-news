const ENV = process.env.NODE_ENV || "development";

const testData = require("./data/test-data");

const devData = require("./data/development-data");

// what about production data?

const data = {
  development: devData,
  test: testData
};

module.exports = data[ENV];

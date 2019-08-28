// ENV variable = which node environment is in use, defaults to development
const ENV = process.env.NODE_ENV || "development";

// link to test data index file
const testData = require("./test-data");

// link to development data index file
const devData = require("./development-data");

const data = {
  development: devData,
  test: testData
};

//exports whichever set of data is in use?
// what dictates which one it is?
module.exports = data[ENV];

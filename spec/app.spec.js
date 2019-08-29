process.env.NODE_ENV = "test";

const { expect } = require("chai");

const app = require("../app");

const request = require("supertest")(app);

const connection = require("../db/connection");

// describe("/api", () => {
//   beforeEach(() => {
//     connection.seed.run();
//     after(() => connection.destroy());
//   });
// });

describe("/api", () => {
  beforeEach(() => connection.seed.run());
  after(() => connection.destroy());
  // tests...
});

describe("/topics", () => {
  describe("GET", () => {
    it("status: 200 responds with topics object from db", () => {
      return request
        .get("/api/topics")
        .expect(200)
        .then(({ body }) => {
          expect(body.topics.length).to.equal(3);
        });
    });
  });
});

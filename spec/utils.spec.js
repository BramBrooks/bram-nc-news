const { expect } = require("chai");
const {
  formatDates,
  makeRefObj,
  formatComments
} = require("../db/utils/utils");

describe("formatDates", () => {
  it("Takes an empty array and returns an empty array", () => {
    const input = [];
    const actual = formatDates(input);
    const expected = [];
    expect(actual).to.eql(expected);
  });

  it("returns correctly formatted PSQL format when passed an array of a single unix timestamp object ", () => {
    const input = [{ unixTimestamp: 1566726219 }];
    const actual = formatDates(input);
    const expected = ["Sun Aug 25 2019 10:43:39"];
    expect(actual).to.eql(expected);
  });
  it("returns correctly formatted PSQL format when passed an array of a two unix timestamp objects ", () => {
    const input = [
      { unixTimestamp: 1566726219 },
      { unixTimestamp: 1566732594 }
    ];
    const actual = formatDates(input);
    const expected = ["Sun Aug 25 2019 10:43:39", "Sun Aug 25 2019 12:29:54"];
    expect(actual).to.eql(expected);
  });
  it("returns correctly formatted PSQL format when passed an array of a two unix timestamp objects ", () => {
    const input = [
      { unixTimestamp: 1566734198 },
      { unixTimestamp: 1566734547 },
      { unixTimestamp: 1566734244 },
      { unixTimestamp: 236667600 }
    ];
    const actual = formatDates(input);
    const expected = [
      "Sun Aug 25 2019 12:56:38",
      "Sun Aug 25 2019 13:02:27",
      "Sun Aug 25 2019 12:57:24",
      "Sat Jul 02 1977 06:00:00"
    ];
    expect(actual).to.eql(expected);
  });
});

describe("makeRefObj", () => {
  it("Takes an empty array and returns an empty object", () => {
    const input = [];
    const actual = makeRefObj(input);
    const expected = {};
    expect(actual).to.eql(expected);
  });
  it("Takes an array of a single object and returns correctly formatted reference object", () => {
    const input = [{ article_id: 1, title: "A" }];
    const actual = makeRefObj(input);
    const expected = { A: 1 };
    expect(actual).to.eql(expected);
  });
  it("Takes an array of a two objects and returns correctly formatted reference object", () => {
    const input = [
      { article_id: 1, title: "A" },
      { article_id: 2, title: "B" }
    ];
    const actual = makeRefObj(input);
    const expected = { A: 1, B: 2 };
    expect(actual).to.eql(expected);
  });
  it("Takes an array of multiple objects and returns correctly formatted reference object", () => {
    const input = [
      { article_id: 1, title: "A" },
      { article_id: 2, title: "B" },
      { article_id: 3, title: "C" },
      { article_id: 4, title: "D" }
    ];
    const actual = makeRefObj(input);
    const expected = { A: 1, B: 2, C: 3, D: 4 };
    expect(actual).to.eql(expected);
  });
});

describe.only("formatComments", () => {
  it("Takes an empty array as input and returns a new empty array", () => {
    const input = [];
    const actual = formatComments(input);
    const expected = [];
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(expected);
  });
  it("Takes an array containing single object and re-names created_by key to 'author' in a new array", () => {
    const input = [{ created_by: "Bram", belongs_to: "457D" }];
    const actual = formatComments(input);
    const expected = [{ author: "Bram", article_id: "457D" }];
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(expected);
  });
  it("Takes an array containing two objects and re-names both created_by keys to 'author' in a new array", () => {
    const input = [
      { created_by: "Bram", belongs_to: "457D" },
      { created_by: "Alison", belongs_to: "888" }
    ];
    const actual = formatComments(input);
    const expected = [
      { author: "Bram", article_id: "457D" },
      { author: "Alison", article_id: "888" }
    ];
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(expected);
  });
  it("Takes an array containing single object and re-names both created_by key to 'author' and belongs_to property to article_id in a new array", () => {
    const input = [{ created_by: "Bram", belongs_to: "457D" }];
    const actual = formatComments(input);
    const expected = [{ author: "Bram", article_id: "457D" }];
    expect(actual).to.eql(expected);
    expect(actual).to.not.equal(expected);
  });
});

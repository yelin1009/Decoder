// Write your tests here!
const expect = require("chai").expect;
const substitution = require("../src/substitution.js");

describe("substitution", () => {
  it("'thinkful' should return 'jrufscpw'", () => {
    expect(substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")).to.be.eql(
      "jrufscpw"
    );
  });
  it("should preserve spaces", () => {
    expect(
      substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
    ).to.be.eql("elp xhm xf mbymwwmfj dne");
  });
  it("should decode a message by using the given substitution alphabet", () => {
    expect(
      substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)
    ).to.be.eql("elp xhm xf mbymwwmfj dne");
  });
});

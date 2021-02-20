// Write your tests here!
const expect = require("chai").expect;
const caesar = require("../src/caesar.js");

describe("caesar", () => {
  it("If the shift value is not present, return false", () => {
    expect(caesar("thinkful")).to.be.false;
  });
  it("If the shift value is geater than 25, the function should return false.", () => {
    expect(caesar("thinkful", 99)).to.be.false;
  });
  it("If the shift value is less than -25, the function should return false.", () => {
    expect(caesar("thinkful", -26)).to.be.false;
  });
  it("'Shift' the alphabet to the right by 3 and it should return 'wklqnixo'", () => {
    expect(caesar("thinkful", 3)).to.be.eql("wklqnixo");
  });
  it("'Shift' the alphabet by -3 and it should return 'qefkhcri'", () => {
    expect(caesar("thinkful", -3)).to.be.eql("qefkhcri");
  });
  it("Decode the 'wklqnixo' and it should return 'thinkful'.", () => {
    expect(caesar("wklqnixo", 3, false)).to.be.eql("thinkful");
  });
  it("Encode the text 'This is a secret message!' and it should return 'bpqa qa i amkzmb umaaiom!'", () => {
    expect(caesar("This is a secret message!", 8)).to.be.eql(
      "bpqa qa i amkzmb umaaiom!"
    );
  });
  it("Decode the text 'BPQA qa I amkzmb umaaiom!' and it should return 'this is a secret message'", () => {
    expect(caesar("BPQA qa I amkzmb umaaiom!", 8, false)).to.be.eql(
      "this is a secret message!"
    );
  });
});

// test/Sample.proxy.js
// Load dependencies
const { expect } = require("chai");

let Sample;
let sample;

// Start test block
describe("Sample (proxy)", function () {
  beforeEach(async function () {
    Sample = await ethers.getContractFactory("Sample");
    sample = await upgrades.deployProxy(Sample, [42], { initializer: "store" });
  });

  // Test case
  it("retrieve returns a value previously initialized", async function () {
    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    expect((await sample.retrieve()).toString()).to.equal("42");
  });
});

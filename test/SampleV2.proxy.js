// test/SampleV2.proxy.js
// Load dependencies
const { expect } = require("chai");

let Sample;
let SampleV2;
let sample;
let sampleV2;

// Start test block
describe("SampleV2 (proxy)", function () {
  beforeEach(async function () {
    Sample = await ethers.getContractFactory("Sample");
    SampleV2 = await ethers.getContractFactory("SampleV2");

    sample = await upgrades.deployProxy(Sample, [42], { initializer: "store" });
    sampleV2 = await upgrades.upgradeProxy(sample.address, SampleV2);
  });

  // Test case
  it("retrieve returns a value previously incremented", async function () {
    // Increment
    await sampleV2.increment();

    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    expect((await sampleV2.retrieve()).toString()).to.equal("43");
  });
});

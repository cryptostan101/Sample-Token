// test/SampleV2.js
// Load dependencies
const { expect } = require("chai");

let SampleV2;
let sampleV2;

// Start test block
describe("SampleV2", function () {
  beforeEach(async function () {
    SampleV2 = await ethers.getContractFactory("SampleV2");
    sampleV2 = await SampleV2.deploy();
    await sampleV2.deployed();
  });

  // Test case
  it("retrieve returns a value previously stored", async function () {
    // Store a value
    await sampleV2.store(42);

    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    expect((await sampleV2.retrieve()).toString()).to.equal("42");
  });

  // Test case
  it("retrieve returns a value previously incremented", async function () {
    // Increment
    await sampleV2.increment();

    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    expect((await sampleV2.retrieve()).toString()).to.equal("1");
  });
});

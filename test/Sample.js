// test/.js
// Load dependencies
const { expect } = require('chai');

let Sample;
let sample;

// Start test block
describe('Sample', function () {
  beforeEach(async function () {
    Sample = await ethers.getContractFactory("Sample");
    sample = await Sample.deploy();
    await sample.deployed();
  });

  // Test case
  it('retrieve returns a value previously stored', async function () {
    // Store a value
    await sample.store(42);

    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    expect((await sample.retrieve()).toString()).to.equal('42');
  });
});

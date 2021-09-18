require("dotenv").config();

/* eslint no-process-env:0 */
module.exports.default = {
  ALCHEMY_API_KEY: process.env.ALCHEMY_API_KEY,
  ROPSTEN_PRIVATE_KEY: process.env.ROPSTEN_PRIVATE_KEY,
  ETHERSCAN_API_KEY: process.env.ETHERSCAN_API_KEY,
  // Grab everything in your .env file here
};

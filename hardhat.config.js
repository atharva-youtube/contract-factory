require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  etherscan: {
    apiKey: "VUPRQ41H5SQ9XXKQYJH5P3VXI6P2CSS3RC",
  },
  networks: {
    mumbai: {
      url: "https://matic-mumbai.chainstacklabs.com",
    },
  },
};

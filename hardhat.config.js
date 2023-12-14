require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    forking: {
      url: "https://eth-mainnet.g.alchemy.com/v2/nY7fX7qa_ZroZHOn2ayJ7xkoln6EtLOg",
    },
  },
};

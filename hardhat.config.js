require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      // url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      url: `https://arb-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_ETHEREUM_SEPOLIA_API_KEY}`,
      accounts: [process.env.ETHEREUM_SEPOLIA_PRIVATE_KEY],
    },
  },
};

// https://hardhat.org/hardhat-runner/docs/guides/verifying
// https://ethereum.stackexchange.com/questions/126161/when-trying-to-deploy-a-smart-contract-i-keep-getting-error-hh100-network-rop
// https://sepoliafaucet.com/

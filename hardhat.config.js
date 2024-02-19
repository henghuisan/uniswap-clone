require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_ETHEREUM_SEPOLIA_API_KEY = "yX0VD1S552aD9dy0DyCbsdr9Ob6t50QE";
const ALCHEMY_ARBITRUM_SEPOLIA_API_KEY = "F6wtE-f9F1FvqUtKYQa-yBT1PnK7sKvJ";
const ETHEREUM_SEPOLIA_PRIVATE_KEY =
  "8d6bac6c71b5c3e175e5e41b19966bbda74897a70dac37adc2776ff16b613414";
const ARBITRUM_SEPOLIA_PRIVATE_KEY =
  "8d6bac6c71b5c3e175e5e41b19966bbda74897a70dac37adc2776ff16b613414";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      // url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      url: `https://arb-sepolia.g.alchemy.com/v2/${ALCHEMY_ETHEREUM_SEPOLIA_API_KEY}`,
      accounts: [ETHEREUM_SEPOLIA_PRIVATE_KEY],
    },
  },
};

// https://hardhat.org/hardhat-runner/docs/guides/verifying
// https://ethereum.stackexchange.com/questions/126161/when-trying-to-deploy-a-smart-contract-i-keep-getting-error-hh100-network-rop
// https://sepoliafaucet.com/

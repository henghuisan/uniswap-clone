const hre = require("hardhat");

async function main() {
  // // ERC20 BOO Token
  // const BooToken = await hre.ethers.getContractFactory("BooToken");
  // const booToken = await BooToken.deploy();
  // await booToken.waitForDeployment();
  // console.log(booToken);
  // console.log(`BOO deployed to ${await booToken.target}`);

  // // ERC20 GRACE Token
  // const GraceToken = await hre.ethers.getContractFactory("GraceToken");
  // const graceToken = await GraceToken.deploy();
  // await graceToken.waitForDeployment();
  // console.log(`GRACE deployed to ${await graceToken.target}`);

  // SingleSwapToken
  const SingleSwapToken = await hre.ethers.getContractFactory(
    "SingleSwapToken"
  );
  const singleSwapToken = await SingleSwapToken.deploy();
  await singleSwapToken.waitForDeployment();
  console.log(`SingleSwapToken deployed to ${await singleSwapToken.target}`);

  // // SwapMultiHop
  // const SwapMultiHop = await hre.ethers.getContractFactory("SwapMultiHop");
  // const swapMultiHop = await SwapMultiHop.deploy();
  // await swapMultiHop.waitForDeployment();
  // console.log(`SwapMultiHop deployed to ${await swapMultiHop.target}`);

  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const unlockTime = currentTimestampInSeconds + 60;

  // const lockedAmount = hre.ethers.parseEther("0.001");

  // const lock = await hre.ethers.deployContract("Lock", [unlockTime], {
  //   value: lockedAmount,
  // });

  // await lock.waitForDeployment();

  // console.log(
  //   `Lock with ${ethers.formatEther(
  //     lockedAmount
  //   )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
  // );
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

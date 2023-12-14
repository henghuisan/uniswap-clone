const { expect } = require("chai");
const { ethers } = require("hardhat");
const { BigNumber } = require("ethers");

const DAI = "0x6b175474e89094c44da98b954eedeac495271d0f";
const WETH9 = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
const USDC = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";

describe("SwapExamples", function () {
  let swapExamples;
  let accounts;
  let weth;
  let dai;
  let usdc;

  before(async () => {
    accounts = await ethers.getSigners();
    weth = await ethers.getContractAt("IWETH", WETH9);
    dai = await ethers.getContractAt("IERC20", DAI);
    usdc = await ethers.getContractAt("IERC20", USDC);

    // const swapExamples = await ethers.deployContract("Swap");
    const Swap = await ethers.getContractFactory("Swap");
    swapExamples = await SwapExamples.deploy();
    // SwapExamples.deployed();
  });

  it("swapExactInputSingle", async function () {
    try {
      // something wrong with the amount?
      const amountIn = 10n ** 18n;

      await weth.connect(accounts[0]).deposit({ value: amountIn });
      await weth.connect(accounts[0]).approve(swapExamples.target, amountIn);

      // stuck over here
      await swapExamples.swapExactInputSingle(amountIn);
      console.log("DAI balance", await dai.balanceOf(accounts[0]));
    } catch (error) {
      console.error("Error during transaction:", error.message);
    }
  });

  // it("swapExactOutputSingle", async function () {
  //   try {
  //     const wethAmountInMax = 10n ** 18n;
  //     const daiAmountOut = 100n * 10n ** 18n;

  //     await weth.connect(accounts[0]).deposit({ value: wethAmountInMax });
  //     await weth
  //       .connect(accounts[0])
  //       .approve(swapExamples.target, wethAmountInMax);

  //     await swapExamples.swapExactOutputSingle(daiAmountOut, wethAmountInMax);
  //     // console.log("DAI balance", await dai.balanceOf(accounts[0]));
  //   } catch (error) {
  //     console.error("Error during transaction:", error.message);
  //   }
  // });
});

// const DAI_ADDRESS = "0x6b175474e89094c44da98b954eedeac495271d0f";
// const WETH9_ADDRESS = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
// const USDC_ADDRESS = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
// const SwapRouterAddress = "0xE592427A0AEce92De3Edee1F18E0157C05861564";

// const ercAbi = [
//   // Read-Only Functions
//   "function balanceOf(address owner) view returns (uint256)",
//   // Authenticated Functions
//   "function transfer(address to, uint amount) returns (bool)",
//   "function deposit() public payable",
//   "function approve(address spender, uint256 amount) returns (bool)",
// ];

// describe("SingleSwapToken", function () {
//   let singleSwapToken;
//   let accounts;
//   let weth;
//   let dai;
//   let usdc;

//   before(async () => {
//     accounts = await ethers.getSigners(1);

//     /* Deploy the SingleSwap contract */
//     const SingleSwapToken = await ethers.getContractFactory("SingleSwapToken");
//     singleSwapToken = await SingleSwapToken.deploy(SwapRouterAddress);
//     // await singleSwap.deployed();

//     weth = await ethers.getContractAt("IWETH", WETH9);
//     dai = await ethers.getContractAt("IERC20", DAI);
//     usdc = await ethers.getContractAt("IERC20", USDC);

//     // console.log(weth);
//     // console.log(dai);
//     // console.log(usdc);
//     // console.log(accounts);
//     // console.log(singleSwapToken);
//   });

//   it("test", async () => {
//     const amountIn = 10n ** 18n;

//     // Deposit WETH
//     await weth.deposit({ value: amountIn });
//     await weth.approve(singleSwapToken.target, amountIn);

//     // SWAP
//     singleSwapToken.swapExactInputSingle(amountIn);

//     // console.log("DAI balance:", await dai.balanceOf(accounts[0].address));

//     console.log(accounts[0].address);
//     console.log(await dai.balanceOf(accounts[0].address));
//   });

//   // it("swapExactOutputSingle", async () => {
//   //   const wethAmountInMax = 10n ** 18n;
//   //   const daiAmountOut = 100n * 10n ** 18n;

//   //   // DEPOSIT WETH
//   //   await weth.deposit({ value: wethAmountInMax });
//   //   await weth.approve(singleSwapToken.address, wethAmountInMax);

//   //   // SWAP
//   //   await singleSwapToken.swapExactInputSingle(daiAmountOut, wethAmountInMax);
//   //   console.log(accounts[0].address);
//   //   console.log("Dai balance", await dai.balanceOf(accounts[0]));
//   // });
// });

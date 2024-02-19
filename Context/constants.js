import booToken from "./BooToken.json";
import graceToken from "./GraceToken.json";
import singleSwapToken from "./SingleSwapToken.json";
import swapMultiHop from "./SwapMultiHop.json";
import IWETH from "./IWETH.json";

// BOO Token
export const BooTokenAddress = "0xd6913b15D58Cc7E01dB9e9d154C675Ae9A8b5eFA";
export const BooTokenABI = booToken.abi;

// GRACE Token
export const GraceTokenAddress = "0x5c398e4A7B117D087f016E7c69ff33E5E19461f4";
export const GraceTokenABI = graceToken.abi;

// SingleSwapToken
export const SingleSwapTokenAddress =
  "0x04A681cfc43EE3bA1b08Bef70CBde2086Fd966C5";
// "0x7a2f6E9481E77a080552e32ce9979ACF9F53dbb0";
export const SingleSwapTokenABI = singleSwapToken.abi;

// SwapMultiHop
export const SwapMultiHopAddress = "0x26339a3cDbAe067EE41e23b704D3f032e8ecAfcC";
export const SwapMultiHopABI = swapMultiHop.abi;

// IWETH
// export const IWETHAddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
// export const IWETHAddress = "0x0091f4e75a03C11cB9be8E3717219005eb780D89";
export const IWETHAddress = "0xb16F35c0Ae2912430DAc15764477E179D9B9EbEa";
export const IWETHABI = IWETH.abi;

export const ercAbi = [
  // Read-Only Functions
  "function balanceOf(address owner) view returns (uint256)",
  // Authenticated Functions
  "function transfer(address to, uint amount) returns (bool)",
  "function deposit() public payable",
  "function approve(address spender, uint256 amount) returns (bool)",
];

// Addresses on Ethereum Sepolia
// BOO deployed to 0xfB2D717918c1BeA96caeFc8ea09F0D63b62E758A
// GRACE deployed to 0xc0F59b7880CDb326741c71d01e7798321EDc4EBC
// SingleSwapToken deployed to 0xb24212e0dF49b0176FeEce05eF33d17613F4d9F0

// Addresses on Arbitrum Sepolia
// BOO deployed to 0xd6913b15D58Cc7E01dB9e9d154C675Ae9A8b5eFA
// GRACE deployed to 0x5c398e4A7B117D087f016E7c69ff33E5E19461f4
// SingleSwapToken deployed to 0xEc9474796F07e589e7a139BdAEeBB8144E05Ea87 (v1)
// SingleSwapToken deployed to 0x7a2f6E9481E77a080552e32ce9979ACF9F53dbb0 (v2 latest)
// SwapMultiHop deployed to 0x26339a3cDbAe067EE41e23b704D3f032e8ecAfcC

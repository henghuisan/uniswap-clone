import { ethers, Contract } from "ethers";
import Web3Modal from "web3modal";

import {
  BooTokenAddress,
  BooTokenABI,
  LifeTokenAddress,
  LifeTokenABI,
  SingleSwapTokenAddress,
  SingleSwapTokenABI,
  SwapMultiHopAddress,
  SwapMultiHopABI,
  IWETHAddress,
  IWETHABI,
} from "../Context/constants";

import ERC20 from "../Context/ERC20.json";

// CHECK IF WALLET IS CONNECTED
export const checkIfWalletConnected = async () => {
  try {
    if (!window.ethereum) return console.log("Install MetaMask");
    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });
    const firstAccount = accounts[0];
    return firstAccount;
  } catch (error) {
    console.log(error);
  }
};

// CONNECT WALLLET
export const connectWallet = () => {
  try {
    // Asking if metamask is already present or not
    if (window.ethereum) {
      // res[0] for fetching a first wallet
      window.ethereum.request({ method: "eth_requestAccounts" }).then((res) => {
        const firstAccount = res[0];
        return firstAccount;
      });
    } else {
      alert("install metamask extension!!");
    }
  } catch (error) {
    console.log(error);
  }
};

// ------ FETCHING CONTRACTs -------

// FETCHING BOO CONTRACT
export const fetchBooContract = (signerOrProvider) => {
  new Contract(BooTokenAddress, BooTokenABI, signerOrProvider);
};

// CONNECTING WITH BOO TOKEN CONTRACT
export const connectingWithBooToken = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.BrowserProvider(connection);
    const signer = provider.getSigner();
    const contract = fetchBooContract(signer);
    return contract;
  } catch (error) {
    console.log(error);
  }
};

// FETCHING LIFE CONTRACT
export const fetchLifeContract = (signerOrProvider) => {
  new ethers.Contract(LifeTokenAddress, LifeTokenABI, signerOrProvider);
};

// CONNECTING WITH LIFE TOKEN CONTRACT
export const connectingWithLifeToken = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.BrowserProvider(connection);
    const signer = provider.getSigner();
    const contract = fetchLifeContract(signer);
    return contract;
  } catch (error) {
    console.log(error);
  }
};

// FETCHING SINGLESWAP CONTRACT
export const fetchSingleSwapContract = (signerOrProvider) => {
  return new ethers.Contract(
    SingleSwapTokenAddress,
    SingleSwapTokenABI,
    signerOrProvider
  );
};

// CONNECTING WITH SINGLESWAP TOKEN CONTRACT
export const connectingWithSingleSwapToken = async () => {
  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    let signer = await provider.getSigner(0);
    const contract = await fetchSingleSwapContract(signer);
    return contract;
  } catch (error) {
    console.log(error);
  }
};

// FETCHING SWAPMULTIHOP CONTRACT
export const fetchSwapMultiHopContract = (signerOrProvider) => {
  new ethers.Contract(
    SwapMultiHopTokenAddress,
    SwapMultiHopTokenABI,
    signerOrProvider
  );
};

// CONNECTING WITH SWAPMULTIHOP TOKEN CONTRACT
export const connectingWithSwapMultiHopToken = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.BrowserProvider(connection);
    const signer = provider.getSigner();
    const contract = fetchSwapMultiHopContract(signer);
    return contract;
  } catch (error) {
    console.log(error);
  }
};

// FETCHING IWETH CONTRACT
export const fetchIWETHContract = (signerOrProvider) => {
  return new Contract(IWETHAddress, IWETHABI, signerOrProvider);
};

// CONNECTING WITH IWETH TOKEN CONTRACT
export const connectingWithIWETHToken = async () => {
  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    let signer = await provider.getSigner(0);
    const contract = fetchIWETHContract(signer);
    return contract;
  } catch (error) {
    console.log(error);
  }
};

// FETCHING DAI CONTRACT
// const DAIAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
const DAIAddress = "0x9bc8388dD439fa3365B1F78A81242aDBB4677759";
export const fetchDAIContract = (signerOrProvider) => {
  return new ethers.Contract(DAIAddress, ERC20.abi, signerOrProvider);
};

export const connectingWithDAIToken = async () => {
  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    let signer = await provider.getSigner(0);
    const contract = fetchDAIContract(signer);
    return contract;
  } catch (error) {
    console.log(error);
  }
};

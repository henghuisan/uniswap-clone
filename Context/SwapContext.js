import React, { useState, useEffect, createContext } from "react";
import { ethers, Contract } from "ethers";
import Web3Modal from "web3modal";

import {
  checkIfWalletConnected,
  connectWallet,
  connectingWithBooToken,
  connectingWithLifeToken,
  connectingWithSingleSwapToken,
  connectingWithIWETHToken,
  connectingWithDAIToken,
} from "../Utils/appFeatures";

import { IWETHABI, ercAbi } from "./constants";
import ERC20 from "./ERC20.json";

export const SwapTokenContext = createContext();

export const SwapTokenContextProvider = ({ children }) => {
  const swap = "welcome to swap my token";

  const [account, setAccount] = useState("");
  const [ether, setEther] = useState("");
  const [networkConnect, setNetworkConnect] = useState("");
  const [weth9, setWeth9] = useState("");
  const [dai, setDai] = useState("");

  const [tokenData, setTokenData] = useState([]);

  const addToken = [
    // "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    "0x3A4073bcBD4bB0584B747450437A967d44F452D2", // Life Token
    "0xfB2D717918c1BeA96caeFc8ea09F0D63b62E758A", // Boo Token
  ];

  const fetchingData = async () => {
    try {
      // GET USER ACCOUNT
      let userAccount = await checkIfWalletConnected();
      if (!userAccount) return;
      setAccount(userAccount);

      // CREATE PROVIDER
      const provider = new ethers.BrowserProvider(window.ethereum);

      //CHECK BALANCE
      const balance = await provider.getBalance(userAccount);
      const convertBal = BigInt(balance);
      const ethValue = ethers.formatEther(convertBal);
      setEther(ethValue);

      // GET NETWORK
      const network = await provider.getNetwork();
      setNetworkConnect(network.name);

      // ALL TOKEN BALANCE AND DATA
      const promises = addToken.map(async (el, i) => {
        // GETTING CONTRACT
        const contract = new Contract(el, ERC20.abi, provider);

        // GETTING BALANCE OF TOKEN
        const userBalance = await contract.balanceOf(userAccount);
        const tokenLeft = await BigInt(userBalance);
        const convertTokenBal = await ethers.formatEther(tokenLeft);

        // const symbol = await contract.symbol();
        // const name = await contract.name();

        // return {
        //   name: name,
        //   symbol: symbol,
        //   tokenBalance: convertTokenBal,
        // };
      });

      // const tokenDataResults = await Promise.all(promises);
      // setTokenData(tokenDataResults);

      // // WETH Balance
      // const wethContract = await connectingWithIWETHToken();
      // const wethBal = await wethContract.balanceOf(userAccount);
      // const wethToken = await BigInt(wethBal);
      // const convertWethTokenBal = await ethers.formatEther(wethToken);
      // setWeth9(convertWethTokenBal);

      // // DAI Balance
      // const daiContract = await connectingWithDAIToken();
      // const daiBal = await daiContract.balanceOf(userAccount);
      // const daiToken = await BigInt(daiBal);
      // const convertDaiTokenBal = await ethers.formatEther(daiToken);
      // setDai(convertDaiTokenBal);

      // console.log(dai, weth9);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  // SINGLE SWAP
  const singleSwapToken = async () => {
    try {
      let singleSwapToken;
      let weth;
      let dai;

      singleSwapToken = await connectingWithSingleSwapToken();
      weth = await connectingWithIWETHToken();
      dai = await connectingWithDAIToken();

      const deposit = await weth.deposit({ value: ethers.parseEther("0.01") });
      await deposit.wait();

      await weth.approve(singleSwapToken.target, ethers.parseEther("0.001"));

      const balancee = await dai.balanceOf(account);
      const transferAmountt = await BigInt(balancee);
      const ethValuee = await ethers.formatEther(transferAmountt);

      console.log("DAI balance:", ethValuee);

      const amountIn = ethers.parseEther("0.001");
      console.log(amountIn);

      const swap = await singleSwapToken.swapExactInputSingle(amountIn, {
        // gasLimit: 100000000,
        gasLimit: 6500000,
      });
      await swap.wait();
      console.log("here2");

      const balance = await dai.balanceOf(account);
      const transferAmount = await BigInt(balance);
      const ethValue = await ethers.formatEther(transferAmount);
      setDai(ethValue);

      console.log("DAI balance:", ethValue);

      // console.log(weth);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SwapTokenContext.Provider
      value={{
        account,
        ether,
        networkConnect,
        dai,
        weth9,
        connectWallet,
        tokenData,
        singleSwapToken,
      }}
    >
      {children}
    </SwapTokenContext.Provider>
  );
};

// export default SwapTokenContextProvider;

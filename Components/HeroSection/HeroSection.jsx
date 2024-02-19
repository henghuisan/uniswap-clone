import React, { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Style from "./HeroSection.module.css";
import images from "../../assets";
import { SearchToken, Token } from "..";
import { SwapTokenContext } from "../../Context/SwapContext";

const HeroSection = ({ accounts, tokenData }) => {
  const [openSetting, setOpenSetting] = useState(false);
  const [openToken, setOpenToken] = useState(false);
  const [openTokensTwo, setOpenTokensTwo] = useState(false);

  const { account, singleSwapToken, connectWallet } =
    useContext(SwapTokenContext);

  // TOKEN ONE
  const [tokenOne, setTokenOne] = useState({
    name: "",
    images: "",
  });

  // TOKEN TWO
  const [tokenTwo, setTokenTwo] = useState({
    name: "",
    images: "",
  });

  return (
    <div className={Style.HeroSection}>
      <div className={Style.HeroSection_box}>
        <div className={Style.HeroSection_box_heading}>
          <p>Swap</p>
          <div className={Style.HeroSection_box_heading_img}>
            <Image
              src={images.close}
              alt="image"
              width={50}
              height={50}
              onClick={() => setOpenSetting(true)}
            />
          </div>
        </div>

        <div className={Style.HeroSection_box_input}>
          <input type="text" placeholder="0" />
          <button onClick={() => setOpenToken(true)}>
            <Image
              src={tokenOne.image || images.etherlogo}
              width={20}
              height={20}
              alt="ether"
            />
            {tokenOne.name || "ETH"}
            <small>9474</small>
          </button>
        </div>

        <div className={Style.HeroSection_box_input}>
          <input type="text" placeholder="0" />
          <button onClick={() => setOpenTokensTwo(true)}>
            <Image
              src={tokenTwo.image || images.etherlogo}
              width={20}
              height={20}
              alt="ether"
            />
            {tokenTwo.name || "ETH"}
            <small>9474</small>
          </button>
        </div>

        {account ? (
          <button
            className={Style.HeroSection_box_btn}
            onClick={() => singleSwapToken()}
          >
            Swap
          </button>
        ) : (
          <button
            className={Style.HeroSection_box_btn}
            onClick={() => connectWallet()}
          >
            Connect Wallet
          </button>
        )}
      </div>

      {openSetting && <Token setOpenSetting={setOpenSetting} />}

      {openToken && (
        <SearchToken
          openToken={setOpenToken}
          tokens={setTokenOne}
          tokenData={tokenData}
        />
      )}
      {openTokensTwo && (
        <SearchToken
          openToken={setOpenTokensTwo}
          tokens={setTokenTwo}
          tokenData={tokenData}
        />
      )}
    </div>
  );
};

export default HeroSection;

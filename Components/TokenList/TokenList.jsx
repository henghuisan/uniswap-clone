import React from "react";
import Image from "next/image";
import Link from "next/link";

import Style from "./TokenList.module.css";
import images from "../../assets";

const TokenList = ({ tokenData, setOpenTokenBox }) => {
  const data = [1, 2, 3, 4, 5, 6, 7];

  let tokenList = [];
  for (let i = 0; i < tokenData.length; i++) {
    if (i % 2 == 1) tokenList.push(tokenData[i]);
  }

  return (
    <div className={Style.TokenList}>
      <div className={Style.TokenList_box_heading}>
        <h4>Your Token List</h4>
        <Image
          src={images.close}
          alt="close"
          width={50}
          height={50}
          onClick={() => setOpenTokenBox(false)}
        />
      </div>

      {tokenList.map((el, i) => (
        <div className={Style.TokenList_box}>
          <div className={Style.TokenList_box_info}>
            <p className={Style.TokenList_box_info_symbol}>{el.name}</p>
            <p>
              <span>{el.tokenBalance}</span> {el.symbol}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TokenList;

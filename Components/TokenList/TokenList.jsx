import React from "react";
import Image from "next/image";
import Link from "next/link";

import Style from "./TokenList.module.css";
import images from "../../assets";

const TokenList = ({ tokenDate, setOpenTokenBox }) => {
  const data = [1, 2, 3, 4, 5, 6, 7];

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

      {data.map((el, i) => (
        <div className={Style.TokenList_box}>
          <div className={Style.TokenList_box_info}>
            <p className={Style.TokenList_box_info_symbol}>HEY</p>
            <p>
              <span>34</span> GOLD COIN
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TokenList;

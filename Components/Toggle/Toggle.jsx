import React from "react";
import Image from "next/image";
import Link from "next/link";

import Style from "./Toggle.module.css";
import images from "../../assets";

const Toggle = ({ label }) => {
  return (
    <div className={Style.Toggle}>
      <div className={Style.Toggle_switch_box}>
        <input
          type="checkbox"
          className={Style.Toggle_checkbox}
          name={label}
          id={label}
        />
        <label className={Style.Toggle_label} htmlFor={label}>
          <span className={Style.Toggle_inner} />
          <span className={Style.Toggle_switch} />
        </label>
      </div>
    </div>
  );
};

export default Toggle;

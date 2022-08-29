import clsx from "clsx";
import React from "react";
import BrokenButtonAsset from "src/assets/elements/BrokenButton/BrokenButton";
import Wallet from "src/assets/icons/Wallet";
import styles from "./BrokenButton.module.scss";

const BrokenButton = ({ text = "", className = "" }) => {
  return (
    <div className={clsx([styles.brokenButtonCont, className])}>
      <BrokenButtonAsset style={{ position: "relative" }} />
      <div className={styles.brokenButtonContent}>
        <Wallet style={{ marginLeft: "5px" }} />
        <h5>{text}</h5>
      </div>
    </div>
  );
};

export default BrokenButton;

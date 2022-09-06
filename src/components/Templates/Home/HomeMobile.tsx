import React from "react";
import DemonsLogo from "src/assets/elements/DemonsLogo/DemonsLogo";
import TheCrownMobile from "src/assets/elements/DemonsLogo/TheCrownMobile";
import Discord from "src/assets/icons/Media/Discord";
import Telegram from "src/assets/icons/Media/Telegram";
import Twitter from "src/assets/icons/Media/Twitter";
import BrokenButton from "src/components/Elements/BrokenButton";
import styles from "./Home.module.scss";

const HomeMobile = () => {
  return (
    <div className={styles.homeMobileCont}>
      <div className={styles.demonsLogoContMobile}>
        <DemonsLogo />
      </div>
      <div className={styles.crownLogoContMobile}>
        <TheCrownMobile />
      </div>
      <img
        src={"/demon-character-mobile.png"}
        className={styles.demonImageMobile}
      />
      <div className={styles.mediaContMobile}>
        <Twitter />
        <Discord />
        <Telegram />
      </div>
      <BrokenButton text={"Whitelist"} />
    </div>
  );
};

export default HomeMobile;

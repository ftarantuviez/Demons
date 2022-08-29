import React, { FC } from "react";
import BrokenButton from "src/assets/elements/BrokenButton/BrokenButton";
import TheCrown from "src/assets/elements/DemonsLogo/TheCrown";
import Discord from "src/assets/icons/Media/Discord";
import Medium from "src/assets/icons/Media/Medium";
import Telegram from "src/assets/icons/Media/Telegram";
import Twitter from "src/assets/icons/Media/Twitter";
import Wallet from "src/assets/icons/Wallet";
import * as runes from "src/components/Layouts/Main/Runes";
import useWindowSize from "src/hooks/useWindowSize";
import styles from "./Home.module.scss";
import HomeMobile from "./HomeMobile";

const HomeTemplate: FC = () => {
  const dimensions = useWindowSize();

  return (
    <div className={styles.homeWrapper}>
      <div className={styles.runesContainerLeft}>
        {runes.left.map((rune) => (
          <div key={rune.key} className={styles.runeCont}>
            {rune.rune}
          </div>
        ))}
      </div>
      {dimensions?.width < 1024 ? (
        <HomeMobile />
      ) : (
        <div className={styles.contentWrapper}>
          <div className={styles.titleCont}>
            <TheCrown />
            <h4>Coming Soon September</h4>
            <div className={styles.brokenButtonCont}>
              <BrokenButton />
              <div className={styles.brokenButtonContent}>
                <Wallet />
                <h5>Whitelist</h5>
              </div>
            </div>
            <div className={styles.mediaCont}>
              <Twitter />
              <Discord />
              <Medium />
              <Telegram />
            </div>
          </div>
          <div className={styles.demonCont}>
            <img src={"/demon-character.png"} className={styles.demonImage} />
          </div>
        </div>
      )}

      <div className={styles.runesContainerRight}>
        {runes.right.map((rune) => (
          <div key={rune.key} className={styles.runeCont}>
            {rune.rune}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeTemplate;

import React, { FC } from "react";
import * as runes from "./Runes";

import styles from "./Main.module.scss";
import DemonsLogo from "src/assets/elements/DemonsLogo/DemonsLogo";
import clsx from "clsx";

interface Props {
  children: React.ReactNode;
}

const MainLayout: FC<Props> = (props) => {
  const { children } = props;

  return (
    <div className={styles.mainLayout}>
      <div className={styles.navBar}>
        {/* RUNES LEFT */}
        <div className={styles.runesContainer}>
          {runes.topLeft.map((rune) => (
            <div key={rune.key} className={styles.runeCont}>
              {rune.rune}
            </div>
          ))}
        </div>
        {/* RUNES LEFT */}

        {/* DEMON LOGO */}
        <div className={styles.demonsLogoCont}>
          <DemonsLogo />
        </div>
        {/* DEMON LOGO */}

        {/* RUNES MOBILE */}
        <div className={clsx([styles.runesContainerMobile])}>
          {runes.topMobile.map((rune) => (
            <div key={rune.key} className={styles.runeCont}>
              {rune.rune}
            </div>
          ))}
        </div>
        {/* RUNES MOBILE */}
      </div>
      {children}
    </div>
  );
};

export default MainLayout;

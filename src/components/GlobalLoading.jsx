import React, { useEffect } from "react";

import styles from "./GlobalLoading.module.scss";

export default function Loading() {
  useEffect(() => {
    document.body.style.cssText = `
            overflow: hidden;
        `;
    return () => {
      document.body.style.cssText = `
            overflow: scroll;
        `;
    };
  }, []);
  return (
    <div className={styles["loading-container"]}>
      <div className={styles.loading}></div>
    </div>
  );
}

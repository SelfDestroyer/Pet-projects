import React from "react";

// Styles
import styles from "./ErrorMessage.module.scss";

// Animation components
import Tada from "react-reveal/Tada";

export default function ErrorMessage({ errorMessage }) {
  return (
    <Tada duration={1000} >
      <div className={styles.error}>{errorMessage}</div>
    </Tada>
  );
}

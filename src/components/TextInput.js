import React from "react";
import styles from "./TextInput.module.scss";

const TextInput = () => {
  return (
    <div className={styles.textInput}>
      <p className={styles.defaultState}>Default state</p>
    </div>
  );
};

export default TextInput;
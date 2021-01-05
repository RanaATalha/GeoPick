import React from "react";
import styles from "./textbox.scss";
import { OutlinedInput } from "@material-ui/core";

const TextPlaceholder = () => {
  return <OutlinedInput className={styles.textPlaceholder}/>;
};

export default TextPlaceholder;
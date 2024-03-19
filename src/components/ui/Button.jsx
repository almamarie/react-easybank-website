import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={`${styles.btn} ${props.className}`} type="button">
      {props.children}
    </button>
  );
};

export default Button;

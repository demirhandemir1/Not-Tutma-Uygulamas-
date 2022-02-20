import React from "react";
import styles from "./styles.module.css";

import { useVisible } from "../../context/VisibleContext";

import { BsPlusLg } from "react-icons/bs";

function AddButton() {
  const { visible, setVisible } = useVisible();
  return (
    <button
      className={styles["add-button"]}
      onClick={() => setVisible(visible ? false : true)}
    >
      <BsPlusLg size={30} />
    </button>
  );
}

export default AddButton;

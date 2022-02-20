import React from "react";

import styles from "./styles.module.css";

import { useVisible } from "../../context/VisibleContext";

import { TiDelete } from "react-icons/ti";
import { FaSave } from "react-icons/fa";

const dayArray = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const monthArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function Header({ clickT }) {
  const { visible, setVisible, deleteForm, setDeleteForm } = useVisible();

  let currentDate = new Date();

  const deleteBtnClick = () => {
    setVisible(!visible);
    setDeleteForm(!deleteForm);
  };

  return (
    <div className={styles["header"]}>
      <div className={styles["datee"]}>
        <h2>{dayArray[currentDate.getDay()]}</h2>
        <h3>
          {`${currentDate.getDate()} ${monthArray[currentDate.getMonth()]}, 
          ${currentDate.getFullYear()} at ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`}
        </h3>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <FaSave
            size={44}
            className={styles["icon-delete"]}
            onClick={clickT}
          />
        </div>
        <span style={{ margin: "0px 5px" }}></span>
        <div>
          <TiDelete
            size={60}
            className={styles["icon-delete"]}
            onClick={deleteBtnClick}
          />
        </div>
      </div>
    </div>
  );
}

export default React.memo(Header);

import React from "react";
import AddButton from "../buttons/AddButton";
import NoteForm from "./NoteForm";

import { useVisible } from "../../context/VisibleContext";

import styles from "./styles.module.css";

function Card() {
  const { visible } = useVisible();

  return (
    <main className={styles.main}>
      {visible ? (
        <div style={{ display: visible ? "flex" : "none" }}>
          <AddButton />
        </div>
      ) : (
        <NoteForm />
      )}
    </main>
  );
}

export default Card;

import React, { useState, useCallback, useEffect } from "react";

import Header from "./Header";

import styles from "./styles.module.css";

import MarkdownIt from "markdown-it";

import styled, { keyframes } from "styled-components";
import { zoomIn, tada, fadeOut } from "react-animations";

import { BiShow } from "react-icons/bi";

import TextareaAutosize from "react-textarea-autosize";

import FileSaver from "file-saver";

const zoomInAnimation = keyframes`${zoomIn}`;
const tadaAnimation = keyframes`${tada}`;
const fadeOutAnimation = keyframes`${fadeOut}`;

const ZoomInDiv = styled.div`
  animation: 1s ${zoomInAnimation};
  width: 100%;
  height: 100%;
`;
const TadaDiv = styled.div`
  animation: 1.2s ${tadaAnimation};
  width: 100%;
  height: 100%;
`;

const FadeOutDiv = styled.div`
  animation: 1s ${fadeOutAnimation};
  width: 100%;
  height: 100%;
`;

function NoteForm() {
  let [textAreaFocus, setTextAreaFocus] = useState(false);

  let [markdownText, setMarkDownText] = useState("");

  let [renderedHTML, setRenderedHTML] = useState("");

  let [click, setClick] = useState(0);

  let [fileName, setFileName] = useState("untitled-note");

  const handleTextInput = (e) => {
    setMarkDownText(e.target.value);

    let md = new MarkdownIt();

    let renderedHTML = md.render(e.target.value);

    setRenderedHTML(renderedHTML);
  };

  const markdownTxt = useEffect(() => {
    if (click > 0) {
      let blobFile = new Blob([markdownText], {
        type: "text",
      });

      FileSaver.saveAs(blobFile, fileName + ".md");
    }
  }, [click]);

  const clickFunc = useCallback(() => {
    setClick((prevState) => prevState + 1);
  }, []);

  return (
    <article>
      <ZoomInDiv>
        <TadaDiv>
          <div className={styles["container"]}>
            <Header markdownTxt={markdownTxt} clickT={clickFunc} />
            <section className={styles.section}>
              {textAreaFocus ? (
                <div
                  dangerouslySetInnerHTML={{ __html: renderedHTML }}
                  className={styles["markdown-body"]}
                ></div>
              ) : (
                <TextareaAutosize
                  value={markdownText}
                  onChange={handleTextInput}
                  placeholder="Write your note here... And click the eye button"
                  autoFocus
                ></TextareaAutosize>
              )}
              <div className={styles["icon-container"]}>
                <BiShow
                  size={34}
                  className={styles["icon-show"]}
                  onClick={() => setTextAreaFocus(textAreaFocus ? false : true)}
                  color={textAreaFocus ? "#4b6587" : "#c8c6c6"}
                />
              </div>
            </section>
          </div>
        </TadaDiv>
      </ZoomInDiv>
    </article>
  );
}

export default NoteForm;

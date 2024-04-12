import React from "react";
import styles from "./Summary.module.css";
import Markdown from "react-markdown";

function Summary({ summary, isLoading }) {
  return (
    <>
      <div className={styles.container}>
        <img className={styles.bot_icon} src="/app-icon.jpeg" alt="#" />
        <div
          className={styles.summary}
          style={{
            backgroundColor:
              summary == "" ? "transparent" : "var(--foreground)",
          }}
        >
          {isLoading && <div className={styles.loader}></div>}
          {summary != "" && <Markdown>{summary}</Markdown>}
        </div>
      </div>
    </>
  );
}

export default Summary;

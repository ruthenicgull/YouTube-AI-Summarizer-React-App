import styles from "./App.module.css";
import LinkForm from "./LinkForm";
import { useState } from "react";
import axios from "axios";
import Summary from "./Summary";

function App() {
  const [link, setLink] = useState("");
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showSummary, setShowSummary] = useState(false);

  const url =
    "https://youtube-ai-summarizer-flask-server.onrender.com/api/summary";

  function inputChangeHandler(event) {
    setLink(event.target.value);
  }

  async function getSummary(link) {
    try {
      const response = await axios.post(url, { data: link });
      setSummary(response.data.summary);
      setIsLoading(false);
    } catch (error) {
      setErrorMessage(error);
    }
  }

  function handleLinkSubmit(event) {
    setIsLoading(true);
    event.preventDefault();
    setShowSummary(true);
    setErrorMessage("");
    setSummary("");
    if (link == "") {
      console.log("here");
      setErrorMessage("Please enter a link");
      return;
    }
    getSummary(link);
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>YouTube AI Summarizer</h1>
      <LinkForm
        link={link}
        inputChangeHandler={inputChangeHandler}
        handleLinkSubmit={handleLinkSubmit}
      />
      {summary != "" && (
        <button className={styles.regenerate_option} onClick={handleLinkSubmit}>
          Regenerate
        </button>
      )}
      {errorMessage != "" && (
        <p className={styles.error_message}>{errorMessage}</p>
      )}
      {showSummary && <Summary summary={summary} isLoading={isLoading} />}
    </div>
  );
}

export default App;

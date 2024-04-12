import styles from "./LinkForm.module.css";
import SendIcon from "@mui/icons-material/Send";

function LinkForm({ link, inputChangeHandler, handleLinkSubmit }) {
  return (
    <form className={styles.container} onSubmit={handleLinkSubmit}>
      <input
        type="text"
        className={styles.input}
        placeholder="Enter YouTube video link"
        value={link}
        onChange={inputChangeHandler}
      />
      <button className={styles.button}>
        <SendIcon />
      </button>
    </form>
  );
}

export default LinkForm;

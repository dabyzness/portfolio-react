import styles from "./Footer.module.css";

const Footer = ({ isBottom }) => {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.verticalLine1}></div>
        <a href="" className={styles.link}>
          <img src="./img/mail.png" alt="e-mail" />
        </a>
        <div className={styles.dot}></div>
        <a
          href="https://github.com/dabyzness"
          className={styles.link}
          rel="noreferrer"
          target="_blank"
        >
          <img src="./img/github.png" alt="github" />
        </a>
        <div className={styles.dot}></div>
        <a
          href="https://www.linkedin.com/in/bzdyrad/"
          className={styles.link}
          rel="noreferrer"
          target="_blank"
        >
          <img src="./img/linkedin-black.png" alt="linkedin" />
        </a>
        <div className={styles.dot}></div>
        <p className={styles.scroll}>scroll</p>
        <i
          className={
            !isBottom ? `${styles.arrow} ${styles.down}` : styles.atBottom
          }
        ></i>
        <i
          className={
            !isBottom ? `${styles.arrow} ${styles.down}` : styles.atBottom
          }
        ></i>
        <i
          className={
            !isBottom ? `${styles.arrow} ${styles.down}` : styles.atBottom
          }
        ></i>
      </div>
    </footer>
  );
};

export default Footer;

import styles from "./Footer.module.css";

const Footer = (props) => {
  return (
    <footer style={{ marginTop: "5px" }}>
      <div className={styles.container}>
        <div style={{ marginLeft: "1rem", width: "100%" }}>
          <img src="./img/mail.png" alt="e-mail" style={{ height: "1rem" }} />
          <span style={{ marginLeft: ".5rem" }}>bzdyrad@gmail.com</span>
        </div>
        <a href="https://github.com/dabyzness">
          <img
            src="./img/github.png"
            alt="github"
            style={{ height: "1.5rem", marginLeft: "auto" }}
          />
        </a>
        <a href="https://www.linkedin.com/in/bzdyrad/">
          <img
            src="./img/linkedin.png"
            alt="linkedin"
            style={{
              marginLeft: "1rem",
              marginRight: "1rem",
              height: "1.6rem",
            }}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

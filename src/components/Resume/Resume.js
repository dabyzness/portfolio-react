import { useNavigate } from "react-router-dom";
import styles from "./Resume.module.css";

const Resume = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h2>Résumé</h2>

      <div className={styles.viewContainer}>
        <img className={styles.clickMe} src={"./img/fast-forward.png"} />
        <p
          className={styles.viewResume}
          onClick={() => {
            navigate("/resume");
            window.scrollTo(0, 0);
          }}
        >
          View Résumé
        </p>
        <img className={styles.clickMe} src={"./img/rewind.png"} />
      </div>

      <a
        href={require("../../pages/Resume/DamianBzdyra-resume.pdf")}
        className={styles.btnSlide2}
        download
      >
        <span className={styles.circle2}></span>
        <span className={styles.title2}>Download CV</span>
        <span className={styles.titleHover2}>Click Here</span>
      </a>
    </div>
  );
};

export default Resume;

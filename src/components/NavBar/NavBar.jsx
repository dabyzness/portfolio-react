import { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar({ show }) {
  const home = useRef();

  const location = useLocation();
  const navigate = useNavigate();

  function goHome() {
    navigate("/");
    window.scrollTo(0, 0);
  }

  return (
    <nav>
      <ul className={styles.container}>
        <li
          className={
            show || location.pathname !== "/"
              ? `${styles.home} ${styles.bottomUp}`
              : `${styles.home} ${styles.topDown}`
          }
          ref={home}
          onClick={goHome}
        >
          <span className={styles.initial}>D</span>amian{" "}
          <span className={styles.initial}>B</span>zdyra
        </li>
        {/* <li className={styles.item}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.item}>
          <Link to="/projects">Projects</Link>
        </li> */}
        <li
          className={styles.item}
          onClick={() => {
            navigate("/resume");
            window.scrollTo(0, 0);
          }}
        >
          Résumé
        </li>
        {/* <li className={styles.item}>
          <Link to="/contact">Contact</Link>
        </li> */}
      </ul>
    </nav>
  );
}

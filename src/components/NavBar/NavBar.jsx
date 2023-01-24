import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav>
      <ul className={styles.container}>
        <li className={styles.home}>
          <span className={styles.initial}>D</span>amian{" "}
          <span className={styles.initial}>B</span>zdyra
        </li>
        <li className={styles.item}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.item}>
          <Link to="/projects">Projects</Link>
        </li>
        <li className={styles.item}>
          <Link to="/resume">Resume</Link>
        </li>
        {/* <li className={styles.item}>
          <Link to="/contact">Contact</Link>
        </li> */}
      </ul>
    </nav>
  );
}

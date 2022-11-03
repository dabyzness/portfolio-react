import { useEffect, useRef } from "react";
import styles from "./Home.module.css";

export default function Home() {
  const lastRef = useRef();

  const handleClick = (e) => {
    lastRef.current.className = `${styles.pronunciation} ${styles.active}`;
  };

  return (
    <main>
      <div className={styles.helloContainer}>
        <div className={styles.hi}>
          <p>Hi</p>
        </div>
        <div className={styles.name}>
          <span>Im</span>
          <span>Damian</span>
          <span
            className={styles.lastName}
            spellCheck="true"
            onClick={handleClick}
          >
            Bzdyra
          </span>
          <div className={styles.pronunciation} ref={lastRef}>
            <ul>
              <li style={{ textAlign: "center" }}>Pronunciation</li>
              <li>
                <span>Bz</span> as in <span>Bus</span>iness
              </li>
              <li>
                <span>dy</span> as in <span>Di</span>stinct
              </li>
              <li>
                <span>ra</span> as in<span>Ra</span>venous
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.left}></div>

        <div className={styles.right}></div>
        <h2>Damian Bzdyra</h2>
        <h3>Full Stack Dev</h3>
        <img src="./img/profile.jpg" alt="profile" />
      </div>
    </main>
  );
}

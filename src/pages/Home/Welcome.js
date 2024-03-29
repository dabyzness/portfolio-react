import { useRef, forwardRef } from "react";
import styles from "./Welcome.module.css";

const Welcome = forwardRef((props, ref) => {
  const lastRef = useRef();

  const handleClick = (e) => {
    lastRef.current.className = `${styles.pronunciation} ${styles.active}`;
  };

  return (
    <div className={styles.helloContainer}>
      <div className={styles.hi}>
        <p></p>
        {/* <p>Hi</p> */}
      </div>

      <div className={styles.name}>
        <span>I'm</span>
        <span>Damian</span>
        <span className={styles.lastName} onClick={handleClick}>
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

      <div className={styles.right}>
        <img src="./img/profile.jpg" alt="profile" ref={ref} />
      </div>
    </div>
  );
});

export default Welcome;

import { useEffect, useRef } from "react";
import styles from "./Home.module.css";

export default function Home() {
  const bgRef = useRef();
  const helloRef = useRef();

  useEffect(() => {
    const handleScroll = (e) => {
      console.log(bgRef);
      if (window.scrollY === 0) {
        bgRef.current.className = styles.background;
        helloRef.current.className = styles.hello;
      } else {
        bgRef.current.className = `${styles.background} ${styles.active}`;
        helloRef.current.className = `${styles.hello} ${styles.hi}`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.background} ref={bgRef}></div>
        <p className={styles.hello} ref={helloRef}>
          HELLO!
        </p>
      </div>
      <h2>Damian Bzdyra</h2>
      <h3>Full Stack Dev</h3>
      <img src="" alt="profile-picture" />
    </>
  );
}

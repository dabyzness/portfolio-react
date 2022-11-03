import { useRef } from "react";
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
        <div className={styles.left}>
          <h2>Full Stack Developer</h2>
          <p>
            I’m a software developer with a focus in ethical client-minded
            design, believing that tech should minimize the stressors in our
            lives, not magnify them. When it comes to programming, I’m
            passionate about efficiency, readability, documentation, and
            testing. I thrive under pressure and tight-deadlines while
            maintaining my composure, reliability, and dependability. By
            bringing a forward thinking approach to designing solutions, I keep
            scalability and optimization at the forefront of my problem solving.
          </p>
        </div>

        <div className={styles.right}>
          <img src="./img/profile.jpg" alt="profile" />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.left2}></div>

        <div className={styles.right2}>
          <h2>About Me</h2>
          <p>
            I'm a first generation immigrant of Polish descent. Although I was
            born in another country, I emigrated from Poland at a very early
            age, and so I hold my culture close to my heart. I am deeply
            saddened whenever there aren't any good pickles, kielbasa, or loaves
            of bread nearby. I'm sure by the adjacent image you can tell what my
            favorite food is <span>(hint, it's pierogi)</span>.
          </p>
          <p>
            During my spare time I like to go hiking with my dog, Beans, watch
            avant-garde movies, collect records, and cook extravagant meals. I
            have a pretty heavy-duty DIY attitude so occasionally you might find
            me tinkering with a Raspberry Pi, woodworking, gardening,
            embroidering, or even fermenting my own foods!
          </p>
        </div>
      </div>

      <div className={styles.container}></div>
    </main>
  );
}

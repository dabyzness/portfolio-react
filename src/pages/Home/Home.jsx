import { useRef } from "react";
import styles from "./Home.module.css";

import Welcome from "./Welcome";
import TechStack from "../../components/TechStack/TechStack";
import ProjectStack from "../../components/ProjectStack/ProjectStack";
import Block from "../../components/Block/Block";
import TextHalf from "../../components/Block/TextHalf";
import ImageHalfCircle from "../../components/Block/ImageHalfCircle";
import ImageHalfFull from "../../components/Block/ImageHalfFull";

// Data
import { professionalSummary, aboutMe } from "../../data/about";
import InfiniteLooper from "../../components/InfiniteLooper/InfiniteLooper";
import { stackImg } from "../../data/stackImg";

export default function Home() {
  const lastRef = useRef();

  // This needs fixing because its not a smooth transition
  const welcomeRef = useRef();
  const profileRef = useRef();

  const updatePosition = () => {
    // if (window.innerHeight - window.scrollY < window.innerHeight * 0.3333) {
    //   welcomeRef.current.style.display = "none";
    //   profileRef.current.style.display = "block";
    // } else {
    //   profileRef.current.style.display = "none";
    //   welcomeRef.current.style.display = "block";
    // }
  };

  window.addEventListener("scroll", updatePosition);

  const handleClick = (e) => {
    lastRef.current.className = `${styles.pronunciation} ${styles.active}`;
  };

  return (
    <main>
      <Welcome />

      <Block>
        <TextHalf
          title={professionalSummary.title}
          textArr={professionalSummary.textArr}
        />
        <ImageHalfCircle imgSrc={professionalSummary.img} altText="Profile" />
      </Block>

      <Block>
        <ImageHalfFull imgSrc={aboutMe.img} altText="Pierogi" />
        <TextHalf title={aboutMe.title} textArr={aboutMe.textArr} />
      </Block>

      {/* <TechStack /> */}
      <InfiniteLooper speed="10" direction="left">
        {Object.entries(stackImg).map((entry, i) => (
          <img
            key={i}
            src={entry[1]}
            alt={entry[0]}
            style={{ padding: "0 1rem", height: "50px" }}
          />
        ))}
      </InfiniteLooper>

      {/* <div className={styles.container}>
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
          <img src="./img/profile.jpg" alt="profile" ref={profileRef} />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.left2}></div>

        <div className={styles.right2}>
          <h2>About Me</h2>
          <p>
            I’m a first generation immigrant of Polish descent. Though I
            emigrated from Poland when I was young, I hold my culture close to
            my heart. I am deeply saddened whenever there aren't any good
            pickles, kielbasa, or loaves of bread nearby. I'm sure by the
            adjacent image you can tell what my favorite food is{" "}
            <span>(hint, it's pierogi)</span>.
          </p>
          <p>
            During my spare time I like to go hiking with my dog, Beans, watch
            arthouse films, collect records, and cook extravagant meals. I have
            a pretty heavy-duty DIY attitude so occasionally you might find me
            tinkering with a Raspberry Pi, woodworking, gardening, embroidering,
            or even fermenting my own foods!
          </p>
        </div>
      </div> */}
      {/* <div className={styles.container} style={{ minHeight: "250px" }}>
        <TechStack />
        <ProjectStack />
      </div> */}

      {/* <div className={styles.container}>
        <div className={styles.skillsContainer}>
          <h2>Tech Stack</h2>
          <div className={styles.skills}>
            <img src="./img/html5.png" alt="HTML5" />

            <img src="./img/docker.png" alt="Docker" />

            <img src="./img/css3.png" alt="CSS3" />
            <img src="./img/mui.png" alt="MUI" />
            <img src="./img/bootstrap.png" alt="Bootstrap" />

            <img src="./img/django.png" alt="Django" />

            <img src="./img/express.png" alt="Express.JS" />

            <img src="./img/javascript.png" alt="JavaScript" />
            <img src="./img/mongodb.png" alt="MongoDB" />

            <img src="./img/netlify.png" alt="Netlify" />
            <img src="./img/nodejs.png" alt="Node.JS" />
            <img src="./img/postgresql.png" alt="PostgreSQL" />

            <img src="./img/typescript.png" alt="TypeScript" />

            <img src="./img/python.png" alt="Python" />
            <img src="./img/react.png" alt="React" />
          </div>
        </div>
      </div> */}

      {/* <div className={styles.container}>
        <div className={styles.left}>
          <h2
            style={{ width: "75%", textAlign: "center", marginBottom: "8px" }}
          >
            Thank you for stopping by
          </h2>
          <p style={{ marginBottom: "8px", marginTop: "8px" }}>
            Before you go, treat yourself to a quick stretch! We sit at our
            computers motionless, for hours at a time, let's do some quick neck
            stretches to relieve ourselves of some of that stress we've been
            holding onto! Breathe along to the pulsating orb on the right.
          </p>
          <ul style={{ listStyleType: "decimal", width: "75%" }}>
            <li>
              Extend your left arm down to the left. Tilt your head to the right
              and place your right palm on top of your head, gently pressing
              down. Hold for 5 breath cycles. Repeat on the other side.
            </li>
            <li>
              With a straight back, tilt your head as far back as you can manage
              and hold for 5 breath cycles.
            </li>
            <li>
              With a straight back, tilt you head down, chin to torso, and hold
              for 5 breath cycles.
            </li>
            <li>
              Extend your arms to the side, parallel to the floor. Bend your
              arms up at a 90 degree angle, with your palms facing forward. Try
              to push your elbows backwards to feel a stretch in your upper
              back. Hold for 10 breath cycles.
            </li>
          </ul>
        </div>
        <div className={styles.right}>
          <div className={styles.circle}>
            <span></span>
          </div>
        </div>
      </div> */}
    </main>
  );
}

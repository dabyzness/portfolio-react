import InfiniteLooper from "./InfiniteLooper";

import styles from "./styles/TechStack.module.css";
import { stackImg } from "../../data/stackImg";

const TechStack = (props) => {
  return (
    <div className={styles.container}>
      <h2>Tech Stack</h2>
      <InfiniteLooper speed="20" direction="left">
        {Object.entries(stackImg).map((entry, i) => (
          <div className={styles.iconContainer}>
            <img
              key={i}
              className={styles.icons}
              src={entry[1]}
              alt={entry[0]}
              style={{ padding: "0 3rem", height: "50px" }}
            />
            <p className={styles.text}>
              {entry[0][0].toUpperCase() + entry[0].slice(1)}
            </p>
          </div>
        ))}
      </InfiniteLooper>
    </div>
  );
};

export default TechStack;

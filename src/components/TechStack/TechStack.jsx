import styles from "./TechStack.module.css";
import { stackImg } from "../../data/stackImg";

const TechStack = (props) => {
  return (
    <div className={styles.container}>
      {Object.entries(stackImg).map((entry, i) => (
        <img key={i} src={entry[1]} alt={entry[0]} className={styles.icon} />
      ))}
    </div>
  );
};

export default TechStack;

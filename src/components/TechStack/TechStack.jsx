import styles from "./TechStack.module.css";

const TechStack = (props) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.techHeading}>Tech I Use</h2>
      <div className={styles.topBorder}></div>
      <div className={styles.leftBorder}></div>

      <ul className={styles.stack}>
        <li>
          <img src="./img/react.png" alt="" />
          React.JS
        </li>
        <li>
          <img src="./img/typescript.png" alt="" />
          TypeScript
        </li>
        <li>
          <img src="./img/postgresql.png" alt="" />
          Postgres
        </li>
        <li>
          <img src="./img/mongodb.png" alt="" />
          MongoDB
        </li>
        <li>
          <img src="./img/python.png" alt="" />
          Python
        </li>
      </ul>
    </div>
  );
};

export default TechStack;

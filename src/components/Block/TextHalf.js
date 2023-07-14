// Styles
import styles from "./styles/TextHalf.module.css";

const TextHalf = ({ title, textArr, ref = null, side = "left" }) => {
  return (
    <div className={`${styles.container} ${styles[side]}`} ref={ref}>
      <h2>{title}</h2>
      {textArr.map((text) => (
        <p>{text}</p>
      ))}
    </div>
  );
};

export default TextHalf;

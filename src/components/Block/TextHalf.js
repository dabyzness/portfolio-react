// Styles
import styles from "./styles/TextHalf.module.css";

const TextHalf = ({ title, textArr, ref = null, side = "left", sx }) => {
  return (
    <div className={`${styles.container} ${styles[side]}`} ref={ref} style={sx}>
      <h2>{title}</h2>
      {textArr.map((text, i) => (
        <p key={i}>{text}</p>
      ))}
    </div>
  );
};

export default TextHalf;

// Styles
import styles from "./styles/ImageHalfFull.module.css";

const ImageHalfFull = ({ imgSrc, altText, ref = null }) => {
  return (
    <div
      className={`${styles.container} ${styles.full}`}
      style={{ backgroundImage: `url(${imgSrc})` }}
      aria-label={altText}
      ref={ref}
    ></div>
  );
};

export default ImageHalfFull;

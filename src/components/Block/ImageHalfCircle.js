// Styles
import styles from "./styles/ImageHalfCircle.module.css";

const ImageHalfCircle = ({ imgSrc, altText, ref }) => {
  return (
    <div className={styles.container}>
      <img src={imgSrc} alt={altText} className={styles.circle} ref={ref} />
    </div>
  );
};

export default ImageHalfCircle;

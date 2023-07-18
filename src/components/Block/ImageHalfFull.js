// Styles
import styles from "./styles/ImageHalfFull.module.css";

const ImageHalfFull = ({
  imgSrc,
  altText,
  repeat = true,
  ref = null,
  isBackground = true,
}) => {
  return (
    <div
      className={`${styles.container} ${repeat === true ? styles.repeat : ""}`}
      style={{ backgroundImage: isBackground ? `url(${imgSrc})` : "" }}
      aria-label={altText}
      ref={ref}
    >
      {!isBackground && (
        <img src={imgSrc} alt={altText} className={styles.full} />
      )}
    </div>
  );
};

export default ImageHalfFull;

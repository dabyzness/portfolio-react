// Styles
import { forwardRef } from "react";
import styles from "./styles/ImageHalfCircle.module.css";

const ImageHalfCircle = forwardRef(({ imgSrc, altText }, ref) => {
  return (
    <div className={styles.container}>
      <img src={imgSrc} alt={altText} className={styles.circle} ref={ref} />
    </div>
  );
});

export default ImageHalfCircle;

// Libraries
import { Children, cloneElement } from "react";
// Style
import React from "react";
import styles from "./styles/Block.module.css";

/**
 * Block is a container for a max of 2 children
 * @param {React.Component} children
 * @returns
 * Possible children include:
 * TextHalf
 * ImageHalfCircle
 * ImageHalfFull
 */
const Block = ({ children }) => {
  const arrayChildren = Children.toArray(children);

  if (arrayChildren.length !== 2) {
    throw new Error(
      `Component Block must have 2 children. Current number of children is ${arrayChildren.length}`
    );
  }

  return (
    <div className={styles.container}>
      {Children.map(arrayChildren, (child, index) => {
        const isLast = index === arrayChildren.length - 1;

        if (isLast && child.props.title) {
          return cloneElement(child, { side: "right" });
        }

        return cloneElement(child);
      })}
    </div>
  );
};

export default Block;

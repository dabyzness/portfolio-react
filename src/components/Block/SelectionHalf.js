import styles from "./styles/SelectionHalf.module.css";

const SelectionHalf = ({ options, onSelect, selected }) => {
  return (
    <div className={styles.container}>
      {options.map((option, i) => (
        <h3
          key={i}
          onClick={onSelect}
          className={`${styles.option} ${
            option === selected ? styles.selected : ""
          }`}
        >
          {option}
        </h3>
      ))}
    </div>
  );
};

export default SelectionHalf;

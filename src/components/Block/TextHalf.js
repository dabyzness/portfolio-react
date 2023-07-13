const TextHalf = ({ title, textArr, ref }) => {
  return (
    <div ref={ref}>
      <h2>{title}</h2>
      {textArr.map((text) => (
        <p>{text}</p>
      ))}
    </div>
  );
};

export default TextHalf;

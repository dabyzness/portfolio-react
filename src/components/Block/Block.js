import TextHalf from "./TextHalf";
import ImageHalf from "./ImageHalf";

const Block = ({ direction = "forward", img = null, textArr = [], title }) => {
  if (direction === "reverse") {
    return (
      <>
        <ImageHalf img={img} />
        <TextHalf textArr={textArr} title={title} />
      </>
    );
  }

  return (
    <>
      <TextHalf textArr={textArr} title={title} />
      <ImageHalf img={img} />
    </>
  );
};

export default Block;

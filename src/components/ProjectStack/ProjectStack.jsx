import { useState } from "react";

import Block from "../Block/Block";
import TextHalf from "../Block/TextHalf";

import styles from "./ProjectStack.module.css";

import { projects } from "../../data/projects";
import SelectionHalf from "../Block/SelectionHalf";
import ImageHalfFull from "../Block/ImageHalfFull";

const ProjectStack = () => {
  const [currProject, setCurrProject] = useState(projects[0]);

  function onSelect(e) {
    console.log(e.target.innerHTML);
    setCurrProject(
      projects.find((project) => project.title === e.target.innerHTML)
    );
  }

  return (
    <div className={styles.container}>
      <h2>Projects</h2>
      <Block>
        <Block>
          <SelectionHalf
            options={projects.map((project) => project.title)}
            onSelect={onSelect}
            selected={currProject.title}
          />
          <TextHalf
            title={""}
            textArr={[currProject.description]}
            // side="right"
            sx={{ width: "75%" }}
          />
        </Block>
        <ImageHalfFull
          imgSrc={currProject.img}
          altText={currProject.title}
          repeat={false}
          isBackground={false}
        />
      </Block>
    </div>
  );
};

export default ProjectStack;

import { Link } from "react-router-dom";

import { hyphenateWords } from "../../util/hyphenateWords.js";
import { stackImg } from "../../data/stackImg.js";
import styles from "./ProjectPreview.module.css";

const ProjectPreview = ({ project }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src={project.img}
          alt={project.title}
          referrerPolicy="no-referrer"
        />
      </div>

      <div className={styles.cardContainer}>
        <div className={styles.header}>
          <h2>{project.title}</h2>
          <a
            style={{ margin: "auto .5rem", marginLeft: "auto" }}
            href={project.repositoryLink}
            rel="noreferrer"
            target="_blank"
          >
            <img
              style={{
                height: "36px",
              }}
              src="./img/github.png"
              alt="github"
            />
          </a>
          {project.deploymentLink && (
            <a
              style={{ margin: "auto .5rem", marginRight: "0" }}
              href={project.deploymentLink}
              rel="noreferrer"
              target="_blank"
            >
              <img
                style={{
                  height: "36px",
                }}
                src="./img/external.png"
                alt="deployment link"
              />
            </a>
          )}
        </div>
        <div className={styles.body}>{project.description}</div>
        <div className={styles.foot}>
          {project.stack.map((item) => (
            <img src={stackImg[item]} alt={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;

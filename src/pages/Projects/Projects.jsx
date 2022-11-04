import ProjectsList from "../../components/ProjectsList/ProjectsList.jsx";

import { projects } from "../../data/projects.js";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 className={styles.projects}>Projects</h1>
      <ProjectsList projects={projects} />
    </main>
  );
}

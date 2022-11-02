import ProjectsList from "../../components/ProjectsList/ProjectsList.jsx";

import { projects } from "../../data/projects.js";

export default function Projects() {
  return (
    <main>
      <ProjectsList projects={projects} />
    </main>
  );
}

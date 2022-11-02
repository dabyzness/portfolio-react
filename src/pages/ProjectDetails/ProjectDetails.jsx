import { useParams } from "react-router-dom";

import { findProject } from "../../util/findProject.js";
import { projects } from "../../data/projects.js";

const ProjectDetails = () => {
  const { projectDetails } = useParams();

  const project = findProject(projectDetails);

  console.log(project);

  return (
    <main>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <img src={project.img} alt={project.title} />
    </main>
  );
};

export default ProjectDetails;

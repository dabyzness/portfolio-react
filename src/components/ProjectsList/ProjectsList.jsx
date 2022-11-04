import ProjectPreview from "../ProjectPreview/ProjectPreview";

const ProjectsList = ({ projects }) => {
  return (
    <ul>
      {projects.map((project) => (
        <ProjectPreview key={project.title} project={project} />
      ))}
    </ul>
  );
};

export default ProjectsList;

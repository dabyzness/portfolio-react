import ProjectPreview from "../ProjectPreview/ProjectPreview";

const ProjectsList = ({ projects }) => {
  return (
    <ul>
      {projects.map((project) => (
        <ProjectPreview
          key={project.title}
          title={project.title}
          image={project.img}
        />
      ))}
    </ul>
  );
};

export default ProjectsList;

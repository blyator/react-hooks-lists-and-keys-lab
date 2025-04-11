import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  return (
    <div id="project-list">
      {projects.map((project) => (
        <ProjectItem
          key={project.id}
          name={project.name}
          about={project.about}
          technologies={project.technologies}
        />
      ))}
    </div>
  );
}

export default ProjectList;

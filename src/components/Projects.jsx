import Section from './Section.jsx'
import ProjectItem from './ProjectItem.jsx'
import { projects } from '../data.js'

function Projects() {
  return (
    <Section id="projetos" title="Projetos">
      <ul className="project-list">
        {projects.map((project) => (
          <li key={project.title}>
            <ProjectItem project={project} />
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Projects

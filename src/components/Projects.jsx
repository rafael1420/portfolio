import Section from './Section.jsx'
import ProjectItem from './ProjectItem.jsx'
import { projects } from '../data.js'

// Projeto publicado: tem link e não tem status (ex.: 'Em desenvolvimento')
const isLive = (project) => project.link && !project.status

function Projects() {
  const live = projects.filter(isLive)
  const others = projects.filter((project) => !isLive(project))

  return (
    <Section id="projetos" title="Projetos" wide>
      <ul className="project-list">
        {live.map((project) => (
          <li key={project.title}>
            <ProjectItem project={project} />
          </li>
        ))}
      </ul>

      {/* Os que ainda não estão no ar aparecem numa lista mais curta, sem imagem */}
      {others.length > 0 && (
        <>
          <h3 className="subtitle">Em andamento e primeiros passos</h3>
          <ul className="project-list-compact">
            {others.map((project) => (
              <li key={project.title}>
                <ProjectItem project={project} compact />
              </li>
            ))}
          </ul>
        </>
      )}
    </Section>
  )
}

export default Projects

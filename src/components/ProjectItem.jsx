// Uma linha da lista de projetos. Recebe os dados de um item do array "projects".
function ProjectItem({ project }) {
  // Mostra o endereço sem "https://", ex.: tarefas.rafaelgomes.site
  const address = project.link.replace(/^https?:\/\//, '')
  const isLive = project.link && !project.status

  return (
    <article className="project">
      <h3 className="project-title">
        {/* O título só vira link quando o projeto já está publicado */}
        {isLive ? (
          <a href={project.link} target="_blank" rel="noreferrer">
            {project.title}
          </a>
        ) : (
          project.title
        )}
      </h3>
      <span className="project-year">{project.year}</span>

      <p className="project-description">{project.description}</p>

      <div className="project-meta">
        <span className="project-tags">{project.tags.join(', ')}</span>
        {project.status && <span className="project-status">{project.status}</span>}
        {address && !isLive && <span className="project-subdomain">{address}</span>}
        {isLive && (
          <a href={project.link} target="_blank" rel="noreferrer">
            {address}
          </a>
        )}
        {project.repo && (
          <a href={project.repo} target="_blank" rel="noreferrer">
            Ver código
          </a>
        )}
      </div>
    </article>
  )
}

export default ProjectItem

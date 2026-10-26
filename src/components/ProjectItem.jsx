// Um projeto da lista. Recebe os dados de um item do array "projects".
// "compact" mostra só o texto, sem a janela com a captura de tela.
function ProjectItem({ project, compact = false }) {
  // Mostra o endereço sem "https://", ex.: nock.rafaelgomes.site
  const address = project.link.replace(/^https?:\/\//, '')

  if (compact) {
    return (
      <article className="project-compact">
        <h4>{project.title}</h4>
        <span className="project-year">{project.year}</span>
        <p>{project.description}</p>
        <div className="project-meta">
          <span>{project.tags.join(', ')}</span>
          {project.status && <span className="project-status">{project.status}</span>}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noreferrer">
              Ver código
            </a>
          )}
        </div>
      </article>
    )
  }

  return (
    <article className="project">
      {/* A "janela" imita o navegador: a barra mostra o endereço real do projeto */}
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="project-window"
        aria-label={`Abrir ${project.title} em ${address}`}
      >
        <span className="project-window-bar">{address}</span>
        {project.image ? (
          <img src={project.image} alt="" width="800" height="500" loading="lazy" />
        ) : (
          <span className="project-window-empty">{project.title}</span>
        )}
      </a>

      <div className="project-text">
        <h3 className="project-title">
          <a href={project.link} target="_blank" rel="noreferrer">
            {project.title}
          </a>
        </h3>
        <span className="project-year">{project.year}</span>
        <p className="project-description">{project.description}</p>
        <p className="project-tags">{project.tags.join(', ')}</p>
        <div className="project-meta">
          <a href={project.link} target="_blank" rel="noreferrer">
            Abrir o site
          </a>
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noreferrer">
              Ver código
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectItem

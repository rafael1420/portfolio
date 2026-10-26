import { useRef, useState } from 'react'
import Section from './Section.jsx'
import { skillGroups, tools, languages, projects } from '../data.js'

// Só os projetos publicados viram colunas da tabela
const liveProjects = projects.filter((project) => project.link && !project.status)

const tabs = [
  { id: 'tecnologias', label: 'Tecnologias' },
  { id: 'ferramentas', label: 'Ferramentas' },
  { id: 'idiomas', label: 'Idiomas' },
]

// Desenha o nível do idioma como 3 pedras, preenchendo "score" delas
function Stones({ score }) {
  return (
    <span className="stones" aria-hidden="true">
      {[1, 2, 3].map((n) => (
        <span key={n} className={n <= score ? 'stone filled' : 'stone'} />
      ))}
    </span>
  )
}

// Tabela: cada linha é uma tecnologia, cada coluna um projeto no ar.
// A pedra fica preenchida quando o projeto tem a tecnologia nas "tags".
function TechTable() {
  return (
    <table className="tech-table">
      <caption>Cada pedra marca um projeto no ar em que usei a tecnologia.</caption>
      <thead>
        <tr>
          <td />
          {liveProjects.map((project) => (
            <th key={project.title} scope="col">
              <a href={project.link} target="_blank" rel="noreferrer">
                {project.shortTitle || project.title}
              </a>
            </th>
          ))}
        </tr>
      </thead>
      {skillGroups.map((group) => (
        <tbody key={group.category}>
          <tr>
            <th scope="colgroup" colSpan={liveProjects.length + 1} className="tech-group">
              {group.category}
            </th>
          </tr>
          {group.items.map((skill) => {
            const tag = skill.tag || skill.name
            const isUsed = (project) => skill.everywhere || project.tags.includes(tag)

            // Tecnologia que ainda não está em nenhum projeto no ar: uma frase no lugar das pedras
            if (!liveProjects.some(isUsed)) {
              return (
                <tr key={skill.name}>
                  <th scope="row">{skill.name}</th>
                  <td colSpan={liveProjects.length} className="tech-note">
                    Cursos e estudos, ainda sem projeto no ar
                  </td>
                </tr>
              )
            }

            return (
              <tr key={skill.name}>
                <th scope="row">{skill.name}</th>
                {liveProjects.map((project) => {
                  const used = isUsed(project)
                  return (
                    <td key={project.title}>
                      <span className={used ? 'stone filled' : 'stone'} aria-hidden="true" />
                      <span className="visually-hidden">{used ? 'Usado' : 'Não usado'}</span>
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      ))}
    </table>
  )
}

function Skills() {
  const [active, setActive] = useState(tabs[0].id)
  const tabRefs = useRef([])

  // Setas esquerda/direita trocam de aba, como em qualquer lista de abas
  function handleKeyDown(event, index) {
    const step = { ArrowRight: 1, ArrowLeft: -1 }[event.key]
    if (!step) return
    const next = (index + step + tabs.length) % tabs.length
    setActive(tabs[next].id)
    tabRefs.current[next].focus()
  }

  return (
    <Section id="habilidades" title="Habilidades">
      <div className="tabs" role="tablist" aria-label="Habilidades">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            ref={(element) => (tabRefs.current[index] = element)}
            role="tab"
            id={`aba-${tab.id}`}
            aria-selected={active === tab.id}
            aria-controls={`painel-${tab.id}`}
            tabIndex={active === tab.id ? 0 : -1}
            className="tab"
            onClick={() => setActive(tab.id)}
            onKeyDown={(event) => handleKeyDown(event, index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* A "key" faz o painel ser recriado a cada troca, para a animação de entrada rodar */}
      <div
        key={active}
        role="tabpanel"
        id={`painel-${active}`}
        aria-labelledby={`aba-${active}`}
        className="tab-panel"
      >
        {active === 'tecnologias' && <TechTable />}

        {active === 'ferramentas' && (
          <ul className="tool-list">
            {tools.map((tool) => (
              <li key={tool.name}>
                <span className="tool-name">{tool.name}</span>
                <span className="tool-detail">{tool.detail}</span>
              </li>
            ))}
          </ul>
        )}

        {active === 'idiomas' && (
          <ul className="language-list">
            {languages.map((language) => (
              <li key={language.name}>
                <span className="language-name">{language.name}</span>
                <span className="language-level">
                  <Stones score={language.score} />
                  {language.level}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Section>
  )
}

export default Skills

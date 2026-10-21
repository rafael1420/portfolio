import Section from './Section.jsx'
import { skillGroups, languages } from '../data.js'

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

function Skills() {
  return (
    <Section id="habilidades" title="Habilidades e idiomas">
      {/* <dl> é uma lista de termos (categoria) e definições (itens) */}
      <dl className="skills">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <dt>{group.category}</dt>
            {group.items.map((skill) => (
              <dd key={skill.name}>
                {skill.name}
                {skill.status && <span className="skill-note"> ({skill.status})</span>}
              </dd>
            ))}
          </div>
        ))}
      </dl>

      <h3 className="subtitle">Idiomas</h3>
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
    </Section>
  )
}

export default Skills

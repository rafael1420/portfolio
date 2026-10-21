import Section from './Section.jsx'
import { education, courses } from '../data.js'

function Education() {
  return (
    <Section id="formacao" title="Formação e cursos">
      {education.map((item) => (
        <div key={item.institution} className="education-item">
          <span className="education-period">{item.period}</span>
          <div>
            <h3>{item.course}</h3>
            <p>
              {item.institution}, {item.detail}
            </p>
          </div>
        </div>
      ))}

      <h3 className="subtitle">Cursos</h3>
      <ul className="course-list">
        {courses.map((course) => (
          <li key={course.name}>
            <span className="course-year">{course.year}</span>
            <span>{course.name}</span>
            <span className="course-provider">{course.provider}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Education

import Section from './Section.jsx'
import { about } from '../data.js'

function About() {
  return (
    <Section id="sobre" title="Sobre mim">
      <p className="about-lead">{about.lead}</p>
      <div className="about-text">
        {/* Cada texto do array vira um parágrafo */}
        {about.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </Section>
  )
}

export default About

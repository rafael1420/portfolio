import Section from './Section.jsx'
import { contact } from '../data.js'

function Contact() {
  return (
    <Section id="contato" title="Contato">
      <p className="contact-intro">{contact.intro}</p>

      {/* O e-mail é o contato principal, por isso aparece em destaque */}
      <a href={`mailto:${contact.email}`} className="contact-email">
        {contact.email}
      </a>

      <ul className="contact-links">
        {contact.links.map((link) => {
          // Links externos (LinkedIn, GitHub) abrem em nova aba
          const isExternal = link.href.startsWith('http')
          return (
            <li key={link.label}>
              <span>{link.label}</span>
              <a
                href={link.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noreferrer' : undefined}
              >
                {link.value}
              </a>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}

export default Contact

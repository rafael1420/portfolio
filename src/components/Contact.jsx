import Section from './Section.jsx'
import { contact } from '../data.js'

// Decodifica o e-mail ou o número só na hora do clique, então eles nunca aparecem na página
function openEmail() {
  window.location.href = `mailto:${atob(contact.emailCode)}`
}

function openWhatsapp() {
  window.open(`https://wa.me/${atob(contact.whatsappCode)}`, '_blank', 'noreferrer')
}

function Contact() {
  return (
    <Section id="contato" title="Contato">
      <p className="contact-intro">{contact.intro}</p>

      <div className="contact-actions">
        <button type="button" className="button button-primary" onClick={openEmail}>
          Enviar e-mail
        </button>
        <button type="button" className="button button-secondary" onClick={openWhatsapp}>
          Chamar no WhatsApp
        </button>
      </div>

      <ul className="contact-links">
        {contact.links.map((link) => (
          <li key={link.label}>
            <span>{link.label}</span>
            <a href={link.href} target="_blank" rel="noreferrer">
              {link.value}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Contact

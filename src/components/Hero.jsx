import { useState } from 'react'
import Greeting from './Greeting.jsx'
import { profile } from '../data.js'

function Hero() {
  // Se a imagem falhar ao carregar (arquivo não existe), mostramos as iniciais
  const [photoFailed, setPhotoFailed] = useState(false)

  return (
    <section id="inicio" className="hero">
      <div className="hero-text">
        <Greeting words={profile.greetings} />
        <h1 className="hero-name">{profile.name}</h1>
        <p className="hero-title">{profile.title}</p>
        <p className="hero-tagline">{profile.tagline}</p>

        <div className="hero-actions">
          <a href="#projetos" className="button button-primary">
            Ver projetos
          </a>
          {/* O atributo "download" faz o navegador baixar em vez de abrir */}
          <a
            href={profile.resume}
            download="Rafael Gomes - Currículo.pdf"
            className="button button-secondary"
          >
            Baixar currículo
          </a>
        </div>
      </div>

      <div className="hero-media">
        {photoFailed ? (
          <div className="hero-initials" aria-label={profile.name}>
            {profile.initials}
          </div>
        ) : (
          <img
            src={profile.photo}
            alt={`Foto de ${profile.name}`}
            className="hero-photo"
            onError={() => setPhotoFailed(true)}
          />
        )}
      </div>
    </section>
  )
}

export default Hero

import { useState } from 'react'
import { navLinks, profile } from '../data.js'

function Header() {
  // Controla se o menu está aberto no celular
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#inicio" className="header-name">
          {profile.shortName}
        </a>

        <button
          className="menu-button"
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen(!open)}
        >
          {open ? 'Fechar' : 'Menu'}
        </button>

        <nav id="menu" className={open ? 'nav open' : 'nav'}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                {/* Ao clicar num link, fecha o menu do celular */}
                <a href={`#${link.id}`} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

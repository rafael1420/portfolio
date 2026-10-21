import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Wave from './components/Wave.jsx'
import About from './components/About.jsx'
import Education from './components/Education.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import { profile } from './data.js'

// Monta a página: menu no topo e as seções na ordem
function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Wave />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>{profile.location}</span>
        </div>
      </footer>
    </>
  )
}

export default App

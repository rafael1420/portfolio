import { useEffect, useState } from 'react'

// Alterna as saudações (Olá, Hello, Hola, Ciao) a cada poucos segundos.
// Quem ativou "reduzir movimento" no sistema vê só a primeira, parada.
function Greeting({ words }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % words.length)
    }, 2600)

    // Limpa o timer quando o componente sai da tela
    return () => clearInterval(timer)
  }, [words.length])

  return (
    <p className="hero-greeting">
      {/* A "key" muda a cada palavra, então o React recria o <span> e a animação do CSS roda de novo */}
      <span key={index} lang={['pt-BR', 'en', 'es', 'it'][index]}>
        {words[index]},
      </span>
    </p>
  )
}

export default Greeting

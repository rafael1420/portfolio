// Faixa decorativa com as ondas da calçada de Copacabana, desenhada em SVG.
// O <pattern> define um "azulejo" de 160x96 que se repete na largura toda.
// Cada <path> é uma faixa ondulada de pedra clara; o fundo escuro aparece entre elas.
function Wave() {
  const stripe = 'M0,20 Q40,0 80,20 T160,20 L160,44 Q120,64 80,44 Q40,24 0,44 Z'

  return (
    <svg className="wave" aria-hidden="true" preserveAspectRatio="none">
      <defs>
        <pattern id="calcada" width="160" height="96" patternUnits="userSpaceOnUse">
          <path className="wave-stone" d={stripe} />
          <path className="wave-stone" d={stripe} transform="translate(0 48)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#calcada)" />
    </svg>
  )
}

export default Wave

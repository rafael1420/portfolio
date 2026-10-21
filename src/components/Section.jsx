// Moldura padrão de cada seção: título na coluna da esquerda, conteúdo na da direita.
// "children" é tudo o que for colocado entre <Section> e </Section>.
function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <div className="container section-grid">
        <h2 className="section-title">{title}</h2>
        <div>{children}</div>
      </div>
    </section>
  )
}

export default Section

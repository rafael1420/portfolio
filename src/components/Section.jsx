// Moldura padrão de cada seção: título na coluna da esquerda, conteúdo na da direita.
// Com "wide", o título fica em cima e o conteúdo usa a largura toda (usado em Projetos).
// "children" é tudo o que for colocado entre <Section> e </Section>.
function Section({ id, title, wide = false, children }) {
  return (
    <section id={id} className="section">
      <div className={wide ? 'container section-grid wide' : 'container section-grid'}>
        <h2 className="section-title">{title}</h2>
        <div>{children}</div>
      </div>
    </section>
  )
}

export default Section

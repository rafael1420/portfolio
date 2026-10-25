// Todo o conteúdo do site fica aqui.
// Para mudar textos, links ou adicionar itens, edite só este arquivo.
// Os trechos marcados com ✏️ são textos para você deixar com a sua cara.

export const profile = {
  name: 'Rafael Gomes da Silva',
  shortName: 'Rafael Gomes',
  initials: 'RG',
  // A saudação alterna entre os idiomas que você fala
  greetings: ['Olá', 'Hello', 'Hola', 'Ciao'],
  title: 'Desenvolvedor Júnior em formação',
  // ✏️ Uma frase curta sobre você, que aparece abaixo do nome
  tagline: 'Estudo Análise e Desenvolvimento de Sistemas no Rio de Janeiro e construo meus projetos para a web, agora com React.',
  location: 'Vila Isabel, Rio de Janeiro',
  photo: '/foto.jpg',
  resume: '/curriculo.pdf',
}

// Links do menu. O "id" precisa ser igual ao id da seção correspondente.
export const navLinks = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'formacao', label: 'Formação' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'contato', label: 'Contato' },
]

// ✏️ O primeiro texto aparece em destaque; os demais, como parágrafos normais
export const about = {
  lead: 'Estou no 5º período de Análise e Desenvolvimento de Sistemas e procuro minha primeira vaga como desenvolvedor júnior ou estagiário.',
  paragraphs: [
    'Comecei pela base: HTML, CSS, JavaScript, Python e PHP, com Git e GitHub para versionar tudo. Agora estou estudando React, e este site é um dos resultados.',
    'Falo inglês em nível avançado, além de espanhol e italiano. Isso me ajuda a ler documentação, acompanhar a comunidade e trabalhar com pessoas de outros lugares.',
  ],
}

export const education = [
  {
    period: '2024 – atual',
    institution: 'Gran Faculdade',
    course: 'Análise e Desenvolvimento de Sistemas',
    detail: '5º período, em andamento',
  },
]

export const courses = [
  { year: '2024', name: 'Python', provider: 'Curso em Vídeo' },
  { year: '2024', name: 'HTML e CSS básico', provider: 'Udemy e Curso em Vídeo' },
  { year: '2024', name: 'JavaScript básico', provider: 'Curso em Vídeo' },
  { year: '2024', name: 'Introdução ao Git e GitHub', provider: 'Curso em Vídeo' },
]

// Para adicionar um projeto, copie um objeto e altere os campos.
// - link: endereço do projeto publicado (ex.: 'https://tarefas.rafaelgomes.site')
// - repo: link do código no GitHub
// - status: deixe '' quando o projeto estiver publicado, ou 'Em desenvolvimento'
// Deixe '' (vazio) nos campos que ainda não tiver.
export const projects = [
  {
    title: 'Nock',
    year: '2026',
    description: 'Espaço de notas, ideias e projetos no estilo do Notion, com conta própria protegida por login e senha.',
    tags: ['React', 'Node.js', 'JavaScript'],
    link: 'https://nock.rafaelgomes.site',
    repo: '',
    status: '',
  },
  {
    title: 'Bolão',
    year: '2026',
    description: 'Bolão entre amigos: cada grupo dá palpites nas rodadas dos campeonatos, ganha pontos pelos acertos e disputa o ranking.',
    tags: ['PHP', 'MySQL', 'CSS'],
    link: 'https://bolao.rafaelgomes.site',
    repo: '',
    status: '',
  },
  {
    title: 'Meridiano',
    year: '2026',
    description: 'Relógio com os fusos horários de várias cidades e o clima de cada uma, que também lê a hora e o clima em voz alta.',
    tags: ['JavaScript', 'API', 'CSS'],
    link: 'https://fuso.rafaelgomes.site',
    repo: '',
    status: '',
  },
  {
    title: 'Gerador de QR Code',
    year: '2026',
    description: 'Transforma textos e links em QR Codes com tamanho, cores e correção de erro ajustáveis, para baixar em PNG ou SVG.',
    tags: ['JavaScript', 'API', 'CSS'],
    link: 'https://qrcode.rafaelgomes.site',
    repo: '',
    status: '',
  },
  {
    title: 'Conversor de moedas',
    year: '2026',
    description: 'Converte valores entre moedas usando cotações reais, consultadas em uma API pública.',
    tags: ['JavaScript', 'API', 'CSS'],
    link: '',
    repo: 'https://github.com/rafael1420/cambio',
    status: 'Em desenvolvimento',
  },
  {
    title: 'Lista de tarefas',
    year: '2026',
    description: 'Organizador de tarefas em React, com filtros e dados salvos no navegador.',
    tags: ['React', 'JavaScript', 'CSS'],
    link: '',
    repo: '',
    status: 'Em desenvolvimento',
  },
  {
    title: 'Quiz de idiomas',
    year: '2026',
    description: 'Quiz de vocabulário em inglês, espanhol e italiano, as três línguas que eu falo.',
    tags: ['React', 'JavaScript'],
    link: '',
    repo: '',
    status: 'Em desenvolvimento',
  },
  {
    title: 'Página web básica',
    year: '2024',
    description: 'Meu primeiro projeto: uma página feita com HTML e CSS para aprender estrutura e estilização.',
    tags: ['HTML', 'CSS'],
    link: '',
    repo: '',
    status: '',
  },
]

// Habilidades agrupadas por categoria.
// "status" é opcional: aparece ao lado do nome (ex.: 'em estudo').
export const skillGroups = [
  {
    category: 'Linguagens',
    items: [{ name: 'JavaScript' }, { name: 'Python' }, { name: 'PHP' }],
  },
  {
    category: 'Web',
    items: [{ name: 'HTML' }, { name: 'CSS' }, { name: 'React', status: 'em estudo' }],
  },
  {
    category: 'Versionamento',
    items: [{ name: 'Git' }, { name: 'GitHub' }],
  },
  {
    category: 'Ferramentas',
    items: [{ name: 'VS Code' }, { name: 'Git Bash' }, { name: 'Terminal Linux e Windows' }],
  },
]

// "score" vai de 1 a 3 e define quantas pedras ficam preenchidas
export const languages = [
  { name: 'Inglês', level: 'Avançado', score: 3 },
  { name: 'Espanhol', level: 'Intermediário', score: 2 },
  { name: 'Italiano', level: 'Intermediário', score: 2 },
]

export const contact = {
  // ✏️ Frase que convida para o contato
  intro: 'Procuro uma vaga de desenvolvedor júnior ou estágio. Se tiver uma oportunidade ou quiser conversar sobre um projeto, me escreva.',
  email: 'rafael.gomez2007@gmail.com',
  links: [
    { label: 'LinkedIn', value: 'linkedin.com/in/rafaelgomes3', href: 'https://www.linkedin.com/in/rafaelgomes3' },
    { label: 'GitHub', value: 'github.com/rafael1420', href: 'https://github.com/rafael1420' },
    { label: 'Telefone', value: '+55 21 98484-2682', href: 'tel:+5521984842682' },
  ],
}

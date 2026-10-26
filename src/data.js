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
  tagline: 'Estudo Análise e Desenvolvimento de Sistemas no Rio de Janeiro e construo aplicações web completas, do front-end em React ao back-end com Node.js, PHP e banco de dados.',
  location: 'Vila Isabel, Rio de Janeiro',
  photo: '/foto.jpg',
  resume: '/curriculo.pdf',
}

// Links do menu. O "id" precisa ser igual ao id da seção correspondente.
export const navLinks = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'contato', label: 'Contato' },
]

// ✏️ O primeiro texto aparece em destaque; os demais, como parágrafos normais
export const about = {
  lead: 'Estou no 5º período de Análise e Desenvolvimento de Sistemas e procuro minha primeira vaga como desenvolvedor júnior ou estagiário.',
  paragraphs: [
    'Comecei pela base: HTML, CSS, JavaScript, Python e PHP, com Git e GitHub para versionar tudo. Depois passei a construir projetos completos e colocá-los no ar: um app de notas no estilo do Notion em React e Node.js, um bolão entre amigos em PHP com MySQL e ferramentas que consomem APIs públicas.',
    'Gosto de levar cada projeto do começo ao fim: pensar a interface, montar o back-end, cuidar do login e dos dados e publicar no meu próprio domínio.',
    'Falo inglês em nível avançado, além de espanhol e italiano. Isso me ajuda a ler documentação, acompanhar a comunidade e trabalhar com pessoas de outros lugares.',
  ],
}

// Para adicionar um projeto, copie um objeto e altere os campos.
// - link: endereço do projeto publicado (ex.: 'https://tarefas.rafaelgomes.site')
// - repo: link do código no GitHub
// - image: captura de tela do projeto, salva em public/projetos/ (800x500)
// - shortTitle: nome curto opcional, usado na tabela de Habilidades
// - status: deixe '' quando o projeto estiver publicado, ou 'Em desenvolvimento'
// Deixe '' (vazio) nos campos que ainda não tiver.
export const projects = [
  {
    title: 'Nock',
    year: '2026',
    description: 'Espaço de notas, ideias e projetos no estilo do Notion, com conta própria protegida por login e senha.',
    tags: ['React', 'Node.js', 'JavaScript'],
    link: 'https://nock.rafaelgomes.site',
    image: '/projetos/nock.jpg',
    repo: '',
    status: '',
  },
  {
    title: 'Bolão',
    year: '2026',
    description: 'Bolão entre amigos: cada grupo dá palpites nas rodadas dos campeonatos, ganha pontos pelos acertos e disputa o ranking.',
    tags: ['PHP', 'MySQL', 'CSS'],
    link: 'https://bolao.rafaelgomes.site',
    image: '/projetos/bolao.jpg',
    repo: '',
    status: '',
  },
  {
    title: 'Meridiano',
    year: '2026',
    description: 'Relógio com os fusos horários de várias cidades e o clima de cada uma, que também lê a hora e o clima em voz alta.',
    tags: ['JavaScript', 'API', 'CSS'],
    link: 'https://fuso.rafaelgomes.site',
    image: '/projetos/fuso.jpg',
    repo: '',
    status: '',
  },
  {
    title: 'Gerador de QR Code',
    shortTitle: 'QR Code',
    year: '2026',
    description: 'Transforma textos e links em QR Codes com tamanho, cores e correção de erro ajustáveis, para baixar em PNG ou SVG.',
    tags: ['JavaScript', 'API', 'CSS'],
    link: 'https://qrcode.rafaelgomes.site',
    image: '/projetos/qrcode.jpg',
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

// Habilidades da aba "Tecnologias", agrupadas por categoria.
// O site marca uma pedra em cada projeto publicado que tem essa tecnologia nas "tags".
// "tag" só é preciso quando o nome aqui é diferente do usado nas tags (ex.: 'APIs REST' → 'API').
// "everywhere: true" marca todos os projetos (HTML e CSS estão em qualquer site).
export const skillGroups = [
  {
    category: 'Front-end',
    items: [
      { name: 'HTML', everywhere: true },
      { name: 'CSS', everywhere: true },
      { name: 'JavaScript' },
      { name: 'React' },
    ],
  },
  {
    category: 'Back-end e dados',
    items: [
      { name: 'Node.js' },
      { name: 'PHP' },
      { name: 'MySQL / SQL', tag: 'MySQL' },
      { name: 'APIs REST', tag: 'API' },
    ],
  },
  {
    category: 'Também estudei',
    items: [{ name: 'Python' }],
  },
]

// Aba "Ferramentas": o que uso no dia a dia para escrever, versionar e publicar código
export const tools = [
  { name: 'Git', detail: 'Versionamento de todos os projetos' },
  { name: 'GitHub', detail: 'Repositórios e publicação automática' },
  { name: 'VS Code', detail: 'Editor principal' },
  { name: 'Terminal', detail: 'Linux, Windows e Git Bash' },
]

// "score" vai de 1 a 3 e define quantas pedras ficam preenchidas
export const languages = [
  { name: 'Inglês', level: 'Avançado', score: 3 },
  { name: 'Espanhol', level: 'Intermediário', score: 2 },
  { name: 'Italiano', level: 'Intermediário', score: 2 },
]

export const contact = {
  // ✏️ Frase que convida para o contato
  intro: 'Procuro uma vaga de desenvolvedor júnior ou estágio, no front-end, no back-end ou nos dois. Se tiver uma oportunidade ou quiser conversar sobre um projeto, me escreva.',
  // E-mail e WhatsApp ficam codificados (base64) para robôs não acharem no código.
  // O endereço só é montado quando a pessoa clica no botão.
  // Para trocar: no console do navegador, rode btoa('novo@email.com') e cole o resultado.
  emailCode: 'cmFmYWVsLmdvbWV6MjAwN0BnbWFpbC5jb20=',
  whatsappCode: 'NTUyMTk4NDg0MjY4Mg==',
  links: [
    { label: 'LinkedIn', value: 'linkedin.com/in/rafaelgomes3', href: 'https://www.linkedin.com/in/rafaelgomes3' },
    { label: 'GitHub', value: 'github.com/rafael1420', href: 'https://github.com/rafael1420' },
  ],
}

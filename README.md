# Portfólio - Rafael Gomes da Silva

Meu site pessoal: formação, projetos, habilidades e contato.

**Acesse:** [rafaelgomes.site](https://rafaelgomes.site)

<img src="docs/screenshot.png" alt="Início do portfólio: nome Rafael Gomes da Silva em letras grandes ao lado de uma foto em preto e branco" width="700" />

## Sobre o visual

A identidade parte da pedra portuguesa do calçadão carioca: basalto escuro e calcário claro, combinando com a foto em preto e branco. A faixa com as ondas de Copacabana é desenhada em SVG, e a saudação alterna entre os idiomas que eu falo (Olá, Hello, Hola, Ciao).

## Tecnologias

- **React** com **Vite**
- **CSS** puro, com as cores e fontes em variáveis
- Fontes Bricolage Grotesque e Atkinson Hyperlegible (Google Fonts)

## Como rodar

Requisito: [Node.js](https://nodejs.org) 20.19 ou mais recente.

```bash
npm install      # instala as dependências (só na primeira vez)
npm run dev      # abre em modo desenvolvimento (http://localhost:5173)
npm run build    # gera a versão final na pasta dist/
npm run preview  # testa localmente a versão gerada pelo build
```

## Onde editar

| O quê | Onde |
| --- | --- |
| Textos, projetos, habilidades, links | `src/data.js` |
| Foto do início | `public/foto.jpg` (se não existir, aparecem as iniciais "RG") |
| Currículo para download | `public/curriculo.pdf` |
| Capturas dos projetos | `public/projetos/` (800x500), ligadas pelo campo `image` em `src/data.js` |
| Cores e fontes | `src/styles.css` (variáveis no topo) |
| Título e descrição da página | `index.html` |

Para adicionar um projeto, copie um objeto do array `projects` em `src/data.js` e altere os campos.

## Deploy

A cada push na branch `main`, o [GitHub Actions](.github/workflows/deploy.yml) gera a versão final com `npm run build` e envia a pasta `dist/` por FTP para a Hostinger. As credenciais ficam guardadas como *secrets* do repositório, nunca no código.

## Outros projetos

- [Câmbio](https://github.com/rafael1420/cambio): conversor de moedas em JavaScript puro

## Contato

[LinkedIn](https://www.linkedin.com/in/rafaelgomes3) · [GitHub](https://github.com/rafael1420)

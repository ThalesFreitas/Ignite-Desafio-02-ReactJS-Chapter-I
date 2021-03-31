# Desafio Componentizando a aplicação
Desafio do Ignite Trilha ReactJS da Rocketseat.

 # 📺 WatchMe
 
![NPM](https://github.com/ThalesFreitas/Ignite-Desafio-02-ReactJS-Chapter-I/blob/main/LICENSE) 

# 🚀 Sobre o desafio
O objetivo do desafio é refatorar uma página para listagem de filmes de acordo com gênero. 
A aplicação já está totalmente funcional mas grande parte do seu código está diretamente no arquivo App.tsx. Para resolver isso da melhor forma,
é necessário dividir a aplicação em pelo menos duas partes principais: sidebar e o conteúdo principal que possui o header e a listagem de filmes.

Para mais detalhes do desafio acesse: https://www.notion.so/Desafio-02-Componentizando-a-aplica-o-b9f0f025c95b437699d0c3115f55b0f1#2d280cefd8b54556a3585b2dcd0d8191

# 👽 Resolvendo o desafio
Para resolver esse desafio, eu utilizei o gerenciamento de estado Redux, a fim de poder compartilhar às informações do componente
Sidebar(Onde fica os gêneros) com o componente Content(Listagem de filmes).

## Layout
![Ação](https://github.com/ThalesFreitas/Ignite-Desafio-02-ReactJS-Chapter-I/blob/main/assets/g%C3%AAneros.gif)


# Tecnologias utilizadas
- HTML / CSS / SASS / JS / TypeScript
- ReactJS
- Redux
- Api fake com Json Server
- Webpack
- Babel

# Como executar o projeto

```bash
# clonar repositório
git clone https://github.com/ThalesFreitas/Ignite-Desafio-02-ReactJS-Chapter-I

# instalar dependências
yarn

# executar api fake
yarn server

# executar aplicação
yarn dev

```

# Autor

Thales Rodrigues de Freitas

https://www.linkedin.com/in/thalesrfreitas

# Agradecimento
Grato a toda equipe rocketseat por me proporcionar todo esse conhecimento adquirido no Ignite(Trilha ReactJs)!

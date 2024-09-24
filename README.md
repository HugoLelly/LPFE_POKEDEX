# Visualizador de Detalhes do Pokémon

## Descrição
Este projeto é uma aplicação web que permite aos usuários pesquisar e visualizar informações detalhadas sobre Pokémons, utilizando a PokeAPI. Os dados exibidos incluem:
- Nome
- Tipo(s)
- Altura
- Peso
- ID do Pokémon

A interface é simples, responsiva e permite navegar entre Pokémons anteriores e próximos. Além disso, as cores de fundo mudam dinamicamente de acordo com o tipo do Pokémon, criando uma experiência visual mais imersiva.

## Funcionalidades
- Busca por nome ou ID do Pokémon
- Exibição de detalhes como nome, tipo, altura, peso e imagem
- Navegação entre Pokémons anteriores e próximos
- Interface responsiva e amigável
- Mapeamento de cores de fundo com base no tipo do Pokémon
- Suporte à tradução dos tipos de Pokémon para português

## Tecnologias Utilizadas
- HTML5
- CSS3
- JavaScript (ES6+)
- PokeAPI (https://pokeapi.co/)

## Estrutura do Projeto
O projeto é composto pelos seguintes arquivos e pastas:
- `index.html`: O arquivo principal da aplicação, contendo a estrutura da página e integração com os scripts e estilos.
- `style.css`: Responsável por toda a estilização da Pokédex, garantindo que a interface seja responsiva e visualmente agradável em diferentes dispositivos.
- `script.js`: Contém a lógica em JavaScript para buscar informações dos Pokémon utilizando a [PokeAPI](https://pokeapi.co/) e atualizar o conteúdo da página.

## Exemplo de Uso
1. O usuário acessa a Pokédex através da página `index.html`.
2. Na barra de busca, o usuário pode procurar por um Pokémon digitando seu nome ou ID.
3. Ao clicar no botão de busca, as informações do Pokémon, como ID, tipo, altura e peso, são exibidas na tela.
4. O fundo do container muda de cor conforme o tipo do Pokémon selecionado, utilizando um degradê se o Pokémon tiver mais de um tipo.
5. O usuário também pode navegar entre Pokémon anteriores e próximos utilizando os botões de navegação.
6. A interface se ajusta automaticamente a diferentes tamanhos de tela, proporcionando uma experiência otimizada para dispositivos móveis, tablets e desktops.

## Créditos
Este projeto foi desenvolvido por:
- Hugo Lelly de Lima Marinho
- Universidade de Vassouras – Campus Maricá
- Laboratório de Programação Front End
- Fabrício Dias

## Como Usar
1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/pokemon-visualizer.git

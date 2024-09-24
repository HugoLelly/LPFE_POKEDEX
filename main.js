// Mapeamento de traduções de tipos de Pokémon
const typeTranslations = {
  normal: 'Normal',
  fire: 'Fogo',
  water: 'Água',
  electric: 'Elétrico',
  grass: 'Grama',
  ice: 'Gelo',
  fighting: 'Lutador',
  poison: 'Venenoso',
  ground: 'Terrestre',
  flying: 'Voador',
  psychic: 'Psíquico',
  bug: 'Inseto',
  rock: 'Pedra',
  ghost: 'Fantasma',
  dragon: 'Dragão',
  dark: 'Sombrio',
  steel: 'Aço',
  fairy: 'Fada'
};



// Mapeamento de cores dos tipos de Pokémon
const typeColors = {
  normal: '#A8A8A8',      // Cinza
  fire: '#FF0000',        // Vermelho
  water: '#0000FF',       // Azul
  electric: '#FFFF00',    // Amarelo
  grass: '#00FF00',       // Verde
  ice: '#ADD8E6',         // Azul Claro
  fighting: '#FF7F00',    // Laranja
  poison: '#800080',      // Roxo
  ground: '#A52A2A',      // Marrom
  flying: '#ADD8E6',      // Azul Claro
  psychic: '#FF1493',     // Rosa
  bug: '#556B2F',         // Verde Musgo
  rock: '#808080',        // Cinza escuro
  ghost: '#4B0082',       // Roxo Escuro
  dragon: '#8B0000',      // Bordo
  dark: '#000000',        // Preto
  steel: '#708090',       // Chumbo
  fairy: '#FFB6C1'        // Rosa Claro
};

// Função para buscar Pokémon por ID ou nome
function fetchPokemon(query) {
  const url = `https://pokeapi.co/api/v2/pokemon/${query}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Pokémon não encontrado');
      }
      return response.json();
    })
    .then(data => {
      const pokemonTypes = data.types.map(typeInfo => typeTranslations[typeInfo.type.name] || typeInfo.type.name);

      const heightInCm = data.height * 10;
      const weightInKg = data.weight / 10;

      document.getElementById('pokemon-name').textContent = data.name.charAt(0).toUpperCase() + data.name.slice(1);
      document.getElementById('pokemon-image').src = data.sprites.front_default;
      document.getElementById('pokemon-id').textContent = data.id;
      document.getElementById('pokemon-type').textContent = pokemonTypes.join(', ');
      document.getElementById('pokemon-height').textContent = `${heightInCm} cm`;
      document.getElementById('pokemon-weight').textContent = `${weightInKg} kg`;

      // Alterar a cor do container com base nos tipos de Pokémon
      const pokemonContainer = document.querySelector('.container');
      if (pokemonContainer) {
        const types = data.types.map(typeInfo => typeInfo.type.name);
        if (types.length === 1) {
          // Cor sólida para Pokémon com um único tipo
          pokemonContainer.style.background = typeColors[types[0]] || '#FFFFFF';
        } else if (types.length > 1) {
          // Degradê para Pokémon com múltiplos tipos
          const color1 = typeColors[types[0]] || '#FFFFFF';
          const color2 = typeColors[types[1]] || '#FFFFFF';
          pokemonContainer.style.background = `linear-gradient(45deg, ${color1}, ${color2})`;
        }
      }

      document.getElementById('pokemon-details').classList.remove('hidden');
      document.getElementById('error-message').classList.add('hidden');

      currentPokemonId = data.id; // Atualiza o ID atual do Pokémon

      // Exibe os botões de navegação
      document.getElementById('previous-button').style.display = 'block';
      document.getElementById('next-button').style.display = 'block';
    })
    .catch(error => {
      document.getElementById('error-message').textContent = error.message;
      document.getElementById('error-message').classList.remove('hidden');
      document.getElementById('pokemon-details').classList.add('hidden');

      // Oculta os botões de navegação em caso de erro
      const previousButton = document.getElementById('previous-button');
      const nextButton = document.getElementById('next-button');
      if (previousButton) previousButton.style.display = 'none';
      if (nextButton) nextButton.style.display = 'none';
    });
}

// Variável para rastrear o ID atual do Pokémon
let currentPokemonId = 1;

// Event Listener para o botão de pesquisa
document.getElementById('search-button').addEventListener('click', function () {
  const input = document.getElementById('pokemon-input').value.trim().toLowerCase();
  fetchPokemon(input);
});

// Event Listener para a tecla "Enter" no campo de input
document.getElementById('pokemon-input').addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    document.getElementById('search-button').click();
  }
});

// Event Listener para o botão de informações adicionais
const infoButton = document.getElementById("info-button");
const additionalInfo = document.getElementById("additional-info");

if (infoButton && additionalInfo) {
  infoButton.addEventListener("click", () => {
    additionalInfo.style.display = additionalInfo.style.display === "none" ? "block" : "none";
  });
}

// Event Listeners para navegação entre Pokémon anteriores e próximos
const previousButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');

if (previousButton && nextButton) {
  previousButton.addEventListener('click', function () {
    if (currentPokemonId > 1) {
      currentPokemonId--;
      fetchPokemon(currentPokemonId);
    }
  });

  nextButton.addEventListener('click', function () {
    currentPokemonId++;
    fetchPokemon(currentPokemonId);
  });

  // Inicialmente, oculta os botões "Anterior" e "Próximo"
  previousButton.style.display = 'none';
  nextButton.style.display = 'none';
}

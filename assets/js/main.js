const offset = 0;
const limit = 10;

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertPokemonToLi(pokemon) {
  return `
    <li class="pokemon">
          <span class="number">#001</span>
          <span class="name">${pokemon.name} </span>

          <div class="detail">
            <ol class="types">
              <li class="type">grass</li>
              <li class="type">poison</li>
              <li></li>
            </ol>
            <img
            src="https://raw.githubusercontent.com/jnovack/pokemon-svg/3c3ea26da58331d7202e7cdb1aab9b8347d8587f/svg/1.svg"
            alt="${pokemon.name}"
          />
          </div>         
        </li>`;
}

const pokemonList = document.getElementById("pokemonList");

pokeApi.getPokemons().then((pokemons) => {
  const listItems = [];

  pokemon.map();

  for (let i = 0; i < pokemons.length; i++) {
    const pokemon = pokemons[i];
    listItems.push(convertPokemonToLi(pokemon));
  }
  console.log(listItems);
});

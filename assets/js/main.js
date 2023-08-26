const offset = 0;
const limit = 10;

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertPokemonTypesToList(pokemonTypes) {
  return pokemonTypes.map(
    (typesSlot) => `<li class="type">${typesSlot.type.name}</li>`
  );
}

function convertPokemonToLi(pokemon) {
  return `
    <li class="pokemon">
          <span class="number">${pokemon.order}</span>
          <span class="name">${pokemon.name} </span>

          <div class="detail">
            <ol class="types">
              ${convertPokemonTypesToList(pokemon.types).join("")}
            </ol>
            <img
            src="${pokemon.sprites.other.dream_world.front_default}"
            alt="${pokemon.name}"
          />
          </div>         
        </li>`;
}

const pokemonList = document.getElementById("pokemonList");

pokeApi.getPokemons().then((pokemons = []) => {
  pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join("");
});

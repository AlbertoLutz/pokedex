const pokeApi = {};

function convertPokeApíDetailToPokemon(pokeDetail) {
  const pokemon = new Pokemon();
  pokemon.number = pokeDetail.order;
  pokemon.name = pokeDetail.name;

  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
  const [type] = types;

  pokemon.types = types;
  pokemon.type = type;

  pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;

  return pokemon;
}

pokeApi.getPokemonsDetail = (pokemon) => {
  return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApíDetailToPokemon);
};

pokeApi.getPokemons = (offset = 0, limit = 50) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

  return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonsDetail))
    .then((detailsRequest) => Promise.all(detailsRequest))
    .then((pokemonsDetails) => pokemonsDetails);
};

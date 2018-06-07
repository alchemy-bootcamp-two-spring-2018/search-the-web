export function getPokemon(name) {
  const url = 'https://pokeapi.co/api/v2/pokemon/' + encodeURIComponent(name);
  return fetch(url)
    .then(response => response.json());
}
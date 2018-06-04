
export function getStarShip(name) {
  const url = 'https://swapi.co/api/starships/?search=' + encodeURIComponent(name);
  return fetch(url)
    .then(response => response.json());
}

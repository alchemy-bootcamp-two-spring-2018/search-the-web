
export function getStarShip(shipName) {
  const url = 'https://swapi.co/api/starships/?search=' + encodeURIComponent(shipName);
  return fetch(url)
    .then(response => response.json());
}

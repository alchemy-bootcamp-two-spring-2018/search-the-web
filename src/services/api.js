export function getHeroes() {
  return fetch('https://api.opendota.com/api/heroes')
    .then(response => response.json());
}
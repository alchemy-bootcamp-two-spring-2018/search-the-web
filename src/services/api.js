export function getHeroes(name) {
  const url = 'https://api.opendota.com/api/heroes?search=' + encodeURIComponent(name);
  return fetch(url)
    .then(response => response.json());
}
export function getDrinkType(type) {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=' + encodeURIComponent(type); 
  return fetch(url)
    .then(response => response.json());
}
export function getDrinks(type) {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?s=' + encodeURIComponent(type); 
  return fetch(url)
    .then(response => response.json())
    .catch(e => {
      console.log(e);
  });
}
export function getArticles(keyword) {
  const apiKey = process.env.VUE_APP_API_KEY;
  console.log('api key', apiKey);
  const url = 'https://newsapi.org/v2/everything?q=' +
  encodeURIComponent(keyword) +
  '&apiKey=' + apiKey;

  return fetch(url)
    .then(response => response.json());
}

export function getNews(name, country) {
  //eslint-disable-next-line
  const apiKey = process.env.VUE_APP_API_KEY;
  const url = 'https://newsapi.org/v2/top-headlines?' +
    'country=' + encodeURIComponent(country) +
    '&q=' + encodeURIComponent(name) +
    '&sortBy=publishedAt&' +
    'apiKey=' + apiKey;

    
    
  return fetch(url)
    .then(response => response.json());
}
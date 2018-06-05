export function getNews(topic) {
  const url = 'https://newsapi.org/v2/everything?q=' +
  encodeURIComponent(topic) + '&apiKey=3e0ba7546dd843edb2af015fcbad1fe4';
  console.log('url', url);
  return fetch(url)
    .then(response => response.json());
}

// my api key: 3e0ba7546dd843edb2af015fcbad1fe4

export function getNews(topic) {
  console.log('hello');
  const url = 'https://newsapi.org/v2/top-headlines?q=' +
  encodeURIComponent(topic) + '&apiKey=3e0ba7546dd843edb2af015fcbad1fe4';
  console.log('url', url);
  return fetch(url)
    .then(response => response.json());
}

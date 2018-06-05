// my api key 3e0ba7546dd843edb2af015fcbad1fe4

// eslint-disable-next-line
const apiKey = process.env.VUE_APP_API_KEY;
export function getNews(topic) {
  const url = 'https://newsapi.org/v2/top-headlines?q=' +
   (topic) + apiKey;
  return fetch(url)
    .then(response => response.json());
}

//per demo:
// url:
// 1) protocol (https://)
// 2) host server  (swapi.co)
// 3) path (/api/people)
// 4) search or query
//    - separated from path via "?"
//    - name=value pairs separted by "&"
//    - use "encodeURIComponent" to escape search values
//    ?APIKEY=abc123&search=name
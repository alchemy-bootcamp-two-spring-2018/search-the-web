// url:
// 1) protocol (https://)
// 2) host server  (swapi.co)
// 3) path (/api/people)
// 4) search or query
//    - separated from path via "?"
//    - name=value pairs separted by "&"
//    - use "encodeURIComponent" to escape search values
//    ?APIKEY=abc123&search=name

const apiKey = process.env.VUE_APP_API_KEY;

export function getResults(country) {
  const url = 'https://newsapi.org/v2/top-headlines?'
  + 'country=' + encodeURIComponent(country)
  + '&apiKey=' + apiKey;
  return fetch(url)
    .then(response => response.json());
}
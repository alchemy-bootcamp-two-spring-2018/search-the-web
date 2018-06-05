

// url:
// 1) protocol (https://)
// 2) host server  (swapi.co)
// 3) path (/api/people)
// 4) search or query
//    - separated from path via "?"
//    - name=value pairs separted by "&"
//    - use "encodeURIComponent" to escape search values
//    ?APIKEY=abc123&search=name

export function getNews(name) {
// eslint-disable-next-line
    const apiKey = process.env.VUE_APP_API_KEY;
  const url = 'https://newsapi.org/v2/everything?q=' + name +
    '&apiKey=' + apiKey;

  //   var req = new Request(url);
  //   fetch(req)
  //     .then(function(response) {
  //       console.log(response.json());
  //     });    
    
  return fetch(url)
    .then(response => response.json());
}

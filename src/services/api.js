export function getArticles(title) {

  const url = 'https://newsapi.org/v2/everything?q=' + title
  + '&'
  + 'apiKey=135cc32856a14a309805e4b35cc4af0a';
  var req = new Request(url);
  return fetch(req)
    .then(response => response.json()); 
}


const apiKey = process.env.VUE_APP_API_KEY;
  
export function getArticles(title) {

  const url = 'https://newsapi.org/v2/top-headlines?country=us&q=' + title + '&apiKey=' + apiKey;
  var req = new Request(url);
  return fetch(req)
    .then(response => response.json()); 
}

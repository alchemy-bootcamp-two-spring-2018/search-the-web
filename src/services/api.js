// eslint-disable-next-line
export function getNews() {
  const apiKey = process.env.VUE_APP_API_KEY;
  console.log('api key', apiKey)
  const url = 'https://newsapi.org/v2/everything?' +
              'q=Apple&' +
              'from=2018-06-04&' +
              'sortBy=popularity&' +
              'apiKey=784b560036d447e8b3bdbe91b17078e8';
  
  return fetch(url)
    .then(response => response.json());
}
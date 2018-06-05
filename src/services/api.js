// eslint-disable-next-line
export function getNews() {
  const apiKey = process.env.VUE_APP_API_KEY;
  const url = 'https://newsapi.org/v2/top-headlines?' +
              'country=us&' +
              'apiKey=' + apiKey;
  
  return (url)
    .then(response => response.json());
}
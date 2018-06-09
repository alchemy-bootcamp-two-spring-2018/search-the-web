export function getNews(topic) {
  
  // eslint-disable-next-line
  const apiKey = process.env.VUE_APP_API_KEY;
  console.log('api key ' + apiKey);
  //why is apiKey coming back undefined? seems to not be accessing the defined variable in .env file.
  //what did I do wrong?

  const url = 'https://newsapi.org/v2/everything?q=' + 
  encodeURIComponent(topic) + 
  
  // because 'undefined' the following does not work: 
  // '&apiKey=' + apiKey;
  
  //keeping hard-coded key below until figured out.
  '&apiKey=3e0ba7546dd843edb2af015fcbad1fe4';

  console.log('url', url);
  return fetch(url)
    .then(response => response.json());
}

export function getMovie(movieTitle) {
  // eslint-disable-next-line
  const apiKey = process.env.VUE_APP_API_KEY;
  const url = 'http://www.omdbapi.com/?apikey=' + apiKey + '&s=' + encodeURIComponent(movieTitle);
  return fetch(url).then(response => response.json());
}
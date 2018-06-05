// eslint-disable-next-line
const apiKey = process.env.VUE_APP_API_KEY;
export function getBooks(name) {
  const url = 'https://www.googleapis.com/books/v1/volumes?APIKEY=apiKey&maxResults=10&projection=lite&q=' + encodeURIComponent(name);
  return fetch(url)
    .then(response => response.json());
}
export function getBooks(name) {
  const url = 'https://www.googleapis.com/books/v1/volumes?maxResults=10&projection=lite&q=' + encodeURIComponent(name);
  return fetch(url)
    .then(response => response.json());
}

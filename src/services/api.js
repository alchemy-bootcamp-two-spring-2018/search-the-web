export function getResults(searchTerm) {
    const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&limit=10&origin=*&search=' + searchTerm;
    return fetch(url).then(response => response.json());
}
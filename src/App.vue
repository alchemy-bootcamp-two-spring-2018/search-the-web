<template>
  <div id="app">
    <h1>BOOK-C</h1>
    <SearchControl :onSearch="handleSearch"/>
    <BookList :onClick="updateSavedBooks" :books="booksResults"/>
    <SavedBookList :savedBooks="savedBooks"/>
  </div>
</template>

<script>
import BookList from './components/BookList';
import SearchControl from './components/SearchControl';
import SavedBookList from './components/SavedBookList';
import { getBooks } from './services/api.js';

export default {
  data() {
    return {
      booksResults: null,
      savedBooks: []
    };
  },
  created() {
  },
  components: {
    BookList,
    SearchControl,
    SavedBookList
  },
  methods: {
    handleSearch(name) {
      getBooks(name).then(data => {
        this.booksResults = data.items;
      });
    },
    updateSavedBooks(book) {
      if(this.savedBooks.includes(book) === false) {
        this.savedBooks.push(book);
      }
    }
  }
};


</script>

<style>
#app {
  display: grid;
  grid-template: auto 600px / 800px 400px;
  grid-template-areas: 
    "title search"
    "content content";
  font-family: 'Arial', sans-serif;
  background: #003658;
}

h1 {
  font-family: 'Archivo Black', sans-serif;
  font-size: 10em;
  color: white;
  margin: 0px;
}
</style>
<template>
  <div id="app">
    <h1>Booksy</h1>
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

</style>
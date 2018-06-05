<template>
  <div class="results">
    <h2 v-if="books">Results:</h2>
    <div class="book-list">
      <Book
        v-for="book in books"
        :key="book.url"
        :book="book"
        :onClick="onClick"
        :renderSave="renderSave"
      />
    </div>
  </div>
</template>

<script>
import Book from './Book';

export default {
  data() {
    return {
      renderSave: true
    };
  },
  props: ['books', 'onClick'],
  components: {
    Book
  }
};
</script>

<style>
.results {
  padding: 20px;
}

.book-list {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start
}
</style>

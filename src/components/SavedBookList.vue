<template>
  <div v-if="savedBooks[0]" class="saved-results">
    <h2>Saved Books:</h2>
    <div class="saved-books">
      <Book
        v-for="book in savedBooks"
        :key="book.url"
        :book="book"
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
      renderSave: false
    };
  },
  props: ['savedBooks'],
  components: {
    Book
  }
};
</script>

<style>
.saved-results {
  padding: 20px;
}

.saved-books {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}
</style>

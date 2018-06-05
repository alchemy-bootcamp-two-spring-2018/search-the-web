<template>
  <div v-if="savedBooks[0]">
    <h2>Saved Books</h2>
    <div class="saved-books">
      <Book
        v-for="book in savedBooks"
        :key="book.url"
        :book="book"
        :render="render"
      />
    </div>
  </div>
</template>

<script>
import Book from './Book';

export default {
  data() {
    return {
      render: false
    };
  },
  props: ['savedBooks'],
  components: {
    Book
  }
};
</script>

<style>
.saved-books {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}
</style>

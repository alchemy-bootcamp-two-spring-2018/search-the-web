<template>
  <div>
    <h2>Results:</h2>
    <div class="book-list">
      <Book
        v-for="book in books"
        :key="book.url"
        :book="book"
        :onClick="onClick"
      />
    </div>
  </div>
</template>

<script>
import Book from './Book';

export default {
  props: ['books', 'onClick'],
  components: {
    Book
  }
};
</script>

<style>
.book-list {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}
</style>

<template>
  <div>
    <h2>Results:</h2>
    <div class="book-list">
      <Book
        v-for="book in books"
        :key="book.url"
        :book="book"
        :onClick="onClick"
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
      render: true
    };
  },
  props: ['books', 'onClick'],
  components: {
    Book
  }
};
</script>

<style>
.book-list {
  overflow: scroll;
  white-space: nowrap;
}
</style>

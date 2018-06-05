<template>
  <li class="book">
    <a :href="book.volumeInfo.infoLink" target="_blank"><h3>{{ book.volumeInfo.title }}</h3></a>
    <p>{{ book.volumeInfo.subtitle }}</p>
    <p v-if="book.volumeInfo.authors">by {{ book.volumeInfo.authors[0] }}</p>
    <img v-if="book.volumeInfo.imageLinks" :src="book.volumeInfo.imageLinks.thumbnail">
    <button v-if="render" @click="onClick(book)">Save Me</button>
  </li>
</template>

<script>
export default {
  data() {
    return {
      render: true
    };
  },
  props: {
    book: Object,
    onClick: {
      type: Function,
    }
  }
};
</script>

<style>
.book {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 400px;
  background: antiquewhite;
  margin: 5px;
}
</style>

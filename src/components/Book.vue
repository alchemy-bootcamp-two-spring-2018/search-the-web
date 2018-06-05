<template>
  <div class="book">
    <img v-if="book.volumeInfo.imageLinks" :src="book.volumeInfo.imageLinks.thumbnail">
      <a :href="book.volumeInfo.infoLink" target="_blank"><h3>{{ book.volumeInfo.title }}</h3></a>
      <p v-if="book.volumeInfo.authors">by {{ book.volumeInfo.authors[0] }}</p>
      <button v-if="renderSave" @click="onClick(book)">Save</button>
  </div>
</template>

<script>
export default {
  props: {
    book: Object,
    onClick: {
      type: Function,
    },
    renderSave: Boolean
  }
};
</script>

<style>
.book {
  width: 280px;
  height: 400px;
  margin: 5px;
  border: 1px solid black;
  display: grid;
  grid-template: 6fr 2fr 1fr 1fr / auto;
  grid-template-areas: 
    "book-image"
    "book-title"
    "book-author"
    "book-save";
  box-sizing: border-box;
  text-align: center;
}

img {
  grid-area: book-image;
  margin: 20px auto 0px auto;
}

.book>a {
  grid-area: book-title;
}

.book>p {
  grid-area: book-author;
}

.book>button {
  grid-area: book-save;
  border: none;
  background: grey;
  color: white;
  padding: 5px;
  transition: all .3s ease;
  cursor: pointer;
}

.book>button:hover {
  background: lightgrey;
}
</style>

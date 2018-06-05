<template>
  <li class="book">
    <img v-if="book.volumeInfo.imageLinks" :src="book.volumeInfo.imageLinks.thumbnail">
    <div class="plaque">
      <a :href="book.volumeInfo.infoLink" target="_blank"><h3>{{ book.volumeInfo.title }}</h3></a>
      <p v-if="book.volumeInfo.authors">by {{ book.volumeInfo.authors[0] }}</p>
      <button v-if="render" @click="onClick(book)">Save</button>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    book: Object,
    render: Boolean,
    onClick: {
      type: Function,
    }
  }
};
</script>

<style>
.book {
  display: inline-block;
  width: 280px;
  height: 400px;
  margin: 5px;
}

img {
  background: black;
  border: 15px double gold;
}

.plaque {
  background: white;

}
</style>

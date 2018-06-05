<template>
  <span>
    <section v-if="articles">
      <h3 class="news">Latest News:</h3>
      <single-article class="articles"
      v-for="item in articles"
      :key="item.url"
      :article="item"
      />
    </section>
    <section v-else>
      <h3 class="search">Use the search bar to find news</h3>
    </section>
  </span>
</template>

<script>
import SingleArticle from './SingleArticle.vue';

export default {
  props: ['articles'],

  components: {
    SingleArticle
  }
}
</script>

<style scoped>

span {
  display: flex;
  justify-content: center;
}

.news {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2em;

}

.search {
  color: rgb(78, 78, 78);
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
}
</style>


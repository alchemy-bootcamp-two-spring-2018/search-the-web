<template>
  <div>
    <h3>Search Results</h3>
    <single-article
    v-for="item in articles"
    :key="item.url"
    :article="item"
    />
  </div>
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

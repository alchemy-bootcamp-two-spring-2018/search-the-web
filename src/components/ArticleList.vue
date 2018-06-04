<template>
  <div>
    <h2>Articles</h2>
    <ul>
      <Article
        v-for="article in articles"
        :key="article.title"
        :article="article"
        />
    </ul>
    </div>

</template>

<script>
import Article from "./Article";

export default {
  props: ['articles'],
  components: {
    Article
  }
};
</script>


<style>

</style>

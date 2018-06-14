<template>
  <section class="article">
    <h3>{{article.title}}</h3>
    <p>{{article.author}}, {{article.source.name}}</p>
    <p>{{article.description}}</p>
    <a v-bind:href="article.url" target="_blank">Link to Full Article</a>
    
  </section>
</template>

<script>
export default {
  props: ['article']
};
</script>

<style>
  .article {
  padding: 10px;
  border-radius: 12px;
}
</style>
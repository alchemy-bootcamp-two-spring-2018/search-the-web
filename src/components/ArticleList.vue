<template>
  <div>
    <h2>Found these articles with your keyword:</h2>
    <div>
      <Article
        v-for="article in articles"
        :key="article.title"
        :article="article"
        />
    </div>
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
  h2 {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-align: center;
  }
  .article {
  background-color: bisque;
  margin: 10px;
  }
</style>

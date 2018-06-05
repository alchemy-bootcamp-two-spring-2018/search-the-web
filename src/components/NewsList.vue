<template>
  <div>
    <h2>News in USA</h2>
    <ul>
      <News
        v-for="article in newslist"
        :key="article.url"
        :article="article"
      />
    </ul>
  </div>
</template>

<script>
import News from './News';
export default {
  props: ['newslist'],
  components: {
    News
  }
};
</script>
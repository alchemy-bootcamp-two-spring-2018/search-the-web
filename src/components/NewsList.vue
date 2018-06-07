<template>
  <div>
    <h2>News</h2>
    <ul>
      <Headline
        v-for="articles in news"
        :key="articles.url"
        :news="articles"
      />
    </ul>
  </div>
</template>

<script>
import Headline from './Headline';

export default {
  props:['news'],
  components: {
    Headline
  }
};
</script>
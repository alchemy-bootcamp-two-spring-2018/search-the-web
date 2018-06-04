<template>
  <div>
    <h2>News</h2>
    <ul>
      <Person
        v-for="news in news"
        :key="news.url"
        :news="news"
      />
    </ul>
  </div>
</template>

<script>
import News from './News';

export default {
  props:['people'],
  components: {
    News
  }
};
</script>

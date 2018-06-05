<template>
  <div>
    <h2>News</h2>
    <ul>
      <Headline
        v-for="headline in news"
        :key="headline.url"
        :news="news"
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

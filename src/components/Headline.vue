<template>
  <li>
    <h3>{{news.title}}</h3>
    <a :href="news.url">{{news.source.name}}</a>
  </li>
</template>

<script>
export default {
  props: ['news']
};
</script>
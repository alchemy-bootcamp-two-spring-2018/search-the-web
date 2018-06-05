<template>
  <li>
    <h2>{{article.title}}</h2>
    <h4>{{article.author}}</h4>
    <h4>{{article.url}}</h4>
    <h4>{{article.description}}</h4>
  </li>
</template>

<script>
export default {
  props: ['article']
};
</script>
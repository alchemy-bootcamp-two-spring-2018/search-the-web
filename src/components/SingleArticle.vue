<template>
  <div>
    <h3>{{article.title}}</h3>
    <a :href="article.url">{{article.source.name}}</a>
  </div>
</template>

,<script>
export default {
  props: ['article']
}
</script>


<template>
  <section>
    <h3>{{article.title}}</h3>
    <a :href="article.url">{{article.source.name}}</a>
  </section>
</template>

,<script>
export default {
  props: ['article']
}
</script>

<style scoped>

section {
  color: rgb(46, 46, 46);
  border: 1px solid rgb(0, 81, 255);
  border-radius: 2px;
  background-color: rgb(194, 194, 194);
  margin-bottom: 5px;
  padding: 15px;
  width: 400px;
}

h3 {
  margin: 0;
}
</style>

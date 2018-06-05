<template>
  <li>
    <h3>{{news.title}}</h3>
  </li>
</template>

<script>
export default {
  props: ['news']
};
</script>

<style scoped>
li {
  list-style: none;
}
</style>

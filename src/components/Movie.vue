<template>
  <li>
    <img :src="movie.Poster">
    <h3>{{ movie.Title }}</h3>
    <p>{{ movie.Year }}</p>
  </li>
</template>

<script>
export default {
  props: ['movie']
};
</script>

<style>
  img {
    max-height: 250px;
  }
</style>

<template>
  <div class="movie">
    <img 
      v-if="movie.Poster !== 'N/A'"
      :src="movie.Poster"
    >
    <h3>{{movie.Title}}</h3>
    <p>Year: "{{movie.Year}}"</p>
  </div>
</template>

<script>
export default {

  props: ['movie']
};
</script>

<style scoped >
  img {
    height: 400px;
    margin-right: 10px;
  }
  .movie {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  h3 {
    margin-top: 0px;
    margin-bottom: 0px;
  }

</style>

<template>
  <div class="results-Area">
    <h1 v-if="movieList">Search Results</h1>
    <div class="movie-results">
    <MovieDetails
      v-for="movie in movieList"
      :key="movie.id"
      :movie="movie"
    />
    </div>
  </div>
</template>

<script>
import MovieDetails from './MovieDetails.vue';
export default {
  props: ['movieList'],
  components: {
    MovieDetails
  }
};
</script>

<style scoped>
  .results-Area {
    text-align: center;
    background: rgba(211, 211, 211, 0.801);
  }
  .movie-results {
    height: 500px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    margin: auto;
    width: 99%;
    overflow-x: auto;
    height: 100%;
  }
  h1 {
    margin-top: 0px;
  }
</style>

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
  }
  .movie-results {
    height: 500px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    margin: auto;
    width: 90%;
    overflow-x: auto;
    
  }
</style>

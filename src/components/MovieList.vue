<template>
  <div>
    <h2>Movies</h2>
      <ul>
        <Movie
          v-for="movie in movies"
          :key=movie.imdbID
          :movie="movie"
        />
      </ul>
  </div>
</template>

<script>
import Movie from './Movie';

export default {
  props: ['movies'],
  components: {
    Movie
  }
};
</script>

<style>

</style>

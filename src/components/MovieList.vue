<template>
  <div>
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

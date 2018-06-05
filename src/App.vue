<template>
  <div id="app">
    <h1>Search The Web</h1>
    <SearchControl :onSearch="handleSearch"/>
    <MovieList :movieList="movies"/>
  </div>
</template>

<script>
import SearchControl from './components/SearchControl.vue';
import { getMovie } from './services/api.js';
import MovieList from './components/MovieList.vue';

export default {
  data() {
    return {
      movies: null
    };
  },
  components: {
    SearchControl,
    MovieList
  },
  methods: {
    handleSearch(movieTitle) {

      getMovie(movieTitle).then(data => {
        this.movies = data.Search;
        console.log(this.movies);
      });
    }
  }
};
</script>

<style>
MovieList {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}
#app {
  text-align: center;
}
</style>

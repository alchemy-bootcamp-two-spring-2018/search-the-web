<template>
  <div id="app">
    <SearchControl :onSearch="handleSearch"/>
    <MovieList :movies="movies"/>
  </div>
</template>

<script>
import SearchControl from './components/SearchControl';
import MovieList from './components/MovieList';
import { getMovies } from './services/api';

export default {
  data() {
    return {
      movies: null,
    };
  },
  name: 'app',
  components: {
    SearchControl,
    MovieList
  },
  methods: {
    handleSearch(title) {
      getMovies(title).then(data => {
        this.movies = data.Search;
      });
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>

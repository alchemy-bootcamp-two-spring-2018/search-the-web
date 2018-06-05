<template>
  <div id="app">
    <h1>Search for Movies and TV!</h1>
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
    handleSearch(title, year) {
      getMovies(title, year).then(data => {
        this.movies = data.Search;
      });
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 900px;
  margin: 0 auto;
}

ul {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}

h3 {
  margin: 5px;
}

p {
  margin: 2px;
}

li {
  padding-top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  text-align: center;
  background: #eee;
  width: 250px;
  height: 375px;
  border-radius: 5px;
}
</style>

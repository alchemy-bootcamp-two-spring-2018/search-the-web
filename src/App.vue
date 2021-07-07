<template>
  <div id="app">
    <div id="header">
      <h1 class="h1">Movie Time!</h1>
      <SearchControl :onSearch="handleSearch"/>
    </div>
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
#header {
  height: 100px;
  border-style: solid;
  border-width: 1px;
  border-color: black;
  font-family: 'Times New Roman', Times, serif;
  color: white;
  margin-top: 0px;
  background-image: url('http://www.pptbackgrounds.org/uploads/film-movies-movie-making-minimalism-creative-backgrounds-wallpapers.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
.h1 {
  margin:0px;
}
MovieList {
  display: flex;
  flex-wrap: wrap;
  align-content: center;

}
#app {
  text-align: center;
  border-style: solid;
  border-color: black;
  border-width: 1px;
}

</style>

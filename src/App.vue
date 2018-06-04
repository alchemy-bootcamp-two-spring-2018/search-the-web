<template>
  <div id="app">
    <h1>Search The Web</h1>

    <SearchControl :onSearch="handleSearch"/>
  </div>
</template>

<script>
import SearchControl from './components/SearchControl.vue';
import { getMovie } from './services/api.js';
export default {
  data() {
    return {
      movie: null
    };
  },
  components: {
    SearchControl 
  },
  methods: {
    handleSearch(movieTitle) {
      console.log(movieTitle);
      getMovie(movieTitle).then(data => {
        this.movie = data.results;
        console.log(this.movie);
      });
    }
  }
};
</script>

<style>

</style>

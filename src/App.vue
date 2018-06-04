<template>
  <div id="app">
    <h1>TasteDive Interface</h1>
    <SearchControl />
    <ResultList />
  </div>
</template>

<script>
import SearchControl from './components/SearchControl';
import ResultList from './components/ResultList';

export default {
  components: {
    SearchControl,
    ResultList
  },

    methods: {
    handleSearch(keywords) {
      this.loading = true;
      getPeople(name).then(data => {
        this.people = data.results;
        this.loading = false;
      });
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

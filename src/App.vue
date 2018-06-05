<template>
  <div id="app">
    <h1>Headlines from Around the World</h1>
    <SearchControl :triggerSearch="handleSearch"/>
    <Loading :loading="loading" />
    <ResultList :resultsToDisplay="results"/>
  </div>
</template>

<script>
import SearchControl from './components/SearchControl';
import ResultList from './components/ResultList';
import Loading from './components/Loading';
import { getResults } from './services/api';

export default {

  data() {
    return {
      results: null,
      country: 'us',
      loading: false
    }
  },

  components: {
    SearchControl,
    ResultList,
    Loading
  },

  methods: {
    handleSearch(country) {
      this.loading = true;
      getResults(country).then(data => {
        this.results = data.articles;
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

<template>
  <div id="app">
    <search
      :onSearch="onSearch"/>
    <results
      v-if="searchResult"
      :searchResult="searchResult" />
  </div>
</template>

<script>
import Search from './components/Search'
import Results from './components/Results'
import { getResults } from './services/api.js'

export default {
  name: 'app',
  components: {
    Search,
    Results
  },
  data() {
    return {
      searchResult: null
    }
  },
  methods: {
    onSearch: function(searchTerm) {
      getResults(searchTerm).then(data => {
        this.searchResult = data;
      });
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: seashell;
  margin-top: 60px;
  width: 777px;
  margin: auto;
}
</style>

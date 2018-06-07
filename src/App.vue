<template>
  <div id="app">
    <h2 class="controller">Let's get some news</h2>
    <SearchControls class="controller"
    :onSearch="handleSearch"
    />
    <NewsList
    :news="news"
    />

  </div>
</template>

<script>
import SearchControls from './components/SearchControls.vue';
import NewsList from './components/NewsList.vue';
import { getNews } from './services/api.js';


export default {

  data() {
    return {
      news: null,
    };
  },

  components: {
    SearchControls,
    NewsList
  },

  methods: {
    handleSearch(name, country) {
      getNews(name, country).then(data => {
        this.news = data.articles;
      });
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px;
}

.controller {
  text-align: center;
}

</style>

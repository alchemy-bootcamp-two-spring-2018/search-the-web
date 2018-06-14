<template>
  <div id="app">
      <SearchControl :onSearch="handleSearch" />
      <ArticleList :articles="articles" />
  </div>
</template>

<script>
import SearchControl from './components/SearchControl';
import ArticleList from './components/ArticleList';
import { getArticles } from './services/api';

// eslint-disable-next-line
console.log(process.env.VUE_APP_API_KEY);

export default {
  data() {
    return {
      articles: null
    };
  },
  components: {
    ArticleList,
    SearchControl
  },
  methods: {
    handleSearch(title) {
      getArticles(title).then(data => {
        this.articles = data.articles;
      });
    }
  }
};
</script>


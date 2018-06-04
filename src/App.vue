<template>
  <div id="app">
      <SearchControl :onSearch="handleSearch" />
  </div>
  
</template>

<script>
import SearchControl from './components/SearchControl';

// eslint-disable-next-line
console.log(process.env.VUE_APP_API_KEY);

export default {
  data() {
    return {
      people: null
    };
  },
  components: {
    PeopleList,
    SearchControl
  },
  methods: {
    handleSearch(name) {
      getPeople(name).then(data => {
        this.people = data.results;
      });
    }
  }
};
</script>

<style>

</style>

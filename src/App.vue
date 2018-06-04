<template>
  <div id="app">
    <HeroesList :heroes="heroes"/>
  </div>
</template>

<script>
import HeroesList from './components/HeroesList';
import { getHeroes } from './services/api';
export default {
  data() {
    return {
      heroes: null
    };
  },
  components: {
    HeroesList
  },
  methods: {
    handleSearch(name) {
      getHeroes(name).then(data => {
        this.heroes = data.results;
      });
    }
  }
};
</script>

<style>

</style>


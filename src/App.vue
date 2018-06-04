<template>
  <div id="app">
      <SearchControl :onSearch="handleSearch" />
  </div>
  
</template>

<script>
import SearchControl from './components/SearchControl';
import DrinkList from './components/DrinkList';
import { getDrinks } from './services/api';


// eslint-disable-next-line
console.log(process.env.VUE_APP_API_KEY);

export default {
  data() {
    return {
      drinks: null
    };
  },
  components: {
    DrinkList,
    SearchControl
  },
  methods: {
    handleSearch(name) {
      getDrinks(name).then(data => {
        this.drinkName = data.drinks;
      });
    }
  }
};
</script>

<style>

</style>

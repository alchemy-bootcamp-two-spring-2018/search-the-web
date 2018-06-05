<template>
  <div id="app">
    <h1>Hello World: Let's Search the Web!!!</h1>
    <SearchControl :onSearch="handleSearch"/>
    <PokemonList :pokemon="pokemon"/>
  </div>
</template>

<script>
import SearchControl from './components/SearchControl.vue';
import PokemonList from './components/PokemonList';
import { getPokemon } from './services/api';

// eslint-disable-next-line
// console.log(process.env.VUE_APP_API_KEY);

export default {
  data() {
    return {
      pokemon: null
    };
  }, 
  components: {
    SearchControl,
    PokemonList
  },
  methods: {
    //loading goes here

    handleSearch(pokemon) {
      getPokemon(pokemon).then(data => {
        this.pokemon = data;
        //this.loading = false will go here
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

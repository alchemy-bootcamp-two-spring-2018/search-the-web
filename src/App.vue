<template>
  <div id="app">
    <h1>Pok&eacutemon Search</h1>
    <SearchControl :onSearch="handleSearch"/>
    <Loading :loading="loading"/>
    <PokemonList :pokemon="pokemon"/>
  </div>
</template>

<script>
import SearchControl from './components/SearchControl.vue';
import PokemonList from './components/PokemonList';
import Loading from './components/Loading';
import { getPokemon } from './services/api';

export default {
  data() {
    return {
      pokemon: null,
      loading: false
    };
  }, 
  components: {
    SearchControl,
    PokemonList,
    Loading
  },
  methods: {
    handleSearch(pokemon) {
      this.loading = true;

      getPokemon(pokemon).then(data => {
        this.pokemon = data;
        console.log(this.pokemon);
        this.loading = false;
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

body {
  background-color: rgb(204, 227, 235);
}
</style>

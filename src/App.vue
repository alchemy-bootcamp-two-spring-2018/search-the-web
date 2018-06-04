<template>
  <div id="app">
    <h1>Pokemon Search API</h1>
    <SearchControl :onSearch="handleSearch"/>
    <PokemonList :pokemonList="pokemon"/>
  </div>
</template>

<script>
import PokemonList from './components/PokemonList';
import SearchControl from './components/SearchControl';
import { getPokemon } from './services/api.js';

export default {
  data() {
    return {
      pokemon: null
    };
  },


  components: {
    PokemonList,
    SearchControl,
  },

  methods: {
    handleSearch(name) {

      getPokemon(name.toLowerCase()).then(data => {
        this.pokemon = data;
        console.log(this.pokemon);
      });
    }
  }
};

getPokemon(name);

</script>

<style>

</style>

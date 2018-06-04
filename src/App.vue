<template>
  <div id="app">
    <h1>Pokemon Search API</h1>
    <SearchControl :onSearch="handleSearch"/>
    <Loading :loading="loading"/>
    <PokemonList :pokemonList="pokemon"/>
  </div>
</template>

<script>
import SearchControl from './components/SearchControl';
import Loading from './components/Loading';
import PokemonList from './components/PokemonList';
import { getPokemon } from './services/api.js';

export default {
  data() {
    return {
      pokemon: null,
      loading: false
    };
  },
  components: {
    SearchControl,
    Loading,
    PokemonList
  },
  methods: {
    handleSearch(name) {
      this.loading = true;

      getPokemon(name.toLowerCase()).then(data => {
        this.pokemon = data;
        this.loading = false;
        console.log(this.pokemon);
      });
    }
  },

  created: function() {
    console.log('On APP creation');
    getPokemon(name);
  }

};

getPokemon(name);

</script>

<style>

</style>

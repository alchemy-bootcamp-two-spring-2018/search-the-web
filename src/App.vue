<template>
  <div id="app">
    <h1>Pokemon API Demo (<a target="new" href="https://pokeapi.co">pokeapi.co</a>)</h1>
    <SearchControl :onSearch="handleSearch"/>
    <Loading :loading="loading"/>
    <PokemonList :pokemon="pokemon"/>
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
      pokemon: '',
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
    getPokemon(name);
  }

};

</script>

<style>
#app {
  display: flex;
  flex-flow: column nowrap;
  margin: 5px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

a {
  color: crimson;
}
a:visited {
  color: crimson;
  text-decoration: none;
}
</style>

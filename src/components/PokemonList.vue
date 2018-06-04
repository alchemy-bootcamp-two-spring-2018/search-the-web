<template>
  <div>
    <h2>Results returned here:</h2>
    <ul>
      <Pokemon
      v-for="pokemon in pokemonList"
      :key="pokemon.name"
      :pokemon="pokemon"
      />
    </ul>
  </div>
</template>

<script>
import Pokemon from './Pokemon';

export default {

  props: ['pokemonList'],

  components: {
    Pokemon
  }
};
</script>

<style>

</style>

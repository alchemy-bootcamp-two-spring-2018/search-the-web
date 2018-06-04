<template>
  <div>
    <h2>PokemonList</h2>
    <ul>
      <Pokemon 
        v-for="pokes in pokemon"
        :key="pokes.url"
        :pokemon="pokemon"
      />
    </ul>
  </div>
</template>

<script>
import Pokemon from './Pokemon';

export default {
  props: ['pokemon'],
  components: {
    Pokemon
  }
};
</script>

<style>

</style>


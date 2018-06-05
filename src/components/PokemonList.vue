<template>
  <div>
    <h2>Search Results:</h2>
    <ul>
      <Pokemon 
        v-if="pokemon"
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


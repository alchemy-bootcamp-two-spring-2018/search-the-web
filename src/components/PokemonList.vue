<template>
  <div>
    <ul>
      <Pokemon
      :key="pokemon.name"
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

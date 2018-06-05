<template>
  <div>
    <li>
      <h3>{{pokemon.name}}</h3>
      <!-- <h3 v-html="pokemon.stats">{{ pokemon.stats }}</h3> -->
      <h3>{{pokemon.abilities[0].ability.name}}</h3>

    </li>
  </div>
</template>

<script>

export default {
  props: ['pokemon']
};
</script>

<style>

</style>

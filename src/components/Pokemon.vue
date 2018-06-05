<template>
  <div class="content">
    <img :src="pokemon.sprites.front_default">
    <h3>{{ pokemon.name }}</h3>
    <p>Primary Ability: {{ pokemon.abilities[0].ability.name}}</p>
    <p>Primary Type: {{ pokemon.types[0].type.name}}</p>
    <p>Weight: {{ pokemon.weight}} </p>
    </div>
</template>

<script>
export default {
  props: ['pokemon']

};
</script>

<style>
img {
  background: thistle;
  border: 2px solid black;
}
h3, p {
  text-transform:capitalize;
}
</style>

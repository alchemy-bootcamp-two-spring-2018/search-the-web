<template>
  <div>
    <li>
      <h3>{{pokemon.name}}</h3>
      <h3>{{ pokemon.stats }}</h3>
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

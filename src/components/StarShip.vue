<template>
  <li>
    <h3>Star-Ship Name: {{starShip.name}}</h3>
    <h4>Model Class: {{starShip.model}}</h4>
  </li>
    
</template>

<script>
export default {
  props: ['starShip']

};
</script>

<style>

</style>

<template>
<div>
  <h4>List of Star Ship models here</h4>
  <ul>
  <StarShip
  v-for="starShip in ships"
  :key="starShip.url"
  :starShip="starShip"
  />
  </ul>
</div>
</template>

<script>

import StarShip from './StarShip';

export default {
 
  props: ['ships'],
 
  components: {
    StarShip
  }
};

</script>

<style>

</style>

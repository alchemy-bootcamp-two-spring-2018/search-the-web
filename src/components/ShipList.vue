<template>
<div>
  <h4>List of ship models here</h4>
  <SpaceShip/>
</div>
</template>

<script>
import SpaceShip from './SpaceShip';

export default {
 
  props: ['spaceShip'],
 
  components: {
    SpaceShip
  }
};

</script>

<style>

</style>

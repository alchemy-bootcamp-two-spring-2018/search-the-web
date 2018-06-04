<template>
  <div id="app">
    <h1>Old Ben's Junk Emporium</h1>
    <ShipSearch/>
    <ShipList/>
  </div>
</template>

<script>

import ShipSearch from './components/ShipSearch';
import ShipList from './components/ShipList';

export default {

  components: {
    ShipSearch,
    ShipList,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

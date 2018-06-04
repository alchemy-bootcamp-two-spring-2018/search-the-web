<template>
  <div id="app">
    <h1>Old Ben's Junk Emporium</h1>
    <ShipSearch :onSearch="handleSearch"/>
    <ShipList :ships="ships"/>
  </div>
</template>

<script>

import ShipSearch from './components/ShipSearch';
import ShipList from './components/ShipList';
import { getStarShip } from './services/api';
export default {
  data() {
    return {
      ships: null,
    };
  },
  components: {
    ShipSearch,
    ShipList,
  },
  methods: {
    handleSearch(shipName) {
      getStarShip(shipName).then(data => {
        this.ships = data.results;
      });
    }
  }
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

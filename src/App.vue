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
body {
  background: rgb(0, 5, 36);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: rgb(240, 240, 240);
  width: auto;
  text-align: center;
  margin-top: 60px;
}
</style>

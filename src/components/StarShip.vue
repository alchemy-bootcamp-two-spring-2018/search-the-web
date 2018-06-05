<template>
  <li>
    <h3>STAR-SHIP: {{starShip.name}}</h3>
    <h4>MODEL: {{starShip.model}}</h4>
    <h4>MANUFACTURER: {{starShip.manufacturer}}</h4>
    <h4>HYPERDRIVE RATING: {{starShip.hyperdrive_rating}}</h4>
  </li>
</template>

<script>
export default {
  props: ['starShip']
};
</script>

<style scoped>
h3 {
  text-align: left;
}
h4 {
  color: rgb(155, 155, 155);
  margin-left: 40px;
}
</style>


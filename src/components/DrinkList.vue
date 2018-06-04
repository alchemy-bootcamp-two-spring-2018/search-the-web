<template>
  <div>
    <h2>Drinks</h2>
    <ul>
      <Drink
        v-for="drink in drink"
        :key="drink.idDrink"
        :drink="drink"
        />
    </ul>
    </div>

</template>

<script>
export default {

}
</script>

<style>

</style>

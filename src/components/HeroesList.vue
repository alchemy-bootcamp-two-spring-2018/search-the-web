<template>
  <div class="heroes-list">
    <h2>Heroes List</h2>
    <ul>
      <Hero
        v-for="hero in heroes"
        :key="hero.id"
        :hero="hero"
      />
    </ul>
  </div>
</template>

<script>
import Hero from './Hero';

export default {
  props: ['heroes'],
  components: {
    Hero
  }
};
</script>

<style>

</style>

<template>
  <div>
    <h1>Controls</h1>
    <form @submit.prevent="onSearch(search)">
      <label>pokemon: </label>
      <input v-model="search">
      <button type="submit">Search</button>
      pokemon is {{ pokemon }}
      </form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      search: ''
    };
  },
  props: {
    onSearch: {
      type: Function,
      required: true
    }
  }
};
</script>

<style>

</style>

<template>
  <div>
    <h1>Search Control Area</h1>
    <form @submit.prevent="onSearch(search)">
      <label>Movie:</label>
      <input v-model="search"/>
      <button type="submit">Search</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return { search: '' };
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

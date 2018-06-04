<template>
  <form @submit.prevent="onSearch(searchTitle, searchYear)">
    <label>Title:</label>
    <input v-model="searchTitle">
    <label>Year:</label>
    <input v-model="searchYear">
    <button type="submit">Search</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      searchTitle: '',
      searchYear: ''
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

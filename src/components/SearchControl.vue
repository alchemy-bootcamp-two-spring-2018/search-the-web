<template>
  <div>
    <h2>Find a pokemon:</h2>
    <form @submit.prevent="onSearch(search)">
      <label>Name:</label>
      <input v-model="search"/>
      <button>Search</button>
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

<template>
  <div>

    <form @submit.prevent="onSearch(search)">
      <label>Search By Title: </label>
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

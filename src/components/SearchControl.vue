<template>
  <form @submit.prevent="onSearch(search)">
    <label>Name:</label>
    <input v-model="search"/>
    <button type="submit">Search</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      search: 'Hyperion'
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
input {
  font-size: 5em;
  width: 50%;
}
</style>

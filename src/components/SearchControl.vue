<template>
  <div>
    <h1></h1>
    <form @submit.prevent="onSearch(search)">
      <label>Search by name: </label>
      <input v-model="search" placeholder="pikachu">
      <button type="submit">Search</button>
      <div></div>
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
button{
  margin-left: 10px;
}

</style>

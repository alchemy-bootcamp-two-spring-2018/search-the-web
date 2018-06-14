<template>
  <form class="search" @submit.prevent="onSearch(search)">
    <label>Search for News Articles By Keyword: </label>
    <input v-model="search" />
    <button type="submit">Search</button>
  </form>
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
label, input, button {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 20px;
}

.search {
  height: 40px;
  text-align: center;
  background-color:darkgrey;
  padding-top: 10px;
}

</style>

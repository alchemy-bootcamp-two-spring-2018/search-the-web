<template>
  <div class="content">
    <h3>Search for your favorite pokemon:</h3>
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
.content {
  margin: 15px;
}
</style>

<template>
  <form @submit.prevent="onSearch(search)">
    <label>KeyWord:</label>
    <input v-model="search"/>
    <button type="submit">Find</button>
  </form>
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


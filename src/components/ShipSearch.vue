<template>
  <form @submit.prevent="onSearch(search)">
    <label>Enter Star Ship Name</label>
    <input v-model="search"/>
    <button type="submit">Ship Search</button>
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

<style>

</style>

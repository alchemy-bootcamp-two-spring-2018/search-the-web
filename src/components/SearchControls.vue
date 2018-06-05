
<template>
  <form @submit.prevent="onSearch(search, country)">
      <p>Type something in to see the latest articles from around the web!</p>
      <input v-model="search">
      <button type="submit">Search</button>
      <select v-model="country">
        <option value="us">USA</option>
        <option value="de">Germany</option>
        <option value="cn">China</option>
        <option value="jp">Japan</option>
        <option value="br">Brazil</option>
      </select>
  </form> 
</template>

<script>
export default {
  data() {
    return { search: '', country: 'us' };
  },
  
  created() {
    this.onSearch(this.search);
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

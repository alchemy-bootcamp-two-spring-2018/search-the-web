
<template>
  <form @submit.prevent="onSearch(search)">
      <p>Type something in to see the latest articles from around the web!</p>
      <input v-model="search">
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

}
</script>

<style>

</style>

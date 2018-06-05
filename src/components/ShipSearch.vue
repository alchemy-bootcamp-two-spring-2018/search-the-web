<template>
  <form @submit.prevent="onSearch(search)">
    <label><strong>Enter Star Ship Name/Type:  </strong></label>
    <input v-model="search"/>
    <button type="submit">Search Junkyard</button>
    </form>
</template>

<script>
export default {
  data() {
    return {
      search: 'fighter'
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


<style scoped>
form {
  align-content: center;
}
</style>


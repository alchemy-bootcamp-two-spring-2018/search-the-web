<template>
  <form @submit.prevent="onSearch(search)">
    <input v-model="search"/>
    <button id="search-button" type="submit">Search</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      search: 'Hyperion'
    };
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
form {
  padding: 20px;
  display: flex;
  align-items: center;
}

input {
  font-size: 3em;
  width: 70%;
}

#search-button {
  width: 100px;
  border: none;
  background: grey;
  color: white;
  padding: 5px;
  transition: all .3s ease;
  cursor: pointer;
  height: 60px;
}

#search-button:hover {
  background: lightgrey;
}

</style>

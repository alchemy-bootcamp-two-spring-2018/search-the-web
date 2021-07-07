<template>
  <form @submit.prevent="onSearch(search)">
    <input v-model="search" placeholder="Trump"/>
    <button type="submit">Find News</button>
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

<style scoped>

form {
  display: flex;
  justify-content: center;
  margin-top: 10%;
}

button {
  color: white;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background-color: rgba(255, 0, 0, 0.651);
  box-shadow: 0 0 3px rgba(255, 0, 0, 0.692);
  width: 75px;
  height: 25px;
  border-radius: 5px;
  margin-left: 10px;
  transition: .5s;
}

button:hover {
  background-color: red;
}
</style>



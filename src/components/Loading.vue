<template>
  <div 
    class="loading"
    v-if="loading">
   
  </div>
</template>

<script>
export default {
  props: {
    loading: Boolean
  }
};
</script>

<style scoped>
.loading {
  background-color: creme;
  text-align: center;
}
</style>

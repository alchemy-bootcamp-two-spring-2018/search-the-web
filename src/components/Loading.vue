<template>
  <div 
    class="loading"
    v-if="loading">
    Loading...
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
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: creme;
  text-align: center;
}
</style>

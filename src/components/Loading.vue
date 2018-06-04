<template>
  <div v-if="loading">
    Loading from API...one moment, please!
  </div>
</template>

<script>
export default {

  props: {
    loading: Boolean
  }

};
</script>

<style>

</style>

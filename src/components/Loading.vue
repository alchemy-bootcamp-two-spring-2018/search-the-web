<template>
  <div class="loading"
  v-if="loading">
  Loading...
  </div>
</template>

<script>
export default {
  props: { loading: Boolean }
};
</script>


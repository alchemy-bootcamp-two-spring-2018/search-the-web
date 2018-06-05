<template>
  <div id="results">
    <h2>Result List</h2>
    <ul>
      <ListItem 
        v-for="item in resultsToDisplay"
        :key="item.url"
        :item="item"
      />
    </ul>
  </div>
</template>

<script>
import ListItem from './ListItem';

export default {

  props: ['resultsToDisplay'], 
  components: {
    ListItem
  }

}
</script>

<style scoped>
  #results {
    text-align: left;
  }
</style>

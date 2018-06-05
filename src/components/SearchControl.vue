<template>
  <div>
    <select v-model="country">
      <option v-for="oneCountry in countryOptions"
        v-bind:key="oneCountry.code" 
        v-bind:value="oneCountry.code">
        {{ oneCountry.name }}
      </option>
    </select> 
    <button v-on:click="triggerSearch(country)">Go!</button>
  </div>
</template>

<script>
export default {
  data () {
    return { 
      country: 'us',
      countryOptions: [
        {name:'United States',
        code:'us'},
        {name:'Canada',
        code:'ca'},
        {name:'Great Britain',
        code:'gb'},
        {name:'Australia',
        code:'au'},
        {name:'Taiwan',
        code:'tw'},
        {name:'China',
        code:'cn'},
        {name:'Korea',
        code:'kr'},
        {name:'Germany',
        code:'de'}
      ]
    }
  },
  props: {
    triggerSearch: {
      type: Function,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>

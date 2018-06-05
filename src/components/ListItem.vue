<template>
  <div>
    <li>
      <a :href="item.url"> {{item.title}} </a>
      <p><strong>{{item.source.name}}</strong></p>
    </li>
  </div>
</template>

<script>
export default {

  props: ['item']
}
</script>

</style>

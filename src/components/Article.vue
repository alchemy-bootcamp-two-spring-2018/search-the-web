<template>
<li>
  <h3>{{article.title}}</h3>
  <p>{{article.description}}</p>
</li>
</template>

<script>

export default {
  props: ['article']
};
</script>
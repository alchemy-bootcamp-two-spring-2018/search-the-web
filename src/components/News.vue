<template>
  <div id="content">
  <li>
    <img
    :src="news.urlToImage"
    :key="news.description" >
  <div id="content-block">
    <h3>{{news.title}}</h3>
    <h4>source: {{news.source.name}}</h4>
    <a 
    :href="news.url"
    >Click here for full article.</a>
    </div>
  </li>
  </div>

</template>

<script>
export default {
  props: ['news']
};
</script>

<style scoped>
#content {
  background-color: ivory;
  border-radius: 50px;
  width: 70%;
  padding: 20px;
  margin-left: 100px; 
}
img {
  width: 25%;
  height: auto;
  float: right;
  margin: 25px;
  margin-right: 100px;
  border: 1px solid black;
}
li {
  list-style: none;
  margin: 20px 20px 60px 20px;

}
a {
  text-decoration: none;
  display: block;
  margin-right: 50px;
  cursor: context-menu;
}
</style>

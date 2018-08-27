<template>
  <div id="content">
    <li>
      <img
      :src="news.urlToImage"
      :key="news.description" >
      <div id="content-block">
        <h3>{{news.title}}</h3>
        <p>{{news.description}}</p>
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
  background-color: rgba(255, 255, 240, 0.851);
  border-radius: 50px;
  width: 70%;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
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
  color: purple;
}
a:hover {
  color: brown;
}

</style>

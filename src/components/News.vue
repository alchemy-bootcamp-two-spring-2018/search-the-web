<template>
    <div class="whole-item">
        <li class="news-item">
            <img 
            :src="news.urlToImage"
            :key="news.description"
            >
            <div class="text-wrapper">
                <h1>{{news.source.name}}</h1>
                <h3>{{news.title}}</h3>
                <p>{{news.description}}</p>
                <a
                :href="news.url"
                >Read the rest of the article here</a>
            </div>
        </li>
    </div>
</template>

<script>

export default {
  props: ['news']
}
</script>

<style>

.whole-item{
    background-color: antiquewhite
}

.text-wrapper{
    width: 60%;
}

.news-item {
    padding: 10px;
    border-style: solid;
    border-width: 1px;
    border-color: rgb(185, 185, 185)
}

img {
    height: 200px;
    float: right;
}

div {
    margin-bottom: 50px;
}

</style>

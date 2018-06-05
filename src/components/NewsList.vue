<template>
    <div>
        <ul>
            <News
            v-for="news in news"
            :key="news.url"
            :news="news"
            />
         </ul>
    </div>
</template>
            
<script>
import News from './News';

export default {
    props: ['news'],
    components: {
        News
    }            
};
</script>
            
<style scoped>
ul {
list-style: none;
background-color: rgb(250, 183, 58);
margin: 25px;
}
h2 {
    font-size: 3em;
}
body {
    background-color: pink;
}
</style>
            
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
}
h2 {
    font-size: 3em;
}
body {
    background-color: pink;
}
</style>
            
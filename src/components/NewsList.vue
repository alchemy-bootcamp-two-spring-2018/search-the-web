<template>
    <div>
        <ul>
            <News
            v-for="news in news"
            :key="news.name"
            :news="news"
            />
        </ul>
    </div>
</template>

<script>
import News from './News.vue'

export default {
    props: ['news'],
    
    components: {
        News
    }

}
</script>

<style>

ul {
    list-style-type: none;
}

</style>

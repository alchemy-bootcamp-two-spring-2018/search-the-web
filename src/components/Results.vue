<template>
    <div id="results-main">
        <ul>
            <result 
                v-for="(result, index) in searchResult[1]"
                :key="result"
                :index="index"
                :searchResult="searchResult"
            />
        </ul>
    </div>
</template>

<script>
import result from './result.vue'

export default {
    name: 'results-main',
    props: ['searchResult'],
    components: {
        result
    }
}
</script>

<style scoped>
ul {
    text-align: left;
}
</style>

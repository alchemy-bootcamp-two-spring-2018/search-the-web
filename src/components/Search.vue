<template>
    <div id="search-main">
        <input
            v-model="searchTerm"
            @keyup.enter="onSearch(searchTerm)">
        <button
            @click="onSearch(searchTerm)">
            Search!
        </button>
    </div>
</template>

<script>
export default {
    name: 'search-main',
    props: {
        onSearch: {
            type: Function,
            required: true
        }
    },
    data() {
        return {
            searchTerm: null
        }
    }
}
</script>

<style scoped>

</style>

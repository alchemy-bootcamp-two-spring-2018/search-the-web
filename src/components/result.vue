<template>

<li>
    <a :href="searchResult[3][index]" target="_blank">
        <h1>{{ searchResult[1][index] }}</h1>
        <p>{{ searchResult[2][index] }}</p>
    </a>
</li>
</template>

<script>
export default {
    name: 'result',
    props: ['searchResult', 'index']
}
</script>

<style scoped>

h1 {
    text-align: center;
}
li {
    list-style: none;
    cursor: pointer;
    border-radius: 13px;
    padding: 6px;
    transition: .5s;
}

li:hover {
    color: seashell;
    background-color: slateblue;
}

p::first-letter {
    font-weight: bold;
    font-size: 1.5rem;
}

a {
    text-decoration: none;
    color: inherit;
}
</style>

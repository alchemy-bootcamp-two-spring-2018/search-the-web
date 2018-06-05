<template>
    <form @submit.prevent="onSearch(search)">
        <span id="top"><h1>The Newsington Post</h1></span>
        <span id="top-small"><h4>THE MOST ADVANCED NEWS SOURCE AVAILABLE</h4></span>
        <input placeholder="enter news topic" v-model="search"/>
        <button class="button" type="submit">Search</button>
    </form>
</template>

<script>

export default {
    data() {
        return { search: '' };
    },
    props: {
        onSearch: {
            type: Function,
            required: true
        }
    }
};
</script>
<style scoped>
h1 {
    margin-top: 100px;
    margin-bottom: 2px;
    border-bottom: 2px solid gray;
   
}
#top {
    text-align: center;
    font-family: 'Antic Didone', serif;
    font-size: 2em;
    
}
#top-small {
    margin-top: 0;
   
    font-size: 10px;
    text-align: center;

}

input {
    margin-left: 20px;
}

.button {
    font-size: 20px;
    background-color: pink;
    margin-left: 10px;
    border: 2px solid purple;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.1s;
}

.button:hover {
    background-color: #4CAF50; /* Green */
    color: white;
}
</style>

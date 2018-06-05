<template>
    <form @submit.prevent="onSearch(search)">
        <span id="top">
            <h1>The Newsington Post</h1>
        </span>
        <span id="top-small">
            <h4>THE MOST ADVANCED NEWS SOURCE AVAILABLE</h4>
            <p id="tiny-line">we don't even have our own content</p>
        </span>
        <input placeholder="enter news topic" v-model="search" onSearch="this.value=''" />
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
form {
    margin-bottom: 50px;
}
h1 {
    text-align: center;
    margin-top: 100px;
    margin-bottom: 2px;
    border-bottom: 3px solid gray;   
}

#top {
    text-align: center;
    font-family: 'Antic Didone', serif;
    font-size: 2em;   
}

#top-small {
    font-size: 12px;
    text-align: center;
}
#tiny-line {
    margin-top: 0px;
    font-size: 13px;
}
input {
    border-radius: 12px;
    margin-left: 45px;
    cursor: pointer;
    text-align: center;
}

.button {
    border-radius: 5px;
    cursor: pointer;
    font-size: 20px;
    background-color: pink;
    margin-left: 10px;
    border: 2px solid purple;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    -webkit-transition-duration: 0.4s; 
    transition-duration: 0.1s;
}

.button:hover {
    background-color: #4CAF50; 
    color: white;
}

</style>

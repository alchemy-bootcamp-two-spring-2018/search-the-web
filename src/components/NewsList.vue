<template>
    <div>
        <h2>News</h2>
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
            
            <style>
            
            </style>
            
<template>
    <div id="app">
        <main-page/>
    </div>
</template>

<script>
    import MainPage from './components/MainPage.vue'

    export default {
        name: 'App',
        components: {
            MainPage
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin-top: 60px;
        margin-left: 15%;
    }
</style>

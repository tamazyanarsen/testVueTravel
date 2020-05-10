<template>
    <div>
        <main-filter></main-filter>
    </div>
</template>

<script>
    import MainFilter from "@/components/MainFilter";

    export default {
        name: 'MainPage',
        components: {MainFilter},
        props: {
            msg: String
        }
    }
</script>

<style scoped>

</style>

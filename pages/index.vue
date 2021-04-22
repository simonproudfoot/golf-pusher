<template>
<div>
<router-link class="links" v-for="r in routes" :key="r.path" :to="r.path">
    {{ r.name }}
</router-link>
</div>
</template>

<script>
export default {
    computed: {
        routes() { return this.$router.getRoutes() }
    }
}
</script>

<style>
nav{
    margin-top: 2000px;
}
.links{
    color: red;
    margin-bottom: 1em;
    display: block;
}
</style>

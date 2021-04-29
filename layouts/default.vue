<template>
<div id="app">
    <h1 class="text-white testTimer" >{{$store.state.time}} min until next show | idle time <v-idle :duration="300" :loop="true" @idle="$store.commit('resetAll')" /></h1>
    <!-- <h1 class="text-white testTimer" v-else>Waiting for video to finish</h1> -->
    <Nuxt />
</div>
</template>
<script>
export default {
    computed: {
        routes() { return this.$router.getRoutes() }
    }
}
</script>

<style lang="scss">
.testTimer {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 50px;
    width: 300px;
    z-index: 9999;
    background: $darkBlue;
    font-size: 10px;

}
</style>

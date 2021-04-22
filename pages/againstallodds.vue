<template>
<div class="home">
    <heading :titleA="'AGAINST'" :titleB="'ALL ODDS'"></heading>
    <transition name="fade-out">
    <slider v-if="$store.state.view == 'main'" :images="['large.jpg', 'large2.jpg']" />
    </transition>
    <interactive />
    <bottom/>
</div>
</template>
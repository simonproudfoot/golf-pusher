<template>
<div class="home">
    <heading :titleA="'MAKING'" :titleB="'HISTORY'"></heading>
    <transition name="fade-out">
        <slider v-if="$store.state.view == 'main'" :images="['large.jpg', 'large2.jpg']" />
    </transition>
    <interactive />
    <bottom />
</div>
</template>

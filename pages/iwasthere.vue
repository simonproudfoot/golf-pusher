<template>
<div class="home">
    <main class="videoMode" v-if="$store.getters.videoMode">
        <video @ended="$nuxt.$emit('reset', true)" v-gsap.fromTo="[{autoAlpha: 0}, {autoAlpha: 1, delay: 1, duration: 1}]" class="video" autoplay>
            <source :src="require('@/assets/video/'+videoUrl)" type="video/mp4">
        </video>
    </main>
    <main v-else>
        <span v-show="$store.state.view == 'main'" class="gradientOverlay" style="height: 1200px"></span>
        <heading class="mainHead" :titleA="'I WAS'" :titleB="'THERE'" :primaryColour="pColor"></heading>
          <!-- <button class="white-text jump" @click="$nuxt.$emit('reset')">
                <h1>Skip tp video</h1>
            </button> -->
        <transition name="fade-out">
            <slider class="mainSlider" v-if="$store.state.view == 'main'" :images="['large.jpg', 'large2.jpg']" />
        </transition>
        <interactive :primaryColour="pColor" />
        <bottom :primaryColour="pColor" />
    </main>
</div>
</template>
<script>
export default {
    data: function () {
        return {
            pColor: '#77cae7',
            videoUrl: 'demo.mp4',
        }
    },
}
</script>


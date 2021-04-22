<template>
<div class="slider">
    <img v-for="(image, i) in images" :key="i" class="backImage" :ref="image"  :src="require(`../assets/img/${image}`)">
</div>
</template>

<script>
import { TweenMax, TimelineMax, Power3, CSSPlugin } from "gsap";

export default {
    name: 'slider',
    props: ['images'],
    data: function () {
        return {
            slideTimeline: new TimelineMax({ paused: true, reversed: true, repeat: -1 }),
            activeImage: '',
            speed: 25,
            duration: 10,
            count: 0
        }
    },
    methods: {
        runSlide() {
            this.images.forEach(element => {
               this.slideTimeline.fromTo(this.$refs[element], { autoAlpha: 0, scale: 1.1 }, { autoAlpha: 1, scale: 1, duration: 10 })
            });
        }
    },
    mounted() {
        this.slideTimeline.play()
        this.runSlide()

    }
}
</script>

<style lang="scss">


.slider {
    overflow: hidden;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 460px;
    background-color: $darkBlue;
    z-index: 0;

}

.backImage {
    position: absolute;
    opacity: 0;
}
</style>
<template>
<div class="slider">
  
    <img v-for="(image, i) in images" :key="i" class="backImage" :ref="image" :src="require(`../assets/img/${image}`)">
</div>
</div>
</template>

<script>
export default {
    name: 'slider',
    props: ['images'],
    data: function () {
        return {
            activeImage: '',
            speed: 25,
            duration: 10,
            count: 0
        }
    },
    methods: {
        runSlide() {
            this.images.forEach(element => {
                this.$gsap.fromTo(this.$refs[element], { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1, duration: 10, repeat: -1 })
            });
        }
    },
    mounted() {
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
    top: 400px;
    background-color: $darkBlue;
    z-index: 0;

}

.backImage {
    position: absolute;
    opacity: 0;
}
</style>

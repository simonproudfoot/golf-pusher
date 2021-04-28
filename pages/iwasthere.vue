<template>
<div class="home">
    <main class="videoMode" v-if="$store.getters.videoMode">
        <video @ended="reset()" v-gsap.fromTo="[{autoAlpha: 0}, {autoAlpha: 1, delay: 1, duration: 1}]" class="video"  autoplay>
            <source :src="require('@/assets/video/'+videoUrl)" type="video/mp4">
        </video>
    </main>
    <main v-else>
        <button class="white-text jump" @click="reset">
            <h1>Skip tp video</h1>
        </button>
        <heading class="mainHead" :titleA="'I WAS'" :titleB="'THERE'" :primaryColour="pColor"></heading>
        <transition name="fade-out">
            <slider class="mainSlider" v-if="$store.state.view == 'main'" :images="['large.jpg', 'large2.jpg']" />
        </transition>
        <interactive :primaryColour="pColor" />
        <bottom :primaryColour="pColor" />
    </main>

</div>
</template>

<script>
// PUSHER online VERSION
if (process.env.version !== 'local') {
    var Pusher = require('pusher-js');
    var pusher = new Pusher('f01ccdabee9849cb6558', {
        cluster: 'eu'
    });
    var channel = pusher.subscribe('my-channel');
}
export default {
    data: function () {
        return {
            pColor: '#77cae7',
            videoUrl: 'demo.mp4',
            socket: null,
            tick: 0,
            view: '',
        }
    },
    watch: {
        '$store.state.time'(val) {
            if (val === 0) {
                this.reset
            }
        }
    },
    methods: {

        reset() {
            this.$store.commit('resetAll')
            this.$gsap.to('.mainSlider', { autoAlpha: 0, duration: 0.4 })
            this.$gsap.to('.mainHead h1', { y: -100, autoAlpha: 0, stagger: 0.2, ease: 'power2.inOut' })
            this.$gsap.to('.mainHead', { y: -100, autoAlpha: 0, duration: 0.6, delay: 0.5, ease: 'power2.inOut' })

            setTimeout(() => {
                var v = this.$store.getters.videoMode ? false : true
                this.$store.commit('setVideoMode', v)
                this.socket.emit('resetTimer', {});
            }, 1000);
        },

    },
    created() {
        if (process.env.version !== 'local') {
            console.log('Running pusher version')
            channel.bind('my-event', (data) => {
                this.$store.commit('setTime', data.minutes)
                console.log(data)
            });
        } else {
            console.log('Running socket version')
            this.socket = this.$nuxtSocket({
                channel: '/'
            })
            /* Listen for events: */
            this.socket.on('oneSecond', (data) => {
                this.$store.commit('setTime', data.minutes)
            })
        }
    },
}
</script>

<style lang="scss">
.jump {
    position: fixed;
    bottom: 0;
    right: 0;
    height: 20px;
    width: 100px;
    z-index: 9999;
    background: $darkBlue;
    font-size: 10px;
    color: #fff;
}

.videoMode {
    position: relative;
    height: 5760px;
    width: 1080px;
    display: block;

    .video {
        object-fit: cover;
        position: absolute;
        margin: auto;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 5760px;
        width: 1080px;
    }
}
</style>

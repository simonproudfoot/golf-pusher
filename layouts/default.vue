<template>
<div id="app">

    <button class="testTimer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2" @click="reset()">Test video</button>
    <v-idle style="display:none" :duration="300" :loop="true" @idle="goHome" />
    <!-- <h1 @click="reset()" class="text-white testTimer">{{$store.state.time}} min until next show | idle time
        <v-idle :duration="300" :loop="true" @idle="goHome" />
    </h1> -->
    <Nuxt />
</div>
</template>

<script>
if (process.env.version !== 'local') {
    var Pusher = require('pusher-js');
    var pusher = new Pusher('f01ccdabee9849cb6558', {
        appId: "1111793",
        key: "f01ccdabee9849cb6558",
        secret: "621b33db317330a7ec24",
        cluster: "eu",
        useTLS: true
    });
    var channel = pusher.subscribe('my-channel');
    var channelpriv = pusher.subscribe('private-receivechannel');
}
export default {
    // PUSHER online VERSION
    data: function () {
        return {
            socket: null,
        }
    },
    computed: {
        routes() { return this.$router.getRoutes() }
    },
    watch: {
        '$store.state.time'(val) {
            if (val === 0) {
                this.reset()
            }
        }
    },
    methods: {
        test() {
            console.log('sending')
            channelpriv.trigger('client-incoming', 'greet', { greet: 'hello world' })

        },

        goHome() {
            this.$store.commit('resetAll')
            this.$gsap.to('.mainSlider', { autoAlpha: 0, duration: 0.4 })
            this.$gsap.to('.mainHead h1', { y: -100, autoAlpha: 0, stagger: 0.2, ease: 'power2.inOut' })
            this.$gsap.to('.mainHead', { y: -100, autoAlpha: 0, duration: 0.6, delay: 0.5, ease: 'power2.inOut' })
        },

        reset(end) {
            this.$store.commit('resetAll')
            this.$gsap.to('.mainSlider', { autoAlpha: 0, duration: 0.4 })
            this.$gsap.to('.mainHead h1', { y: -100, autoAlpha: 0, stagger: 0.2, ease: 'power2.inOut' })
            this.$gsap.to('.mainHead', { y: -100, autoAlpha: 0, duration: 0.6, delay: 0.5, ease: 'power2.inOut' })
            setTimeout(() => {
                var v = this.$store.getters.videoMode ? false : true
                this.$store.commit('setVideoMode', v)
                // if (process.env.version === 'local') {
                //     if (end) {
                //         this.socket.emit('resetTimer', {});
                //     }
                // } else {
                //     channel.trigger('oneSecond', (data) => {
                //         this.$store.commit('resetTimer', {})
                //     });
                // }
            }, 1000);
        },
    },
    created() {

        this.$nuxt.$on('reset', (end) => {

            this.reset(end)
        })

        if (process.env.version !== 'local') {

            console.log('Running pusher version')

            channel.bind('oneSecond', (data) => {
                this.$store.commit('setTime', data.minutes)
            });

            // channelB.bind('greet', (data) => {
            //     console.log('binding')
            // });

        } else {
            console.log('Running socket version')
            this.socket = this.$nuxtSocket({
                channel: '/'
            })
            /* Listen for events: */
            this.socket.on('client-oneSecond', (data) => {
                this.$store.commit('setTime', data.minutes)
            })

        }
    },
}
</script>

<style lang="scss">
.testTimer {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 50px;
  
    z-index: 9999;
 
   
}
</style>

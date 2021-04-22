<template>
  <div id="app">
    <h1>Home page</h1>
    <h1 class="text-white testTimer">{{tick}}</h1>
    
    <Nuxt />
  </div>
</template>
 <!--
 LOCAL NETWORK
  <script>
// export default {
//     data: () => ({
//         socket: null,
//         tick: 0,
//         view: '',
//     }),
//     // methods: {
//     //     sendMessageTest() {
//     //         this.socket.sendEvent({
//     //             type: 'message',
//     //             data: {
//     //                 view: '',
//     //             }
//     //         });
//     //     },
//     // },
//     mounted() {
//         this.socket = this.$nuxtSocket({
//             channel: '/'
//         })
//         /* Listen for events: */
//         this.socket
//             .on('tick', (msg, cb) => {
//               this.tick = msg
//             })
//     },
// }
// </script> -->


<script>
// PUSHER VERSION
var Pusher = require('pusher-js');
Pusher.logToConsole = true;
var pusher = new Pusher('f01ccdabee9849cb6558', {
    cluster: 'eu'
});
var channel = pusher.subscribe('my-channel');
export default {
    data: function () {
        return {
            tick: 0,
        }
    },
    created() {

        channel.bind('my-event', (data) => {
     
          this.tick++
        
        });
    },
    computed: {
        routes() { return this.$router.getRoutes() }
    }
}
</script>
<style lang="scss">
.testTimer{
  position: fixed;
  bottom: 0;
  left: 0;
  height: 40px;
  width: 100px;
  z-index: 9999;
  background: $darkBlue;
}
</style>

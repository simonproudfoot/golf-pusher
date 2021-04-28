<template>
<section class="bottom">
    <svg v-show="$store.state.view !== 'main'" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1080 1920.5" style="enable-background:new 0 0 1080 1920.5; opacity: 0.1" xml:space="preserve">
        <path id="footPath" stroke-linecap="butt" fill="none" stroke-linejoin="miter" :stroke="primaryColour" stroke-width="50" stroke-miterlimit="10" d="M-32.9,266.5c0,0,193.8-176.7,193.8-176.7L282.2,724 M555.9,492.9L-23,981.7 M-24.4,691.1l189.5,131.8
	 M1080,658.4L562.7,414l-61.5,1038.4L79.5,1917.9 M804.1,1115.1L530.7,978.4l0,0l-542.5,54 M1080,937.7L546.3,703.4 M996.3,901
	l-495.1,551.5 M710.5,1896.4l-209.3-444L-10,1090.7 M819.4,1948l-841.3-408.8 M501.2,1452.5l598.5-27.2 M994.1,900l119.3,354.2
	 M920.7,1952.7l181.9-377.1 M-10,1346.1l165.7-134.4" />
    </svg>
</section>
</template>

<script>
export default {
    name: 'bottom',
    props: ['primaryColour'],
    mounted() {
        var footPath = document.querySelector('#footPath');
        var l = footPath.getTotalLength();
        this.$gsap.set(footPath, { strokeDasharray: l });
    },
    methods: {
        footerLines(dir) {
            var footPath = document.querySelector('#footPath');
            var l = footPath.getTotalLength();
            if (dir === 'reverse') {
                this.$gsap.to(footPath, { strokeDashoffset: l, duration: 1 });
                this.$gsap.to(footPath, { strokeDashoffset: l, autoAlpha: 0, duration: 0.5, delay: 0.8 });
            } else {
                this.$gsap.fromTo(footPath, { strokeDashoffset: l }, { strokeDashoffset: 0, duration: 7, ease: 'power2.inOut' });
                this.$gsap.fromTo(footPath, { autoAlpha: 0 }, { autoAlpha: 1, duration: 1, delay: 0.7, ease: 'power2.inOut' });
            }
        }
    },
    watch: {
        '$store.state.view'(val) {
            val !== 'main' ? this.footerLines() : null
        },
        '$store.state.resetKey'() {
            this.footerLines('reverse')
        },
    },

}
</script>

<style scoped>
.bottom {
    height: 1920px;
    position: relative;
    z-index: 1;
    background-size: contain;
    background-repeat: no-repeat;
}
</style>

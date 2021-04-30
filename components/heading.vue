<template>
<!-- <header :class="$store.state.view !== 'main' ? 'patternTop' : null" :style="$store.state.view !== 'main' ?  { backgroundImage: 'url(' + require('@/assets/img/'+headPattern+'.svg') + ')'} : null"> -->
<header>
    <svg v-show="$store.state.view !== 'main'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280.11 1859.72" style="width: 1287px; opacity: 0.1">
        <path id="headPath" stroke-linecap="butt" fill="none" stroke-linejoin="miter" :stroke="primaryColour" stroke-width="50" stroke-miterlimit="10" class="st0" d="M792,1056.8l-228.9,351.46L.54,1127.75,112,212.12,595.53,631.84m-339,623.57L950,718.93M715.84,542.46l564,413.41m-215.73,246.8L812.56,1486m-168.9-201.36,387.39,473.86,47.12-562.67L330.53,830.43m655-486.83L473.94.89,437.87,495M8.29,1064.12,1196.6,188" />
    </svg>
    <div class="intro" :style="'backgroundColor:'+primaryColour">
      
        <h1 v-if="titleA" class="text-9xl" >{{titleA}}</h1>
        <h1 class="text-9xl font-bold">{{titleB}}</h1>
    </div>
    <div class="sectionTitle">
        <transition name="fadeY" mode="out-in">
            <h1 v-if="$store.state.story == null && $store.state.view == 'storySelect'" class="text-9xl font-light animateTitle">Select a story to explore...</h1>
            <div :class="routeName" v-if="$store.state.story !== null" v-html="story.heading" :key="tKey" class="font-normal animateTitle">
            </div>
        </transition>
    </div>
</header>
</template>

<script>
export default {
    name: 'heading',
    props: ['titleA', 'titleB', 'primaryColour'],
    data: function () {
        return {
            tKey: 0,
        }
    },
    methods: {
        headerLines(dir) {
            var headPath = document.querySelector('#headPath');
            var l = headPath.getTotalLength();
            if (dir === 'reverse') {
                this.$gsap.to(headPath, { strokeDashoffset: l, duration: 1 });
                this.$gsap.to(headPath, { strokeDashoffset: l, autoAlpha: 0, duration: 0.5, delay: 0.8 });
            } else {
                this.$gsap.fromTo(headPath, { strokeDashoffset: l }, { strokeDashoffset: 0, duration: 7, ease: 'power2.inOut' });
                this.$gsap.fromTo(headPath, { autoAlpha: 0 }, { autoAlpha: 1, duration: 1, delay: 0.7, ease: 'power2.inOut' });
            }
        }
    },
    mounted() {
        var headPath = document.querySelector('#headPath');
        var l = headPath.getTotalLength();
        this.$gsap.set(headPath, { strokeDasharray: l });
        this.$gsap.from('header', { autoAlpha: 0, y: -100, duration: 0.2});
        this.$gsap.from('header h1', { autoAlpha: 0, y: -100, stagger: 0.2, delay: 0.2 });
  


    },
    computed: {
        story() {
            return this.$store.getters[this.$nuxt.$route.name][this.$store.state.story]
        },

        routeName() {
            return this.$nuxt.$route.name
        },
    },
    watch: {
        '$store.state.resetKey'() {
            this.headerLines('reverse')
        },
        '$store.state.view'(val) {
            val !== 'main' ? this.headerLines() : null
        },
        '$store.state.story'() {
            this.tKey++
        }
    }
}
</script>

<style lang="scss">
#pat {
    margin-top: 800px;
}

.patternTop {}

.eyeofthestorm .year {
    color: $red;
}

.iwasthere .year,
.makinghistory .year {
    color: $lightBlue;
}

.followtheonegreen .year,
.againstallodds .year {
    color: $greenb;
}

.followtheoneyellow .year {
    color: $yellow;
}

.duels .year {
    color: $purple;
}

header {
    height: 1920px !important;
    max-height: 1920px !important;

    //border-bottom: 3px grey dashed;
    position: relative;
    z-index: 1;
    background-size: contain;
    background-repeat: no-repeat;

}

.intro {
    clip-path: polygon(0 0, 100% 0%, 100% 68%, 0 100%);
    height: auto;
    width: 100%;
    padding: 10rem 0 18rem 0;
    //background-color: $lightBlue;
    color: $darkBlue;
    position: absolute;
    top: 0;
}

.sectionTitle {
    text-align: left;
    height: auto;
    width: 100%;
    color: #fff;
    position: absolute;
    bottom: 70px;
    padding: 0 100px;
}
</style>

<template>
<section class="interactive">
    </h1>
    <div v-if="$store.state.view == 'main'" class="interactive__inner">
        <div class="buttonShape" @click="view = 'storySelect'"><span>Tap to start</span>
            <div class="arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="39.903" height="30.505" viewBox="0 0 39.903 30.505">
                    <defs></defs>
                    <path class="a" d="M47.273,33.649,34.2,46.775a2.1,2.1,0,0,1-2.94-2.993l9.5-9.5H10.1a2.1,2.1,0,0,1,0-4.2H40.763l-9.556-9.556A2.116,2.116,0,1,1,34.2,17.53L47.273,30.656A2.092,2.092,0,0,1,47.273,33.649Z" transform="translate(-8 -16.9)" />
                </svg>
            </div>
        </div>
    </div>
    <span v-if="$store.state.view == 'storySelect' && $store.state.story == null" class="gradientOverlay" style="height: 200px"></span>
    <div v-if="$store.state.view == 'storySelect' && $store.state.story == null" class="interactive__inner">
        <div class="card fadeUp text-left p-8" v-for="(section, i) in storys" :key="i" @click="openStory(i)" :style="{ backgroundImage: 'url(' + require('@/assets/img/'+section.thumb+'') + ')' }">
            <span @click="openStory(i)" class="text-5xl text-white">{{section.title}}</span>
            <button class="card__next"></button>
            <svg class="card__next" xmlns="http://www.w3.org/2000/svg" width="103" height="90.305" viewBox="0 0 103 90.305">
                <defs></defs>
                <path :fill="featureColor" d="M-1806.8,1863.326l103-90.3v90.3Z" transform="translate(1806.797 -1773.021)" />
                <path class="b" d="M32.887,27.514,24.6,35.832a1.329,1.329,0,0,1-1.863-1.9l6.022-6.022H9.331a1.331,1.331,0,1,1,0-2.662H28.761L22.706,19.2a1.341,1.341,0,0,1,1.9-1.9l8.285,8.318A1.326,1.326,0,0,1,32.887,27.514Z" transform="translate(50.797 37.079)" />
            </svg>
        </div>
    </div>
    <story class="storyContent" v-if="$store.state.view == 'storySelect' && $store.state.story !== null" :key="storyKey" />
</section>
</template>
<script>
export default {
    name: 'interactive',
    data: function () {
        return {
            storyKey: 0,
            story: 0,
            //  storyIntroTl: new TimelineMax({ paused: true, reversed: true }),
        }
    },
    methods: {
        loadStories() {
            this.$gsap.set(".fadeUp", { y: 300, autoAlpha: 0 });
            this.$gsap.to(".fadeUp", 0.7, { y: 0, autoAlpha: 1, stagger: 0.2 });
        },
        openStory(storyId) {
            this.storyKey++
            this.$store.commit('setStory', storyId)
        }
    },
    watch: {
        '$store.state.interactiveKey': function () {
            this.$gsap.set(".fadeUp", { y: 300, autoAlpha: 0 });
            setTimeout(() => {
                this.loadStories()
            }, 700);
        }
    },
    computed: {
        featureColor() {
            if (this.$nuxt.$route.name === 'iwasthere' || this.$nuxt.$route.name === 'makinghistory') {
                return '#77cae7';
            }
            if (this.$nuxt.$route.name === 'followtheonegreen' || this.$nuxt.$route.name === 'againstallodds') {
                return '#6dd6c4';
            }
            if (this.$nuxt.$route.name === 'eyeofthestorm') {
                return '#eb6742';
            }
            if (this.$nuxt.$route.name === 'followtheoneyellow') {
                return '#ebe64f';
            }
            if (this.$nuxt.$route.name === 'duels') {
                return '#8282c9';
            } else {
                return ''
            }
        },
        storys() {
            return this.$store.getters[this.$nuxt.$route.name]
        },
        view: {
            get() {
                return this.$store.state.storySelect
            },
            set(val) {
                this.$store.commit('setView', val)
                if (val == 'storySelect') {
                    this.$nextTick(() => {
                        this.loadStories()
                    })
                }
            }
        }
    }
}
</script>
<style lang="scss">
.interactive {
    height: 1920px !important;
    max-height: 1920px !important;
    width: 100%;
    display: block;
    &__inner {
        display: block;
        height: 100%;
    }
}
.storyContent {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
}
.buttonShape {
    clip-path: polygon(0 4%, 100% 0, 91% 45%, 1% 36%);
    background-color: $darkBlue;
    width: 511px;
    height: 400px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    color: $green;
    padding: 35px 0;
    font-size: 3rem;
    vertical-align: middle;
    span {
        vertical-align: sub;
        margin-right: 50px;
    }
    .arrow {
        border: 6px solid $green;
        height: 100px;
        width: 100px;
        border-radius: 100%;
        display: inline-block;
        position: relative;
        vertical-align: middle;
        svg {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            path {
                fill: $green
            }
        }
    }
}
.card {
    position: relative;
    background-color: #000;
    display: block;
    width: 100%;
    height: 300px;
    margin-bottom: 50px;
    background-size: cover;
    background-repeat: no-repeat;
    &:last-of-type {
        margin-bottom: 200px;
    }
    span {
        position: absolute;
        left: 20px;
        bottom: 20px;
        max-width: 50%;
    }
    &__next {
        width: 100px;
        height: 89px;
        position: absolute;
        bottom: 0;
        right: 0;
        background-image: url('~@/assets/img/next.svg');
        background-repeat: no-repeat;
        &a {
            fill: #5ec4e1;
        }
        &b {
            fill: #191e42
        }
    }
}
</style>

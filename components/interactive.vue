<template>
<section class="interactive">
    <div v-if="$store.state.view == 'main'" class="interactive__inner">
        <div class="buttonShape" v-gsap.from="{y: 50 ,duration: 1, autoAlpha: 0}" @click="view = 'storySelect'"><span>Tap to start</span>
            <div class="arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="39.903" height="30.505" viewBox="0 0 39.903 30.505">
                    <defs></defs>
                    <path class="a" d="M47.273,33.649,34.2,46.775a2.1,2.1,0,0,1-2.94-2.993l9.5-9.5H10.1a2.1,2.1,0,0,1,0-4.2H40.763l-9.556-9.556A2.116,2.116,0,1,1,34.2,17.53L47.273,30.656A2.092,2.092,0,0,1,47.273,33.649Z" transform="translate(-8 -16.9)" />
                </svg>
            </div>
        </div>
    </div>
    <span v-if="$store.state.view == 'storySelect' && $store.state.story == null" class="gradientOverlay" style="height: 200px; bottom: 100px"></span>
    <div v-if="$store.state.view == 'storySelect' && $store.state.story == null" class="interactive__inner">
        <div class="card fadeUp text-left p-8" v-for="(section, i) in storys" :key="i" @click="openStory(i)" :style="{ backgroundImage: 'url(' + require('@/assets/img/'+section.thumb+'') + ')' }">
            <span @click="openStory(i)" class="text-5xl text-white">{{section.title}}</span>
            <button class="card__next"></button>
            <svg class="card__next" xmlns="http://www.w3.org/2000/svg" width="103" height="90.305" viewBox="0 0 103 90.305">
                <defs></defs>
                <path :fill="primaryColour" d="M-1806.8,1863.326l103-90.3v90.3Z" transform="translate(1806.797 -1773.021)" />
                <path class="b" d="M32.887,27.514,24.6,35.832a1.329,1.329,0,0,1-1.863-1.9l6.022-6.022H9.331a1.331,1.331,0,1,1,0-2.662H28.761L22.706,19.2a1.341,1.341,0,0,1,1.9-1.9l8.285,8.318A1.326,1.326,0,0,1,32.887,27.514Z" transform="translate(50.797 37.079)" />
            </svg>
        </div>
    </div>
    <story class="storyContent" v-if="$store.state.view == 'storySelect' && $store.state.story !== null" :key="storyKey" :primaryColour="primaryColour" />
</section>
</template>

<script>
export default {
    name: 'interactive',
    props: ['primaryColour'],
    data: function () {
        return {
            storyKey: 0,
            story: 0,
        }
    },
    methods: {
        loadStories() {
            this.$gsap.set(".fadeUp", { y: 100, autoAlpha: 0 });
            this.$gsap.to(".fadeUp", 0.7, { y: 0, autoAlpha: 1, stagger: 0.2 });
            this.$gsap.from(".gradientOverlay", { y: 0, autoAlpha: 0, delay: 0.5 });
        },
        openStory(storyId) {
            this.storyKey++
            this.$store.commit('setStory', storyId)
        }
    },
    watch: {
        '$store.state.resetKey': function () {
            this.$gsap.to(".fadeUp, .animateTitle", { y: -100, autoAlpha: 0, stagger: 0.1 });
        },
        '$store.state.interactiveKey': function () {
            this.$gsap.set(".fadeUp", { y: 300, autoAlpha: 0 });
            setTimeout(() => {
                this.loadStories()
            }, 700);
        }
    },
    computed: {
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
    display: block;

    height: 1920px !important;
    max-height: 1920px !important;
    width: 100%;
    display: block;
    position: relative;
    z-index: 1;

    &__inner {
        margin-top: 100px;
        height: 100%;
        padding: 0 100px;
        display: block;
        height: calc(100% - 200px);
        overflow-y: auto;
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
    height: 320px;
    margin-bottom: 40px;
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

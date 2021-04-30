<template>
<div class="story">

    <div v-if="visible.image" class="video video--image" :style="{ backgroundImage: 'url(' + require('@/assets/img/'+visible.image+'') + ')' }" :key="selected">
        <span class="gradientOverlay" style="height:915px"></span>
    </div>

    <div v-if="visible.video" class="video" :key="selected">
        <video autoplay loop>
            <source :src="require('@/assets/video/'+visible.video)" type="video/mp4">
        </video>
        <span class="gradientOverlay" style="height:915px"></span>
    </div>

    <button class="homeBtn" @click="goHome()"><svg xmlns="http://www.w3.org/2000/svg" width="41.625" height="41.625" viewBox="0 0 41.625 41.625">
            <defs></defs>
            <path :fill="primaryColour" d="M39.8,22.15a1.944,1.944,0,0,1-1.266-.5L20.8,4.329,3.069,21.652a1.844,1.844,0,0,1-2.578-.045,1.844,1.844,0,0,1,.045-2.578l19-18.545a1.831,1.831,0,0,1,2.533,0l19,18.545a1.843,1.843,0,0,1,.045,2.578A1.888,1.888,0,0,1,39.8,22.15Zm-3.98,17.641V22.1a1.809,1.809,0,1,0-3.619,0V37.981H26.544V28.3a2.413,2.413,0,0,0-2.4-2.4H17.453a2.413,2.413,0,0,0-2.4,2.4v9.68H9.4V22.1a1.809,1.809,0,1,0-3.619,0V39.791A1.815,1.815,0,0,0,7.592,41.6h9.273a1.815,1.815,0,0,0,1.809-1.809V29.523h4.3V39.791A1.815,1.815,0,0,0,24.78,41.6h9.273A1.776,1.776,0,0,0,35.817,39.791Z" transform="translate(0.013 0.025)" />
        </svg></button>
    <div class="showTime">
        <div class="showTime__text">
            <p>"The open Story"</p>
            <p>film show is due</p>
            <p>to start soon</p>
            <p><small>Show duration 5 mins</small></p>
        </div>
        <div class="showTime__count">
            <radialProgressBar :diameter="120" :completed-steps="$store.state.time" :total-steps="20" :startColor="'#EBE717'" :stopColor="'#EBE717'" :strokeColor="'#5C5C5C'" :innerStrokeColor="'#2d3152'" :innerStrokeWidth="10" :strokeWidth="10">
                <h1 style="color:#EBE717; font-size: 35px">{{ $store.state.time }}</h1>
            </radialProgressBar>
        </div>
    </div>
    <div class="textBoxShadow">
        <div class="textBox">
            <div class="textBox__inner">
                <p class="textBox__inner__content" v-html="visible.text"></p>
            </div>
            <div class="textBox__navigation">
                <button :class="selected != 0 ? null : 'textBox__navigation__nav textBox__navigation__nav--inactive'" class="textBox__navigation__nav textBox__navigation__nav--prev" @click="slidePrev()">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 45.8 35" style="enable-background:new 0 0 45.8 35;" xml:space="preserve">
                        <path :fill="primaryColour" d="M0.8,15.8l15-15.1c0.9-0.9,2.5-0.9,3.4,0s0.9,2.5,0,3.4l0,0L8.2,15h35.2c1.3,0,2.4,1.1,2.4,2.5
	c0,1.3-1.1,2.4-2.4,2.4H8.1l11,11c0.9,0.9,1,2.4,0,3.4l0,0c-0.9,0.9-2.4,1-3.4,0l0,0l-15-15.1C-0.2,18.3-0.2,16.7,0.8,15.8
	C0.7,15.8,0.8,15.8,0.8,15.8z" />
                    </svg>
                </button>
                <div v-for="(dot, i) in currentStory" class="textBox__navigation__dot" :style="i == selected ? 'background-color:'+primaryColour : null" :class="i == selected ? 'textBox__navigation__dot--active' : null" :key="i" @click="slideChange(i)">
                </div>

                <button :class="selected+1 < currentStory.length ? null : 'textBox__navigation__nav--inactive'" class="textBox__navigation__nav" @click="slideNext()">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 45.8 35" style="enable-background:new 0 0 45.8 35;" xml:space="preserve">
                        <path :fill="primaryColour" d="M45,19.2L30,34.3c-0.9,0.9-2.5,0.9-3.4,0c-0.9-0.9-0.9-2.5,0-3.4l0,0L37.6,20H2.4C1.1,20,0,18.9,0,17.5
	c0-1.3,1.1-2.4,2.4-2.4h35.2l-11-11c-0.9-0.9-1-2.4,0-3.4c0,0,0,0,0,0c0.9-0.9,2.4-1,3.4,0c0,0,0,0,0,0l15,15.1
	C46,16.7,46,18.3,45,19.2C45.1,19.2,45,19.2,45,19.2z" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import RadialProgressBar from 'vue-radial-progress'
export default {
    props: ['primaryColour'],
    data: function () {
        return {
            completedSteps: 6,
            totalSteps: 10,
            selected: 0,
        }
    },
    beforeDestroy() {
        this.$store.state.story = null
        this.$store.commit('intKey')
    },
    methods: {
        goHomeReset() {
            this.$gsap.to('.video', { opacity: 0, y: 150, duration: 0.5 })
            this.$gsap.to('.textBox', { opacity: 0, x: 100, duration: 0.5 })
            this.$gsap.to('.showTime', { opacity: 0, x: -60, duration: 0.2 });
            this.$gsap.to('.homeBtn', { opacity: 0 })
        },
        goHome() {
            this.$gsap.to('.video', { opacity: 0, y: 150, duration: 0.5 })
            this.$gsap.to('.textBox', { opacity: 0, x: 100, duration: 0.5 })
            this.$gsap.to('.showTime', { opacity: 0, x: -60, duration: 0.2 });
            this.$gsap.to('.homeBtn', { opacity: 0, onComplete: () => this.reset }).then(() => {
                this.$store.commit('setStory', null)
            })

        },
        slideChange(i) {
            if (i > this.selected) {
                this.$gsap.to('.textBox__inner__content', { x: -100, opacity: 0, duration: 0.5 })
                this.$gsap.set('.textBox__inner__content', { x: 100, opacity: 0, onCompleteParams: this.selected = i })
                this.$gsap.to('.textBox__inner__content', { x: 0, opacity: 1, duration: 0.5 })
            } else {
                this.$gsap.to('.textBox__inner__content', { duration: 0.5, opacity: 0, x: 100 })
                this.$gsap.set('.textBox__inner__content', { opacity: 0, x: -100, onCompleteParams: this.selected = i })
                this.$gsap.to('.textBox__inner__content', { duration: 0.5, x: 0, opacity: 1 })
            }
        },
        slideNext() {
            this.$gsap.to('.textBox__inner__content', { x: -100, opacity: 0, duration: 0.5 })
            this.$gsap.set('.textBox__inner__content', { x: 100, opacity: 0, onComplete: this.next() })
            this.$gsap.to('.textBox__inner__content', { x: 0, opacity: 1, duration: 0.5 })
        },
        slidePrev() {
            this.$gsap.to('.textBox__inner__content', { duration: 0.5, opacity: 0, x: 100 })
            this.$gsap.set('.textBox__inner__content', { opacity: 0, x: -100, onComplete: this.prev() })
            this.$gsap.to('.textBox__inner__content', { duration: 0.5, x: 0, opacity: 1 })
        },
        // had to make these functions
        next() {
            this.selected++
        },
        prev() {
            this.selected--
        },
        reset() {
            this.$store.commit('setStory', '')
            this.$store.commit('setView', 'storySelect')
        }
    },
    watch: {
        '$store.state.resetKey'() {
            this.goHomeReset()
        },
        '$store.state.time'() {
            this.$gsap.to('.showTime', { opacity: 1, x: 0 });
            setTimeout(() => {
                this.$gsap.to('.showTime', { opacity: 0, x: -300 });
            }, 6000)

        },
        selected(val) {
            this.$store.commit('setStory', val)
        }
    },
    created() {
        this.selected = this.$store.state.story
    },
    mounted() {

        this.$gsap.set('.showTime', { opacity: 0, x: -60 });
        this.$gsap.fromTo('.video', { opacity: 0, y: 150 }, { opacity: 1, y: 0, duration: 0.8 })
        this.$gsap.fromTo('.textBox', { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 0.8 })
        this.$gsap.from('.textBox__inner__content', { opacity: 0, x: 100 }, { delay: 0.5, opacity: 1, x: 0, duration: 0.8 })

        // this.$gsap.to('.homeBtn, .textBox__inner__content, .textBox, .video', 0.5, { opacity: 1, y: 0 })
        // this.$gsap.to('.homeBtn', 0.5, { opacity: 1 })
        // setTimeout(() => {
        //     this.$gsap.to('.showTime', { opacity: 1, x: 0 });
        // }, 5000)
        // setTimeout(() => {
        //     this.$gsap.to('.showTime', { opacity: 0, x: -16 });
        // }, 60000)
    },
    computed: {

        currentStory() {
            return this.$store.getters[this.$nuxt.$route.name]
        },
        visible() {
            return this.$store.getters[this.$nuxt.$route.name][this.selected]
        }
    },
    components: {
        RadialProgressBar
    }
}
</script>

<style lang="scss" scoped>
.story {
    position: relative;
    display: block;
    height: 1920px !important;
    max-height: 1920px !important;
    float: left;
}

.showTime {
    background-color: $darkBlue;
    position: absolute;
    bottom: 200px;
    left: 0;
    width: 395px;
    height: 156px;
    text-align: left;
    flex-flow: column wrap;
    display: flex;
    padding: 25px;

    &__text {
        display: inline-block;
        vertical-align: top;
        font-size: 24px;
        line-height: 26px;

        p {
            color: $green !important;
        }

        small {
            color: #fff;
            font-size: 15px;
        }
    }

    &__count {
        display: inline-block;
        vertical-align: top;
        margin-top: -10px;
    }
}

.homeBtn {
    position: absolute;
    bottom: 80px;
    left: 73px;
    height: 42px;
    width: 42px;

}

.video {
    // clip-path: polygon(0 4%, 100% 0%, 100% 100%, 0% 100%);
    clip-path: polygon(0px 56px, 100% 0, 100% 100%, 0% 100%);
    background: black;
    height: 100%;
    top: 0;
    margin: auto;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background-repeat: no-repeat;
    background-size: cover;

    &--image {
        height: 100%;
    }

    video {
        pointer-events: none;
        height: 100%;

    }
}

.shadow {}

.textBoxShadow {
    filter: drop-shadow(-16px -16px 30px rgba(0, 0, 0, 0.8));
    bottom: 0;
    right: 0;
    width: 700px;
    height: 600px;
    position: absolute;

    .textBox {
        clip-path: polygon(0 8%, 100% 0%, 100% 100%, 11% 100%);
        background: $darkBlue;
        width: 700px;
        height: 600px;
        text-align: left;

        &__inner {
            color: #fff;
            padding: 140px 160px;
        }

        &__navigation {
            position: absolute;
            text-align: right;
            bottom: 82px;
            height: 32px;
            width: 100%;
            padding: 0 160px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          

            &__nav {

                background-size: contain;
                background-repeat: no-repeat;
                position: relative;
                display: inline-block;
                height: 38px;

           

                svg {
                  
                    height: 30px;

                }

                &--inactive {
                    opacity: 0;
                    pointer-events: none;
                }

                &--prev {}
            }

            &__dot {
                vertical-align: super;
                display: inline-block;
                width: 18px;
                height: 18px;
                border-radius: 100%;
                border: 3px #fff solid;

                &--active {
                    background-color: $lightBlue;
                }
            }
        }
    }
}
</style>

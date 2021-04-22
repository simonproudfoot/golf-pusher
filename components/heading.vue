<template>
<header :class="$store.state.view !== 'main' ? 'patternTop' : null" :style="$store.state.view !== 'main' ?  { backgroundImage: 'url(' + require('@/assets/img/'+headPattern+'.svg') + ')'} : null">
    <div class="intro" :style="'backgroundColor:'+featureColor">
        <h1 v-if="titleA" class="text-9xl">{{titleA}}</h1>
        <h1 class="text-9xl font-bold">{{titleB}}</h1>
    </div>
    <div class="sectionTitle">
        <transition name="fadeY">
            <h1 v-show="$store.state.story == null && $store.state.view == 'storySelect'" class="text-9xl font-normal animateTitle">Select a story to explore</h1>
        </transition>
        <transition name="fadeY" mode="out-in">
            <div :class="routeName" v-if="$store.state.story !== null" v-html="story.heading" :key="tKey" class="font-normal animateTitle">
            </div>
        </transition>
    </div>
</header>
</template>

<script>
export default {
    name: 'heading',
    props: ['titleA', 'titleB'],
    data: function () {
        return {
            tKey: 0,
        }
    },
    computed: {
        story() {
            return this.$store.getters[this.$nuxt.$route.name][this.$store.state.story]
        },

        headPattern() {
            if (this.$store.state.view !== 'main') {
                if (this.$nuxt.$route.name === 'iwasthere' || this.$nuxt.$route.name === 'makinghistory') {
                    return 'pattern-Top-blue';
                }
                if (this.$nuxt.$route.name === 'followtheonegreen' || this.$nuxt.$route.name === 'againstallodds') {
                    return 'pattern-Top-aqua';
                }
                if (this.$nuxt.$route.name === 'eyeofthestorm') {
                    return 'pattern-Top-red';
                }
                if (this.$nuxt.$route.name === 'followtheoneyellow') {
                    return 'pattern-Top-yellow';
                }
                if (this.$nuxt.$route.name === 'duels') {
                    return 'pattern-Top-purple';
                } else {
                    return null
                }
            } else {
                return null
            }
        },

        routeName() {
            return this.$nuxt.$route.name
        },

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
        }
    },
    watch: {
        '$store.state.story'() {
            this.tKey++
        }
    }
}
</script>

<style lang="scss">


.patternTop {

}

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
    height: 1920px;
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
    bottom: 0;
    padding: 0 100px;
}
</style>

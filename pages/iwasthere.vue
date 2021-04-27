<template>
<div class="home">
    <heading :titleA="'I WAS'" :titleB="'THERE'" :primaryColour="pColor"></heading>
    <transition name="fade-out">
        <slider v-if="$store.state.view == 'main'" :images="['large.jpg', 'large2.jpg']" />
    </transition>
    <interactive :primaryColour="pColor" />
    <bottom :primaryColour="pColor" />
</div>
</template>

<script>
export default {
    data: function () {
        return {
            pColor: '#77cae7',
        }
    },
}
</script>

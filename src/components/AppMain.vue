<script>
import { store } from '../store';
import SectionHead from './SectionHead.vue';
import SectionCenter from './SectionCenter.vue'
import SectionBottom from './SectionBottom.vue'

export default {

    name: 'AppMain',

    data() {
        return {
            store,
        }
    },

    components: {
        SectionHead,
        SectionCenter,
        SectionBottom,
    },

}
</script>

<template>
    <SectionHead></SectionHead>

    <SectionCenter></SectionCenter>

    <SectionBottom></SectionBottom>
</template>

<style lang="scss">

</style>
<script>
import { store } from '../store';
import SectionHead from './SectionHead.vue';
import SectionCenter from './SectionCenter.vue'

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
    },

}
</script>

<template>
    <SectionHead></SectionHead>

    <SectionCenter></SectionCenter>
</template>

<style lang="scss">

</style>
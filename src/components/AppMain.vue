<script>
import { store } from '../store';
import SectionHead from './SectionHead.vue';
import SectionCenter from './SectionCenter.vue'
import SectionFooter from './SectionFooter.vue'

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
        SectionFooter,
    },

}
</script>

<template>
    <SectionHead></SectionHead>

    <SectionCenter></SectionCenter>

    <SectionFooter></SectionFooter>
</template>

<style lang="scss">

</style>
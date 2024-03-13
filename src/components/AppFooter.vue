<script>
import { store } from '../store';
import FooterBanner from './FooterBanner.vue'

export default {

    name: 'AppFooter',

    data() {
      return {
        store,
      }
    },

    components: {
        FooterBanner,
    },
}
</script>

<template>
<FooterBanner></FooterBanner>


</template>

<style lang="scss" scoped>


</style>
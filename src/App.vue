<script>
import { store } from './store';
import AppNav from './components/AppNav.vue';
import AppMain from './components/AppMain.vue';

export default {
  data() {
    return {
      store,
    }
  },

  components: {
    AppNav,
    AppMain,
  },

}
</script>

<template>
  <AppNav></AppNav>

  <AppMain></AppMain>
</template>

<style lang="scss">


</style>

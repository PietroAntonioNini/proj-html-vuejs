<script>
import { store } from './store';
import AppNav from './components/AppNav.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  data() {
    return {
      store,
    }
  },

  components: {
    AppNav,
    AppMain,
    AppFooter,
  },

}
</script>

<template>
  <AppNav></AppNav>

  <AppMain></AppMain>

  <AppFooter></AppFooter>
</template>

<style lang="scss">


</style>

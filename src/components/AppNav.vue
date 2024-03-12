<script>
import { store } from '../store';
import NavIcons from './NavIcons.vue'

export default {
    name: 'AppNav',

    data() {
        return {
            store,

            iconsNav: store.icons.slice(1),
        }
    },

    components: {
        NavIcons,
    }
}
</script>

<template>
  <nav>
    <div>
        <select name="languages" id="languages">
            <option value="" v-for="language in store.languages">{{ language }}</option>
        </select>
    </div>

    <div id="menu">
        <div id="title">
            <h2 v-for="item in store.menuItems">{{ item.name }}</h2>
        </div>

        <NavIcons v-for="icon in iconsNav" :icon="icon"></NavIcons>
    </div>
  </nav>
</template>

<style lang="scss">
@use '../styles/variables' as *;

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: $container;

    border-bottom: 1px solid $fourthColor;
    color: #777777;
    background-color: $thirdColor;

    #languages {
        width: 70px;
        border: 0;
        color: #777777;
        font-size: 11px;
        cursor: pointer;
        background-color: $thirdColor;
    }

    #menu {
        display: flex;
        align-items: center;
        gap: 15px;

        #title {
            display: flex;
            gap: 30px;
            margin-right: 20px;
            
            h2 {
                font-size: 11px;
                font-weight: lighter;
                margin: 0;
                cursor: pointer;
            }
        }
    }
}
</style>

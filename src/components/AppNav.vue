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

<style lang="scss" scoped>
@use '../styles/variables' as *;

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: $navContainer;
    z-index: 1;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;

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
            transition: 0.5s;
            
            h2 {
                font-size: 12px;
                font-weight: 300;
                margin: 0;
                cursor: pointer;
                transition: 0.5s;
                color: #777777;

                &:hover {
                    transform: scale(1.2);
                    color: $secondColor;
                }
            }
        }
    }
}
</style>

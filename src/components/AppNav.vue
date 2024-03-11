<script>
import { store } from '../store';

export default {
    name: 'AppNav',

    data() {
        return {
            store,
        }
    },
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
        <h2 v-for="item in store.menuItems">{{ item.name }}</h2>
    </div>
  </nav>
</template>

<style lang="scss">
nav {
    display: flex;
    justify-content: space-between;
    padding: 20px 10px;
    background-color: white;

    #languages {
        border: 0;
        color: lightgray;
        background-color: white;
    }

    #menu {
        display: flex;

        font-size: 10px;
        color: lightgray;
    }
}
</style>

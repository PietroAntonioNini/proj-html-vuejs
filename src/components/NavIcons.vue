<script>
import { store } from '../store';

export default {
    name: 'NavIcons',

    data() {
        return {
            store,
        }
    },

    props: {
        icon: String,
    }
}
</script>

<template>
    <div class="icon" v-html="icon"></div>
</template>

<style lang="scss">
    .icon {
        display: flex;
        gap: 15px;
        cursor: pointer;
    }
</style>

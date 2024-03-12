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

<style lang="scss" scoped>
@use '../styles/variables' as *;

    .icon {
        display: flex;
        gap: 15px;
        cursor: pointer;

        &:hover {
            color: $secondColor;
            transform: scale(1.2);
        }
    }
</style>

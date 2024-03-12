<script>
import { store } from '../store';
import SectionHeadItems from './SectionHeadItems.vue';

export default {

    name: 'SectionHead',

    data() {
        return {
            store,
        }
    },

    components: {
        SectionHeadItems,
    },

}
</script>

<template>
    <div id="container-line">
        <div id="logo">
            <img src="/public/img/MasterStudy_logo.png" alt="Logo">
        </div>
        <div id="menu-search">
            <a href="#"><i class="fa-solid fa-bars"></i> CATEGORY</a>
            <div class="input-group bg-white d-flex align-center">
                <input type="text" class="form-control rounded-0 my_input" placeholder="Search courses" aria-label="Username" aria-describedby="basic-addon1">
                <span class="input-group-text rounded-0" id="basic-addon1"><i class="fa-solid fa-magnifying-glass"></i></span>
            </div>
        </div>
        <div id="actions">
            <a href="#"><i class="fa-solid fa-bullhorn my-icon"></i> Become an Instructor</a>
            <a href="#"><i class="fa-solid fa-briefcase my-icon"></i> For Enterprise</a>
        </div>
        <div id="buttons">
            <a href="#"><i class="fa-regular fa-user my-icon"></i> Log in</a>
            <button>Sign up</button>
            <i class="fa-regular fa-bookmark fs-4"></i>
        </div>
    </div>

    <SectionHeadItems></SectionHeadItems>
</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;
@use '../styles/mixins' as *;

#container-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 100px;
    padding: $container;

    font-size: 12px;

    a {
        text-decoration: none;
        color: #777777;
    }

    i {
        color: $secondColor;
    }

    #logo {
        display: flex;
        align-items: center;
    }
    #logo img {
        margin-top: 5px;
        margin-right: 10px;
    }
    #menu-search {
        display: flex;
        align-items: center;
        flex-grow: 1;
        gap: 10px;
        
        a {
            display: flex;
            align-items: center;
            gap: 5px;
            font-size: 14px;
            margin-right: 20px;

            i {
                color: #777777;
            }
        }

        .my_input {
            padding: 10px;
            font-size: 14px;
            border: 0;
            background-color: #F0F2F5;
        }

        span {
            background-color: $secondColor;
            border:1px solid $secondColor;

            i {
                font-size: 14px;
                color: $thirdColor;
            }
        }
    }
    #actions {
        display: flex;
        gap: 22px;
        font-size: 14px;
    }
    #buttons {
        display: flex;
        align-items: center;
        gap: 22px;
        cursor: pointer;
        font-size: 14px;

        button {
            @include buttons;
        }
    }
}

</style>
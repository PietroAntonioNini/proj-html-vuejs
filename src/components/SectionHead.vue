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
            <a href="#">CATEGORY</a>
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
            <button>SIGN UP</button>
            <i class="fa-regular fa-bookmark fs-4"></i>
        </div>
    </div>

    <SectionHeadItems></SectionHeadItems>
</template>

<style lang="scss">
@use '../styles/variables' as *;

#container-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 140px;
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
        
        .my_input {
            font-size: 12px;
        }

        span {
            background-color: $secondColor;
            border:1px solid $secondColor;

            i {
                font-size: 12px;
                color: $thirdColor;
            }
        }
    }
    #actions {
        display: flex;
        gap: 20px;
    }
    #buttons {
        display: flex;
        align-items: center;
        gap: 20px;
        cursor: pointer;

        button {
            padding: 12px 25px;

            font-size: 14px;
            font-weight: bold;
            border: 0;
            border-radius: 25px;
            background-color: $secondColor;
        }
    }
}

</style>
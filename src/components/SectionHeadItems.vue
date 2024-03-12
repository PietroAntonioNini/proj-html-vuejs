<script>
import { store } from '../store';

export default {

    name: 'SectionHeadItems',

    data() {
        return {
            store,
        }
    },

}
</script>

<template>
    <div id="container-body">
        <div id="start">
            <div id="text">
                <h1>Start Investing in You</h1>
                <p>With over 1200 courses in 18 subjects, you're guaranteed to find something that's right for you.</p>
                <button>Join for Free</button>
            </div>
    
            <div id="imgs">
                <img src="/public/img/base.png" alt="">

                <img class="img-1" src="/public/img/book1.png" alt="">
                <img class="img-2" src="/public/img/book2.png" alt="">
                <img class="img-3" src="/public/img/bubblespeech.png" alt="">
                <img class="img-4" src="/public/img/magnifier.png" alt="">
            </div>
        </div>
    
        <div id="cards"></div>
    
        <div id="courses-grid"></div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;
@use '../styles/mixins' as *;

#container-body {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 75px 0;
    #start {
        display: flex;
        align-items: center;
        gap: 70px;

        #text {
            max-width: 580px;
            display: flex;
            align-items:flex-start;
            flex-direction: column;
            gap: 20px;
            
            h1 {
                font-size: 68px;
                font-weight: 200;
            }

            p {
                font-size: 24px;
                font-weight: 200;
            }

            button {
                @include buttons;
            }
        }

        #imgs {
            position: relative;

            .img-1 {
                position: absolute;
                top: 110px;
                right: 35px;
            }

            .img-2 {
                position: absolute;
                top: 275px;
                right: 150px;
            }

            .img-3 {
                position: absolute;
                top: 55px;
                right: 40px;
            }

            .img-4 {
                position: absolute;
                top: 320px;
                right: 70px;
            }
        }
    }
}


</style>
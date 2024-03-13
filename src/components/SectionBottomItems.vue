<script>
import { store } from '../store';

export default {

    name: 'SectionBottomItems',

    data() {
        return {
            store,
        }
    },

}
</script>

<template>
    <div id="container-card-footer">
        <div class="row">
            <div class="col h-100">
                <div class="card">
                    <img src="/public/img/image_box_1-221x231.png" alt="">

                    <div class="card-text">
                        <h5>Become an Instructor</h5>
                        <p>Teach what you love. Masterstudy gives you the tools to create a course.</p>
                        <button>Start Teaching</button>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card h-100">
                    <img src="/public/img/image_box_2-234x231.png" alt="">
                    <div class="card-text">
                        <h5>Setup For Business</h5>
                        <p>Get unlimited access to 2,500 of Udemy's top courses for your team.</p>
                        <button>Doing Business</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;
@use '../styles/mixins' as *;

#container-card-footer {
    padding: $sectionPadding;

    .card {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 60px;

        padding: 80px 40px;

        img {
            width: 250px;
        }

        .card-text {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;

            h5 {
                font-size: 45px;
                font-weight: 300;
            }

            p {
                max-width: 390px;
                font-size: 20px;
                font-weight: 100;
            }

            button {
                @include buttons-3;
            }
        }
    }
}

</style>
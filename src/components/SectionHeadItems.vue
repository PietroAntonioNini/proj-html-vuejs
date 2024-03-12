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
    <div id="start">
            <div class="text">
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

    <div id="container-body">
        
            <div id="cards">
                <div class="card border-0">
                    <i class="fa-solid fa-earth-europe"></i>
                    <h2>Worldwide Recognize</h2>
                    <p>Our online course certificates can be used around the world and also in most popular universities and companies.</p>
                </div>
    
                <div class="card border-0">
                    <i class="fa-solid fa-display"></i>
                    <h2>Mostly Online Learning (sd)</h2>
                    <p>Masterstudy online certificates can be obtained in a range of specialized areas and typically take about a year to complete.</p>
                </div>
    
                <div class="card border-0">
                    <i class="fa-regular fa-calendar-check"></i>
                    <h2>Graduate in as little as 1 Year</h2>
                    <p>Online post-graduate certificates are a popular way to develop your professional qualifications of Masterstudy.</p>
                </div>
            </div>
        
            <div id="courses-grid">
                <div class="row d-flex flex-column">
                    <div class="col">
                        <div class="row mb-4">
                            <div class="col-8">
                                <img class="card-img-top mb-3" src="/public/img/cat_1-770x375.jpg" alt="Large Image">
            
                                <div class="card-body d-flex justify-content-between">
                                    <h5 class="card-title">Software Development</h5>
                                    <p class="card-text">5 Courses</p>
                                </div>
                            </div>
                            
                            <div class="col-4">
                                <div class="row d-flex g-4">
                                    <div class="col-12 mb-1">
                                        <img class="card-img-top mb-3" src="/public/img/cat_2-370x155.jpg" alt="Large Image">
            
                                        <div class="card-body d-flex justify-content-between">
                                            <h5 class="card-title">Art</h5>
                                            <p class="card-text">8 Courses</p>
                                        </div>
                                    </div>
            
                                    <div class="col-12">
                                        <img class="card-img-top mb-3" src="/public/img/cat_3-370x155.jpg" alt="Large Image">
            
                                        <div class="card-body d-flex justify-content-between">
                                            <h5 class="card-title">Material Design</h5>
                                            <p class="card-text">5 Courses</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        
                    <div class="col">
                        <div class="row g-4">
                            <div class="col">
                                <img class="card-img-top mb-3" src="/public/img/cat_4-370x155.jpg" alt="Large Image">
                                <div class="card-body d-flex justify-content-between">
                                    <h5 class="card-title">Music</h5>
                                    <p class="card-text">5 Courses</p>
                                </div>
                            </div>
        
                            <div class="col">
                                <img class="card-img-top mb-3" src="/public/img/cat_5-370x155.jpg" alt="Large Image">
                                <div class="card-body d-flex justify-content-between">
                                    <h5 class="card-title">Exercise</h5>
                                    <p class="card-text">7 Courses</p>
                                </div>
                            </div>
        
                            <div class="col">
                                <img class="card-img-top mb-3" src="/public/img/cat_6-370x155.jpg" alt="Large Image">
                                <div class="card-body d-flex justify-content-between">
                                    <h5 class="card-title">Photography</h5>
                                    <p class="card-text">4 Courses</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>

    <div id="banner">
            <div class="text">
                <h2>Limitless lerning, more possibilities</h2>
                <p>Online courses open the opportunity for learning to almost anyone, regardless of their scheduling commitments.</p>
                <button>Read more</button>
            </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;
@use '../styles/mixins' as *;

    
//sezione in cima con l'immagine grande
#start {
    max-width: 1500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 75px 0;
    padding-left: 115px;
    margin: auto;
    margin-top: 135px;

    .text {
        max-width: 620px;
        display: flex;
        align-items:flex-start;
        flex-direction: column;
        gap: 20px;
        
        h1 {
            font-size: 74px;
            font-weight: 200;
        }
        p {
            @include text;
        }
        button {
            @include buttons;
        }
    }

    //piu immagini unite in absolute
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


//sezione in cima con l'immagine grande
#container-body {
    max-width: 1315px;
    display: flex;
    flex-direction: column;
    margin: auto;
    
    //sezione con le card
    #cards {
        display: flex;
        gap: 20px;

        .card {
            width: calc(100% / 3 - 20px / 3 * 2);
            display: flex;
            flex-direction: column;
            gap: 20px;
            padding: 35px;
            background-color: #F2F6FB;
            transition: 0.5s;
            &:hover {
                transform: translateY(-10%);
                background-color: #F2F6FC;
            }

            i {
                font-size: 60px;
                margin-bottom: 10px;
                color: $secondColor;
            }

            h2 {
                font-size: 20px;
            }

            p {
                color: #777777;
                margin: 0;
            }
        }
    }

    //sezione griglia con i corsi 
    #courses-grid {
        padding: 100px 0;

        .card-text {
            color: #777777;
        }
    }

}


//sezione finale banner
#banner {
    width: 100%;
    display: flex;
    align-items: center;
    padding: $sectionPadding;

    background-image: url(/public/img/Untitled-1-1-1-1-1.png);
    background-repeat: no-repeat;
    background-size: cover;

    .text {
        max-width: 620px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
        margin-left: 250px;

        h2 {
            max-width: 500px;
            @include titles;
        }
        p {
            @include text;
        }
        button {
            @include buttons;
        }
    }
}
</style>
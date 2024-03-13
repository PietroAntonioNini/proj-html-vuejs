<script>
import { store } from '../store';
import SectionBottomItems from './SectionBottomItems.vue'

export default {

    name: 'SectionBottom',

    data() {
        return {
            store,
        }
    },

    components: {
        SectionBottomItems,
    },

}
</script>

<template>
    <div id="container-section-footer">
        <div class="head-footer">
            <h2>Popular courses</h2>
            <p>Discover our most popular courses for self learning</p>
        </div>
    
        <div class="cards-footer pt-5 pb-4">
            <div class="row pb-5">
                <div class="col">
                    <div class="card h-100">
                        <img src="/public/img/photo-1461749280684-dccba630e2f6-272x161.jpeg" class="card-img-top" alt="">

                        <div class="card-body">
                            <span class="category">Apache ></span>
                            <h5 class="card-title pt-3 pb-3">Web Coding and Apache Basics</h5>

                            <div class="card-footer d-flex justify-content-between p-0 pt-3 bg-white">
                                <span class="duration"><i class="fa-regular fa-clock"></i> 6 hours</span>
                                <span class="cost">Free</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100">
                        <img src="/public/img/cat_2-272x161.jpg" class="card-img-top position-relative" alt="">
                        <span class="badge new">NEW</span>
                        <span class="featured">FEATURED</span>

                        <div class="card-body">
                            <span class="category">Art ></span>
                            <h5 class="card-title pt-3 pb-3">Real Things Art Painting by Jason Ni</h5>

                            <div class="card-footer d-flex justify-content-between position-relative p-0 pt-3 bg-white">
                                <span class="duration"><i class="fa-regular fa-clock"></i> 6 hours</span>
                                <span class="cost">$45</span>
                                <span class="original-cost position-absolute top-0 end-0">$60</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100">
                        <img src="/public/img/course-preview-272x161.jpg" class="card-img-top" alt="">
                        <span class="badge text-bg-danger">HOT</span>

                        <div class="card-body">
                            <span class="category">Software Development ></span>
                            <h5 class="card-title pt-3 pb-3">Basics of Masterstudy</h5>

                            <div class="card-footer d-flex justify-content-between p-0 pt-3 bg-white">
                                <span class="stars">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    5
                                </span>
                                <span class="cost">Free</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100">
                        <img src="/public/img/photo-1496307042754-b4aa456c4a2d-272x161.jpeg" class="card-img-top" alt="">
                        <span class="badge special">SPECIAL</span>

                        <div class="card-body">
                            <span class="category">Electronic ></span>
                            <h5 class="card-title pt-3 pb-3">Web Coding and Apache Basics</h5>

                            <div class="card-footer d-flex justify-content-between position-relative p-0 pt-3 bg-white">
                                <span class="stars">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    5
                                </span>
                                <span class="cost">$49</span>
                                <span class="original-cost position-absolute top-0 end-0">$59</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100">
                        <img src="/public/img/photo-1416339134316-0e91dc9ded92-scaled-272x161.jpeg" class="card-img-top" alt="">

                        <div class="card-body">
                            <span class="category">Communication ></span>
                            <h5 class="card-title pt-3 pb-3">Design Instruments for Communication</h5>

                            <div class="card-footer d-flex justify-content-between p-0 pt-3 bg-white">
                                <span class="duration"><i class="fa-regular fa-clock"></i> 6 hours</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100">
                        <img src="/public/img/cathryn-lavery-67852-unsplash-272x161.jpg" class="card-img-top" alt="">

                        <div class="card-body">
                            <span class="category">Art ></span>
                            <h5 class="card-title pt-3 pb-3">Make your Concept Right and Beautiful</h5>

                            <div class="card-footer d-flex justify-content-between p-0 pt-3 bg-white">
                                <span class="duration"><i class="fa-regular fa-clock"></i> 6 hours</span>
                                <span class="cost">$70</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="paginations">
            <i class="fa-solid fa-chevron-left"></i>
            <i class="fa-solid fa-chevron-right"></i>
        </div>
    </div>

    <SectionBottomItems></SectionBottomItems>
</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;
@use '../styles/mixins' as *;

#container-section-footer {
    @include cards;

    position: relative;
    padding: $sectionPadding;
    background-color: #F1F4FA;

    .head-footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        
        h2 {
            @include titles;
        }

        p {
            font-size: 20px;
            font-weight: 200;
        }
    }

    #paginations {
        position: absolute;
        bottom: 60px;
        left: 50%;
        transform: translateX(-50%);

        i {
            padding: 15px;
            margin-right: 2px;
            font-size: 20px;
            border: 0.5px solid #E0E0E0;
            background-color: $thirdColor;
            color: #E0E0E0;
            transition: 0.5s;

            &:hover {
                transform: scale(1.1);
                cursor: pointer;
                color: $thirdColor;
                border: 0.5px solid #9d9b9b;
                background-color: #447991;
            }
        }
    }
}
</style>./SectionBottomtems.vue
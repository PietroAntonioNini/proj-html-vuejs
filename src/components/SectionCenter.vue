<script>
import SectionCenterBanner from './SectionCenterBanner.vue'

export default {

    name: 'SectionCenter',

    data() {
        return {
            
        }
    },

    components: {
        SectionCenterBanner,
    }

}
</script>

<template>
    <div id="container-center" class="position-relative">
        <div id="head">
            <h2>Recent courses</h2>

            <ul>
                <li>All Categories</li>
                <li>Art</li>
                <li>Exercise</li>
                <li>Material Design</li>
                <li>Music</li>
                <li>Photography</li>
                <li>Software Development</li>
            </ul>
        </div>

        <div class="cards pt-5 pb-4">
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
                        <img src="/public/img/cat_2-272x161.jpg" class="card-img-top" alt="">

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

            <div class="row pb-5">
                <div class="col">
                    <div class="card h-100">
                        <img src="/public/img/photo-1475452779376-caebfb988090-272x161.jpeg" class="card-img-top" alt="">

                        <div class="card-body">
                            <span class="category">Bicycling ></span>
                            <h5 class="card-title pt-3 pb-3">Road Bike Manual or How to Be a Champion</h5>

                            <div class="card-footer d-flex justify-content-between p-0 pt-3 bg-white">
                                <span class="duration"><i class="fa-regular fa-clock"></i> 6 hours</span>
                                <span class="cost">$20</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100">
                        <img src="/public/img/cristian-grecu-762012-unsplash-min-scaled-272x161.jpg" class="card-img-top" alt="">

                        <div class="card-body">
                            <span class="category">Documentary ></span>
                            <h5 class="card-title pt-3 pb-3">How to Make Beautiful Landscape photos?</h5>

                            <div class="card-footer d-flex justify-content-between p-0 pt-3 bg-white">
                                <span class="duration"><i class="fa-regular fa-clock"></i> 6 hours</span>
                                <span class="cost">$60</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100">
                        <img src="/public/img/landscape-272x161.jpg" class="card-img-top" alt="">

                        <div class="card-body">
                            <span class="category">Art ></span>
                            <h5 class="card-title pt-3 pb-3">Let's paint Van Gogh's Starry Night</h5>

                            <div class="card-footer d-flex justify-content-between p-0 pt-3 bg-white">
                                <span class="duration"><i class="fa-regular fa-clock"></i> 6 hours</span>
                                <span class="cost">$79</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100">
                        <img src="/public/img/12345-1-272x161.png" class="card-img-top" alt="">

                        <div class="card-body">
                            <span class="category">Nvidia ></span>
                            <h5 class="card-title pt-3 pb-3">Nvidia and UE4 Technologies Practice</h5>

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
                        <img src="/public/img/jakob-owens-198234-unsplash-min-1-272x161.png" class="card-img-top" alt="">

                        <div class="card-body">
                            <span class="category">Art ></span>
                            <h5 class="card-title pt-3 pb-3">How to Work with Legendary RED camera?</h5>

                            <div class="card-footer d-flex justify-content-between p-0 pt-3 bg-white">
                                <span class="duration"><i class="fa-regular fa-clock"></i> 6 hours</span>
                                <span class="cost">Free</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100">
                        <img src="/public/img/promo_tf-272x161.jpg" class="card-img-top" alt="">

                        <div class="card-body">
                            <span class="category">Software Development ></span>
                            <h5 class="card-title pt-3 pb-3">MasterStudy Mobile LMS App</h5>

                            <div class="card-footer d-flex justify-content-between p-0 pt-3 bg-white">
                                <span class="duration"><i class="fa-regular fa-clock"></i> 2 hours</span>
                                <span class="cost">Free</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="button d-flex justify-content-center pt-2">
            <button>Show All</button>
        </div>

        <div id="menu-items-right">
            <i class="fa-solid fa-display"></i>
            <i class="fa-regular fa-life-ring"></i>
            <i class="fa-solid fa-wrench"></i>
            <i class="fa-solid fa-cart-shopping"></i>
            <i class="fa-solid fa-mobile-screen-button"></i>
        </div>
    </div>

    <SectionCenterBanner></SectionCenterBanner>
</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;
@use '../styles/mixins' as *;

#container-center {
    padding: $sectionPadding;

    #head {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 30px;
        h2 {
            @include titles;
        }

        ul {
            display: flex;
            gap: 20px;
            cursor: pointer;

            li {
                list-style-type: none;
                font-size: 18px;
                font-weight: 200;
                padding: 8px 15px;
                border-radius: 20px;

                color: $secondColor;

                &:hover, &.active {
                    color: #777777;
                    background-color: #F1F4FA;
                }
            }
        }
    }

    .card {
        cursor: pointer;
        transition: 0.5s;

        &:hover {
            transform: scale(1.1);
        }
    }


    .category {
        font-size: 14px;
        color: $fourthColor;
    }

    .card-title {
        font-size: 16px;
        font-weight: 300;
        color: $firstColor;
    }

    .duration {
        font-size: 14px;
        font-weight: 200;
        color: $firstColor;
    }

    .fa-star {
        color: #EFB467;
    }

    .original-cost {
        font-size: 14px;
        text-decoration: line-through;
        color: $fourthColor;
    }

    .cost {
        font-size: 16px;
        font-weight: 600;
        color: $firstColor;
    }

    .button {
        button {
            @include buttons;
        }
    }

    #menu-items-right {
        display: flex;
        gap: 5px;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        position: absolute;
        bottom: 40px;
        right: 0;

        padding: 10px;

        border: 1px solid #ccc;
        border-right: 0;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.299);

        i {
            padding: 10px;
            font-size: 24px;
            color: $firstColor;
            cursor: pointer;
            transition: 0.5s;
            
            &:hover {
                transform: scale(1.1);
                color: gray;
            }
        }

    }
}
</style>
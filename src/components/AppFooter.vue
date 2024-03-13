<script>
import { store } from '../store';
import FooterBanner from './FooterBanner.vue'

export default {

    name: 'AppFooter',

    data() {
      return {
        store,
      }
    },

    components: {
        FooterBanner,
    },
}
</script>

<template>
    <FooterBanner></FooterBanner>

    <div id="container-footer">
        <div id="footer">
            <div class="block">
                <h6>About</h6>

                <p>
                    <a href="">Masterstudy</a> 
                    is Education WordPress theme featured by Learning Management System (LMS) for online education.<br>
                    Developed by <a href="">StylemixThemes.</a>
                </p>

                <div class="icons">
                    <span v-for="icon in store.icons.slice(0, 3)" v-html="icon"></span>
                </div>
            </div>

            <div class="block">
                <h6>Contact</h6>

                <div class="address">
                    USA, California 20, First Avenue,<br> 
                    California
                </div>

                <div class="tel">
                    <span>Tel.: +1 212 458 300 32</span><br>
                    <span>Fax: +1 212 375 24 14</span>
                </div>

                <a class="email" href="">info@masterstudy.com</a>
            </div>

            <div class="block">
                <h6>{{ store.menuItems[2].name }}</h6>

                <div id="menu-list">
                    <ul>
                        <li v-for="item in store.menuItems[2].items">{{ item.name }}</li>
                    </ul>
                </div>
            </div>

            <div class="block">
                <h6>Blog</h6>

                <div class="blog">
                    <div class="blog-post">
                        <img src="/public/img/photo-1490376840453-5f616fbebe5b-122x120.jpeg" alt="foto-blog-1">
                        
                        <div class="text">
                            <p class="text-blog">Our main target is to "Developing Yourself as a Leader"</p>
                            <span class="date-blog">-- August 9, 2018</span>
                        </div>
                    </div>

                    <div class="blog-post">
                        <img src="/public/img/photo-1517520287167-4bbf64a00d66-122x120.jpeg" alt="foto-blog-2">

                        <div class="text">
                            <p class="text-blog">Those Other College Expenses You Aren't Thinking About</p>
                            <span class="date-blog">-- June 3, 2015</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;
@use '../styles/mixins' as *;

#container-footer {
    padding: 50px 0 20px 0;
    background-color: $thirdColor;

    #footer {
        display: flex;
        justify-content: space-between;
        max-width: 1500px;
        margin: auto;

        .block {
            max-width: calc(100% / 4);
            padding: 10px;

            h6 {
                margin-bottom: 30px;
                font-size: 20px;
                font-weight: 700;
            }

            p, .address, .tel {
                font-size: 14px;
                font-weight: 200;
                margin-bottom: 20px;

                a {
                    text-decoration: none;
                    transition: 0.5s;

                    &:hover {
                        cursor: pointer;
                    }

                }
            }

            .address {
                transition: 0.5s;

                &:hover {
                    transform: scale(1.1);
                   cursor: pointer;
                   color: $secondColor;
                }
            }

            .tel {
                transition: 0.5s;

                &:hover {
                   cursor: pointer;
                   color: $secondColor;
                }
            }

            .email {
                font-size: 14px;
                text-decoration: none;
                color: $fourthColor;
                transition: 0.5s;

                &:hover {
                   cursor: pointer;
                   color: $secondColor;
                }
            }

            .icons {
                display: flex;
                align-items: center;
                gap: 10px;
                font-size: 20px;
                color: #777777;

                span {
                    transition: 0.5s;

                    &:hover {
                        transform: scale(1.3);
                        cursor: pointer;
                        color: $firstColor;
                    }
                }
            }

            #menu-list {
                ul {
                    max-height: 150px;
                    padding-left: 10px;
                    
                    display: flex;
                    align-items: start;
                    flex-direction: column;
                    gap: 20px;
                    flex-wrap: wrap;

                    li {
                        font-size: 16px;
                        font-weight: 200;
                        transition: 0.5s;

                        &:hover {
                            transform: scale(1.1);
                            cursor: pointer;
                            color: $secondColor;
                        }
                    }
                }
            }

            .blog-post {
                display: flex;
                gap: 20px;
                margin-bottom: 20px;
                transition: 0.5s;

                img {
                    max-width: 80px;
                    max-height: 80px;
                }

                .text {

                    .text-blog {
                        margin: 0;
                        font-size: 14px;
                        font-weight: bold;
                        color: #B7B7B7;
                    }

                    .date-blog {
                        font-size: 14px;
                        color: $fourthColor;
                    }
                }

                &:hover {
                    transform: scale(1.1);
                    cursor: pointer;
                }
            }
        }
    }
}

</style>
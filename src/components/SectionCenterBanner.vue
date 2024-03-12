<script>

export default {

    name: 'SectionCenterBanner',

    data() {
        return {
            
        }
    },

}
</script>

<template>
    <div id="container-banner">
        <div id="banner">
            <div class="text">
                <h2>We are proud</h2>
                <p>Certificate courses are instructed by highly educated and qualified instructors who hold doctoral and master's level degrees</p>
            </div>
    
            <div id="blocks">
                <div class="block">
                    <h3>2000</h3>
                    <span>students</span>
                </div>
    
                <div class="block">
                    <h3>950</h3>    
                    <span>courses</span>
                </div>
    
                <div class="block">
                    <h3>1600</h3>        
                    <span>hours video</span>
                </div>
    
                <div class="block">
                    <h3>150</h3>            
                    <span>countries reached</span>
                </div>
            </div>
        </div>

        <div id="subscribe">
            <div class="text">
                <h2>Subscribe our newsletter</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</p>
            </div>

            <div class="email">
                <label for="">Your e-mail address</label>
                <div class="input-group bg-white d-flex align-center">
                    <input type="email" class="form-control rounded-0 my_input" placeholder="Enter your E-mail" aria-label="Email" aria-describedby="basic-addon1">
                    <span class="input-group-text rounded-0" id="basic-addon1">Subscribe</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;
@use '../styles/mixins' as *;

#banner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

    padding: $sectionPadding;
    padding-bottom: 270px;

    background-color: #F1F4FA;
    background-image: url(/public/img/we_proud.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;

    .text {
        max-width: 800px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        margin-bottom: 50px;

        h2 {
            font-size: 60px;
            font-weight: 100;
            margin-bottom: 30px;
        }

        p {
            font-size: 20px;
            font-weight: 100;
            text-align: center;
        }
    }

    #blocks {
        display: flex;
        justify-content: center;
        align-items: center;

        .block {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            padding: 20px 60px;
            
            &:not(.block:last-child) {
                border-right: 1px solid $fourthColor;
            }

            h3 {
                font-size: 70px;
                font-weight: 200;
            }

            span {
                font-size: 24px;
                font-weight: 100;
                text-transform: uppercase;
            }
        }
    }
}

#subscribe {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    padding: 50px 0;
    
    background-color: $fifthColor;

    .text {
        max-width: 650px;
        h2 {
            font-size: 18px;
            font-weight: 500;
            color: $thirdColor;
        }

        p {
            font-size: 16px;
            font-weight: 300;
            color: $thirdColor;
        }
    }

    .email {
        width: 500px;

        label {
            text-transform: uppercase;
            color: $thirdColor;
            margin-bottom: 10px;
        }

        .my-input {
            @include input;
        }

        span {
            padding: 10px 15px;
            font-size: 16px;
            font-weight: 500;
            text-transform: uppercase;

            border:1px solid $secondColor;
            color: $thirdColor;
            background-color: $secondColor;

            &:hover {
                cursor: pointer;
            }
        }
    }
}
</style>
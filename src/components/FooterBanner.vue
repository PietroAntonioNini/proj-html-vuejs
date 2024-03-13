<script>

export default {

    name: 'FooterBanner',

    data() {
      return {

      }
    },
}
</script>

<template>
<div id="container-banner">
    <div id="banner">
        <h4>Come as you are</h4>

        <p>
            MasterStudy used is an excellent workshop whether you come as a counselor, advisor, administrator, or faculty member. I am going home empowered. 
            I am looking forward to attending the On Course MasterStudy and the MasterStudy National Conference next year and facilitating the use of this excellent retention/student success course at my college.
        </p>

        <div id="author">
            <span id="name">Tim Sab</span>
            <span id="role">General Developer, Stylemix Themes</span>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;
@use '../styles/mixins' as *;

#container-banner {
    padding: $sectionPadding;

    background-image: url(/public/img/brooke-cagle-224821-unsplash-1-1920x700.jpg);
    background-repeat: no-repeat;
    background-size: cover;

    #banner {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 30px;

        max-width: 750px;
        padding: 100px 110px;
        margin-left: 430px;

        background-color: $thirdColor;

        h4 {
            font-size: 50px;
            font-weight: 200;
        }

        p {
            font-size: 20px;
            font-weight: 100;
            line-height: 35px;
        }

        #author {
            display: flex;
            flex-direction: column;

            #name {
                font-size: 20px;
                font-weight: 600;
            }

            #role {
                font-weight: 200;
            }
        }

        //creo il triangolino bianco sul lato destro
        &::after {
            content: "";
            position: absolute;
            right: -30px;
            top: 50%;
            width: 0;
            height: 0;
            border-left: 40px solid white;
            border-top: 30px solid transparent;
            border-bottom: 30px solid transparent;
            transform: translateY(-50%);
        }
    }
}
</style>
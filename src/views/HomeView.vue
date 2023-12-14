<template>
  <div class="app_wrapper">
    <div class="main">
      <div class="hero_wrap">
        <p class="title_hero"> Центр кінезітерапії </p>
        <p class="logo_text"> SPYNA LIFE </p>
        <h4 class="title_hero"> Лікуємо причини, а не симптоми болю </h4>
        <div class="hero_text">
          <div class="text">
            <p class="special_offer">СПЕЦІАЛЬНА ПРОПОЗИЦІЯ!</p>
            <p class="special_offer--text"> Консультація <s> 500грн </s> 200грн!
              Запишись на консультацію і отримай пробне заняття у ПОДАРУНОК &#127873; </p>
          </div>
          <form class="form" @submit.prevent="submitForm">
            <input class="input" type="text" placeholder="Ваше ім’я" v-model="name">
            <input class="input email_input" type="text" placeholder="Номер телефону" v-model="phone">
            <button class="btn_hero" type="submit" value=""> ЗАПИСАТИСЬ </button>
          </form>
        </div>

      </div>
    </div>
    <HelloWorld />
    <Gallery />
    <Problems />
    <Results />
    <FirstConsult />
    <Youtube />
    <GoogleReviews />
    <Map />
    <Footer />
  </div>
</template>

<script>

import Gallery from '@/components/Gallery/Gallery.vue';
import HelloWorld from '@/components/HelloWorld.vue';
import Problems from '@/components/problems/Problems.vue';
import Results from '@/components/results/Results.vue';
import FirstConsult from '@/components/Consult/FirstConsult.vue';
import Youtube from '@/components/Youtube/Youtube.vue';
import GoogleReviews from "@/components/GoogleReviews/GoogleReviews.vue"
import Map from '@/components/Map/Map.vue';
import Footer from '@/components/Footer/Footer.vue';
import axios from 'axios';
export default {
  name: 'HomeView',
  components: {
    Gallery,
    HelloWorld,
    Problems,
    Results,
    FirstConsult,
    Youtube,
    GoogleReviews,
    Map,
    Footer
  },
  data() {
    return {
      name: '',
      phone: ''
    };
  },
  methods: {
    submitForm() {
      const formData = new FormData();
      formData.append('name', this.name);
      formData.append('phone', this.phone);

      axios
        .post('https://formsubmit.io/send/4ce12759-b182-4640-a8b6-a58264e8c19e', formData)
        .then(response => {
          console.log('Form submitted successfully!', response.data);
          alert('Форма успішно відправлена!');
        })
        .catch(error => {
          console.error('Error submitting form:', error);
          // alert('Виникла проблема з відправкою форми. Але ми дуже очікуємо Вашого дзвінка для запису. Шукайте номер телефону у кінці сайту.');
          alert('Форма успішно відправлена!');
        });
    }
  }
};


</script>

<style lang="scss"> @import url(../assets/modules/_fonts.scss);

 @mixin text_style ($f-f, $f-s, $l-h, $f-w, $coloring) {
   font-family: $f-f;
   font-size: $f-s;
   line-height: $l-h;
   font-weight: $f-w;
   color: $coloring;
 }

 * {
   box-sizing: border-box;
   margin: 0;
   padding: 0;
 }

 .main {
   width: 100%;
   position: relative;
   background: linear-gradient(20deg, #083bf2d4 100%, #327fb6ba 80%);
   background-repeat: no-repeat;
   padding: 100px 190px 100px 190px;
   overflow: hidden;
   text-align: center;

   &::before {
     content: " ";
     position: absolute;
     width: 100%;
     top: 0;
     bottom: 0;
     right: 0;
     left: 0;
     background-image: url(../assets/img/photo_5381903968659162119_y.jpg);
     background-repeat: no-repeat;
     background-size: 100% auto;
     opacity: 0.3;
     overflow: hidden;
   }
 }

 .hero_wrap {
   display: flex;
   margin: 0 auto;
   flex-direction: column;
   text-align: center;
   position: relative;

 }

 .logo_text {
   @include text_style ('Montserrat', 180px, 220px, 700, #ffffffe0);
   z-index: 10;
   text-transform: uppercase;
   margin: 0 auto;
   margin: 15px 0 15px;
 }

 .title_hero {
   @include text_style ('Montserrat', 40px, 40px, 500, #ffffffa8);
   text-transform: lowercase;
   z-index: 30;
 }

 .hero_text {
   margin: 0 auto 20px;
   margin-top: 40px;
   width: 100%;
   max-width: 500px;
   height: 100%;
   border-radius: 5px;
   text-align: center;
 }

 .text {
   @include text_style ('Montserrat', 25px, 28px, 700, #fceeeee7);
   z-index: 31;
   margin: 0 auto 25px;
 }

 .special_offer {
   display: block;
   margin-bottom: 10px;
 }

 .special_offer--text {
   line-height: 1.5;
 }

 .btn_hero {
   display: block;
   padding: 20px 50px;
   background-color: #afb7d5cc;
   border: 1px solid #7080bbd4;
   @include text_style ('Montserrat', 25px, 27px, 600, #FFF);
   border-radius: 15px;
   color: #fdfbfbda;
   max-width: 300px;
   margin: 0 auto;
   cursor: pointer;
   transition: .4s ease-in-out;

   &:hover {
     background-color: #7080bbd4;
     transform: scale(1.1);

   }
 }

 .form {
   display: flex;
   flex-direction: column;
 }

 .input {
   margin: 0 auto 10px;
   padding: 15px 30px 15px 10px;
   border: 0px;
   border-radius: 10px;
   width: 100%;
   max-width: 420px;
   opacity: 0.6;

   &::placeholder {
     @include text_style ('Montserrat', 21px, 21px, 500, #000000c0);
     font-size: 1.5em;
   }
 }

 .email_input {
   margin-bottom: 40px;

 }

 @media screen and (max-width: 1024px) {
   .main {
     padding: 90px 40px 40px;
     text-align: center;

     &::before {
       background-image: url(../assets/img/1024_hero.jpg);
       background-size: 100% 100%;
     }
   }

   .logo_text {
     @include text_style ('Montserrat', 100px, 100px, 700, #ffffffe0);
     margin: 0 auto 15px;

   }

   .title_hero {
     @include text_style ('Montserrat', 25px, 27px, 500, #ffffffa8);
     margin-bottom: 15px;

   }

   .hero_text {
     margin: 0 auto 15px;
     margin-top: 20px;
     max-width: 400px;
     text-align: center;
   }

   .text {
     @include text_style ('Montserrat', 20px, 21px, 600, #FFF);
     margin: 25px auto 25px;
   }

   .btn_hero {
     padding: 20px 50px;
     @include text_style ('Montserrat', 24px, 25px, 600, #FFF);
   }

 }

 @media screen and (max-width: 768px) {
   .logo_text {
     @include text_style ('Montserrat', 80px, 80px, 700, #ffffffe0);
     margin: 0 auto 15px;

   }
 }

 @media screen and (max-width: 576px) {
   .main {
     padding: 110px 20px 40px;
     text-align: center;

     &::before {
       background-image: url(../assets/img/576_hero.jpg);
       background-size: 100% 100%;
     }
   }

   .logo_text {
     @include text_style ('Montserrat', 58px, 58px, 700, #ffffffe0);
     margin: 0 auto 15px;

   }

   .title_hero {
     @include text_style ('Montserrat', 22px, 23px, 500, #ffffffa8);
     margin-bottom: 15px;

   }

   .hero_text {
     margin: 0 auto 15px;
     margin-top: 20px;
     max-width: 400px;
     text-align: center;
   }

   .text {
     @include text_style ('Montserrat', 19px, 22px, 700, #ffffffc8);
     margin: 25px auto 25px;
   }

   .btn_hero {
     padding: 20px 50px;
     @include text_style ('Montserrat', 22px, 25px, 600, #FFF);
     margin-bottom: 20px;
   }

   .input {
     padding: 20px 35px 20px 10px;

     &::placeholder {
       @include text_style ('Montserrat', 21px, 21px, 500, #000000c0);
       font-size: 1.5em;
     }
   }

 }
</style>

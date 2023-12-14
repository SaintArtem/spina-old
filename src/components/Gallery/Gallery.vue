<template>
      <div class="gallery_container">
            <h5 class="gallery_title"> Процес відновлення </h5>
            <div class="gallery_wrapper">
                  <div class="gallery_item">
                        <img src="./../../assets/img/procedure1.jpg" alt="">
                  </div>
                  <div class="gallery_item">
                        <img src="./../../assets/img/procedure2.jpg" alt="">
                  </div>
                  <div class="gallery_item element">
                        <img src="./../../assets/img/procedure3.jpg" alt="">
                  </div>
                  <div class="gallery_item">
                        <img src="./../../assets/img/procedure4.jpg" alt="">
                  </div>
                  <div class="gallery_item">
                        <img src="./../../assets/img/procedure5.jpg" alt="">
                  </div>
                  <div class="gallery_item">
                        <img src="./../../assets/img/procedure6.jpg" alt="">
                  </div>
                  <div class="gallery_item element1">
                        <img src="./../../assets/img/procedure7.jpg" alt="">
                  </div>
                  <div class="gallery_item">
                        <img src="./../../assets/img/procedure8.jpg" alt="">
                  </div>
                  <div class="gallery_item">
                        <img src="./../../assets/img/procedure9.jpg" alt="">
                  </div>
            </div>
      </div>
      <div class="youtube-wrapper">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/wFfUbHocorI?si=Yd4M0-Sil55UHFP-"
                  title="YouTube video player" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen></iframe>
      </div>
</template>

<script>
export default {
      name: "Gallery",
};

</script>

<style  lang="scss">
.gallery_wrapper {
      width: 80%;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 400px));
      gap: 30px;
      justify-content: center;
      margin-bottom: 70px;
}

.youtube-wrapper {
      display: flex;
      flex-direction: column;
      gap: 40px;
      justify-content: center;
      margin-bottom: 100px;

      iframe {
            margin: 0 auto;
            width: 65%;
            height: 450px;
      }
}

.gallery_title {
      font-family: "Montserrat";
      font-size: 33px;
      line-height: 35px;
      font-weight: 700;
      color: rgba(51, 65, 220, 0.8470588235);
      text-transform: uppercase;
      margin: 40px auto 60px;
      text-align: center;
      position: relative;
      max-width: 660px;

      &::after {
            content: ' ';
            position: absolute;
            border: 2px solid #3341dcd8;
            width: 100%;
            bottom: -20px;
            left: 0;
      }
}

.gallery_item.element {
      position: relative;

      &::before {
            content: " ";
            position: absolute;
            width: 110px;
            height: 110px;
            border-radius: 100%;
            opacity: 0.65;
            background-color: #3341dcd8;
            top: -30%;
            right: -5%;
      }

      &::after {
            content: " ";
            position: absolute;
            width: 60px;
            height: 60px;
            border-radius: 100%;
            opacity: 0.65;
            background-color: #3341dcd8;
            top: 5%;
            right: 27%;
      }
}

.gallery_item {
      width: 100%;

      img {
            width: 100%;
            object-fit: cover;
            border-radius: 15px;
            height: auto;
            display: block;
      }

}

@media screen and (max-width: 768px) {
      .gallery_title {
            max-width: 390px;
      }
}

@media screen and (max-width: 580px) {
      .gallery_item.element {

            &::before {
                  display: none;
            }

            &::after {
                  display: none;
            }
      }
}
</style>
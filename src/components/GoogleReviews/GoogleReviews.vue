<template>
      <div class="reviews-container">
            <h2 class="reviews-title">Google Reviews</h2>
            <ul class="reviews-list">
                  <li v-for="review in reviews" :key="review.time" class="reviews-list-item">
                        <div class="image-side">
                              <a :href="review.author_url" target="_blank">
                                    <img :src="review.profile_photo_url" alt="">
                              </a>

                        </div>
                        <div class="content-side">
                              <p class="reviews-list__author">
                                    <a :href="review.author_url" target="_blank">
                                          <span>{{ review.author_name }}</span>
                                    </a>
                              </p>
                              <div class="reviews-list__rating">
                                    <span v-for="i in review.rating" :key="i" class="star-icon">
                                          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1792 1792">
                                                <path
                                                      d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                </path>
                                          </svg>
                                    </span>
                              </div>
                              <p class="reviews-list__date">{{ review.relative_time_description }}</p>
                              <p class="reviews-list__text">{{ review.text }}</p>
                        </div>
                  </li>
            </ul>
      </div>
</template>

<script>
import axios from 'axios';

export default {
      name: "GoogleReviews",

      data() {
            return {
                  reviews: [],
            };
      },
      mounted() {
            this.getGoogleReviews();
      },
      methods: {
            getGoogleReviews() {
                  axios.get('/api/reviews')
                        .then(response => {
                              console.log(response.data.result.reviews);
                              this.reviews = response.data.result.reviews;
                        })
                        .catch(error => {
                              console.error(error);
                        });
            },
      },
};

</script>

<style lang="scss">
@import url(../../assets/modules/_fonts.scss);

@mixin text_style ($f-f, $f-s, $l-h, $f-w, $coloring) {
      font-family: $f-f;
      font-size: $f-s;
      line-height: $l-h;
      font-weight: $f-w;
      color: $coloring;
}

.reviews-container {}

.reviews-title {
      @include text_style ('Montserrat', 18px, 20px, 500, #FFFFFF);
}

.reviews-list {
      list-style: none;
      width: 80%;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 400px));
      gap: 30px;
      justify-content: center;
      margin-bottom: 100px;
}

.reviews-list-item {
      min-height: 200px;
      max-height: 500px;
      display: flex;
      border-radius: 15px;
      padding: 20px 15px;
      transition: .2s ease-out;
      background-color: #fff;
      box-shadow: 0 8px 20px 2px rgba(0, 0, 0, .07);

      @include text_style ('Montserrat', 18px, 20px, 500, #0a0a0bd8);

      .image-side {
            width: 20%;

            img {
                  width: 60px;
                  height: 60px;
            }
      }

      .content-side {
            width: 80%;

            .reviews-list__author {
                  a {
                        transition: .2s ease-in;
                        text-decoration: none;
                        @include text_style ('Montserrat', 20px, 20px, 600, #0a0a0bd8);
                  }
            }

            .reviews-list__date {
                  transition: .2s ease-in;
                  @include text_style ('Montserrat', 18px, 20px, 400, #0a0a0bd8);
            }

            .star-icon {
                  &:not(:last-child) {
                        margin-right: 2px;
                  }

                  svg {
                        width: 20px;
                        fill: #f7b80c;
                  }
            }

            .reviews-list__date {
                  margin-bottom: 25px;
            }
      }

      &:hover {
            transition: .2s ease-in;
            scale: 1.04;
      }
}


.reviews-list__text {}

.reviews-list__rating {}

.reviews-list__author {}
</style>
<template>
  <section class="say-about-us" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000"
           data-aos-once="true">
    <b-container>
      <h2 class="text-center">
        {{$t('homepage.what_say.header')}}
      </h2>
      <p class="text-center">{{$t('homepage.what_say.text')}}</p>
      <div class="testimonial-list">
        <b-row class="testimonial-item-wrapper">
          <b-col>
            <div class="testimonial-item">
              <blockquote class="testimonial-item__quote">
                {{$t('homepage.what_say.talking_1')}}
              </blockquote>
              <span class="testimonial-item__author">
                    <b-img-lazy
                      v-bind="testimonial_avatar"
                      :src="require('~/assets/img/Testominal/paulo-gomes.jpeg').src"
                      :srcset="require('~/assets/img/Testominal/paulo-gomes.jpeg').srcSet"
                      :blank-src="require('~/assets/img/Testominal/paulo-gomes.jpeg').placeholder"
                      fluid
                      alt="Paulo gomes Photo"
                    />
                    Paulo Gomes
                  </span>
            </div>

          </b-col>
          <b-col>
            <div class="testimonial-item">
              <blockquote class="testimonial-item__quote">
                {{$t('homepage.what_say.talking_2')}}
              </blockquote>
              <span class="testimonial-item__author">
                    <b-img-lazy
                      v-bind="testimonial_avatar"
                      :src="require('~/assets/img/Testominal/elvissilva.jpeg').src"
                      :srcset="require('~/assets/img/Testominal/elvissilva.jpeg').srcSet"
                      :blank-src="require('~/assets/img/Testominal/elvissilva.jpeg').placeholder"
                      fluid
                      alt="Elvissilva Photo"
                    />
                    Elvis Silva
                  </span>
            </div>
          </b-col>
        </b-row>
        <b-row class="testimonial-item-wrapper">
          <b-col offset-md="3" md="6">
            <div class="testimonial-item">
              <blockquote class="testimonial-item__quote">
                {{$t('homepage.what_say.talking_3')}}
              </blockquote>
              <span class="testimonial-item__author">
                    <b-img-lazy
                      v-bind="testimonial_avatar"
                      :src="require('~/assets/img/Testominal/Eduardo-Moiolli-Congresso-Apdespbr-2.png').src"
                      :srcset="require('~/assets/img/Testominal/Eduardo-Moiolli-Congresso-Apdespbr-2.png').srcSet"
                      :blank-src="require('~/assets/img/Testominal/Eduardo-Moiolli-Congresso-Apdespbr-2.png').placeholder"
                      fluid
                      alt="Eduardo Moiolli Congresso Apdespbr"
                    />
                    Eduardo Maiolli
                  </span>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </section>
</template>

<script>
  export default {
    name: "SectionSayAboutUs",
    data: () => ({
      testimonial_avatar: {blank: false, width: 36, height: 36, class:'m1'},
    })
  }
</script>

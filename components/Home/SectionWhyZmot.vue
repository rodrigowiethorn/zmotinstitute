<template>
  <section class="why-zmot">
    <b-container>
      <h2 class="text-center">{{$t('homepage.why_do_you_need_ZMOT.header')}}</h2>
      <p class="text-center">
        {{$t('homepage.why_do_you_need_ZMOT.text1')}}
        <strong>{{$t('homepage.why_do_you_need_ZMOT.text2')}}</strong>
        {{$t('homepage.why_do_you_need_ZMOT.text3')}}
        <strong>{{$t('homepage.why_do_you_need_ZMOT.text4')}}</strong>
        {{$t('homepage.why_do_you_need_ZMOT.text5')}}
      </p>
      <div class="feature__list">
        <b-row class="feature__item" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
          <b-col class="feature__item-img" sm="12" md="6">
            <b-img-lazy
              :src="require('~/assets/img/why-do-you-need/searching_block.png').src"
              :srcset="require('~/assets/img/why-do-you-need/searching_block.png').srcSet"
              :blank-src="require('~/assets/img/why-do-you-need/searching_block.png').placeholder"
              fluid
              style="height: 100%; width: 100%;"
              alt="Why do you need Image"
            />
          </b-col>
          <b-col class="feature__item-content-wrapper" sm="12" md="6">
            <div class="feature__item-content">
              <h3> {{$t('homepage.why_do_you_need_ZMOT.category_1_header')}}</h3>
              <p>{{$t('homepage.why_do_you_need_ZMOT.category_1_text')}}</p>
            </div>
          </b-col>
        </b-row>
        <b-row class="feature__item" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
          <b-col class="feature__item-content-wrapper" sm="12" md="6">
            <div class="feature__item-content text-right">
              <h3>{{$t('homepage.why_do_you_need_ZMOT.category_2_header')}}</h3>
              <p>{{$t('homepage.why_do_you_need_ZMOT.category_2_text')}}</p>
            </div>
          </b-col>
          <b-col class="feature__item-img" sm="12" md="6">
            <b-img-lazy
              :src="require('~/assets/img/why-do-you-need/service-mobile.png').src"
              :srcset="require('~/assets/img/why-do-you-need/service-mobile.png').srcSet"
              :blank-src="require('~/assets/img/why-do-you-need/service-mobile.png').placeholder"
              fluid
              style="height: 100%; width: 100%;"
              alt="Service Mobile Image"
            />
          </b-col>
        </b-row>
        <b-row class="feature__item" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
          <b-col class="feature__item-img" sm="12" md="6">
            <b-img-lazy
              :src="require('~/assets/img/why-do-you-need/why_do_you_need_zmot-review.png').src"
              :srcset="require('~/assets/img/why-do-you-need/why_do_you_need_zmot-review.png').srcSet"
              :blank-src="require('~/assets/img/why-do-you-need/why_do_you_need_zmot-review.png').placeholder"
              fluid
              style="height: 100%; width: 100%;"
              alt="Why do you need zmot review Image"
            />
          </b-col>
          <b-col class="feature__item-content-wrapper" sm="12" md="6">
            <div class="feature__item-content">
              <h3>{{$t('homepage.why_do_you_need_ZMOT.category_3_header')}}</h3>
              <p>{{$t('homepage.why_do_you_need_ZMOT.category_3_text')}}</p>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </section>
</template>

<script>
  export default {
    name: "SectionWhyZmot"
  }
</script>

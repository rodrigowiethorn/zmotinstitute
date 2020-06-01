<template>
  <div id="home-page">
    <section class="banner">
      <b-container>
        <b-row class="mb-3">
          <b-col sm="12" md="6">
            <div class="elementor-spacer">
              <div class="elementor-spacer-inner"></div>
            </div>
            <div class="banner-widget-heading pa-2">
              <h2>{{$t('homepage.banner.header')}}</h2>
            </div>
            <div class="banner-widget-text pa-2">
              <p>{{$t('homepage.banner.text')}}</p>
            </div>
          </b-col>
          <b-col sm="12" md="6">
            <b-img src="../assets/img/header-zmot.jpg" fluid alt="Responsive image"></b-img>
          </b-col>
        </b-row>
        <b-row class="logos">
          <b-col>
            <b-img fluid src="../assets/img/logos/google-white-logo.png" alt="Google's logo white color"></b-img>
          </b-col>
          <b-col>
            <b-img fluid src="../assets/img/logos/digitalks-white logo.png" alt="Digitalk's logo white color"></b-img>
          </b-col>
          <b-col>
            <b-img fluid src="../assets/img/logos/logo-profissional-de-ecommerce.png" alt="Profissional de ecommerce logo white color"></b-img>
          </b-col>
          <b-col>
            <b-img fluid src="../assets/img/logos/logo-startupi-white.png" alt="Startupi's logo white color"></b-img>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="why-zmot">
      <b-container>
        <h1 class="text-center">{{$t('homepage.why_do_you_need_ZMOT.header')}}</h1>
        <p class="text-center">
          {{$t('homepage.why_do_you_need_ZMOT.text1')}}
          <b>{{$t('homepage.why_do_you_need_ZMOT.text2')}}</b>
          {{$t('homepage.why_do_you_need_ZMOT.text3')}}
          <b>{{$t('homepage.why_do_you_need_ZMOT.text4')}}</b>
          {{$t('homepage.why_do_you_need_ZMOT.text5')}}
        </p>
        <div class="feature__list">
          <b-row class="feature__item" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
            <b-col class="feature__item-img" sm="12" md="6">
              <picture>
                <source srcset="../assets/img/why-do-you-need/searching_block.webp" type="image/webp" />
                <b-img src="../assets/img/why-do-you-need/searching_block.png" fluid alt=""></b-img>
              </picture>
            </b-col>
            <b-col class="feature__item-content-wrapper" sm="12" md="6">
              <div class="feature__item-content">
                  <h3>{{$t('homepage.why_do_you_need_ZMOT.category_1_header')}}</h3>
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
              <b-img src="../assets/img/why-do-you-need/service-mobile.webp" fluid alt="Responsive image"></b-img>
            </b-col>
          </b-row>
          <b-row class="feature__item" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
            <b-col class="feature__item-img" sm="12" md="6">
                <b-img src="../assets/img/why-do-you-need/why_do_you_need_zmot-review.webp" fluid alt="Responsive image"></b-img>
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

    <section class="specialists" data-aos="fade-down" data-aos-easing="linear" data-aos-once="true" data-aos-duration="500">
      <b-container>
        <h2 class="text-center">{{$t('homepage.specialist.header')}}</h2>
        <p class="text-center">{{$t('homepage.specialist.text')}}</p>
        <div class="specialist__items">
          <no-ssr placeholder="Loading...">
              <agile :options='agileOptions'>
                <div class="slide slide--1">
                  <b-card no-body class="overflow-hidden spec__card">
                    <b-card-body>
                      <b-card-text>
                        “{{$t('homepage.specialist.slide_1_text')}}”
                      </b-card-text>
                      <div class="spec__card-meta">
                        <div class="sec__card-meta-avatar">
                          <picture>
                            <source srcset="../assets/img/Specialist/NeilPatel.webp" type="image/webp" />
                            <b-img v-bind="specialist_avatar" src="../assets/img/Specialist/NeilPatel.jpg" fluid alt="Responsive image"></b-img>
                          </picture>
                        </div>
                        <div class="spec__card-meta-details">
                          <div class="name">
                            Neil Patel
                          </div>
                          <div class="job">
                            Marketing Guru
                          </div>
                        </div>
                      </div>
                    </b-card-body>
                  </b-card>
                </div>
                <div class="slide slide--2">
                  <b-card no-body class="overflow-hidden spec__card">
                    <b-card-body>
                      <b-card-text>
                        “{{$t('homepage.specialist.slide_2_text')}}”
                      </b-card-text>
                      <div class="spec__card-meta">
                        <div class="sec__card-meta-avatar">
                          <picture>
                            <source srcset="../assets/img/Specialist/Jim_Lecinsk.webp" type="image/webp" />
                            <b-img v-bind="specialist_avatar" src="../assets/img/Specialist/Jim_Lecinsk.jpeg" fluid alt="Responsive image"></b-img>
                          </picture>
                        </div>
                        <div class="spec__card-meta-details">
                          <div class="name">
                            Jim Lecinski
                          </div>
                          <div class="job">
                            ZMOT Author
                          </div>
                        </div>
                      </div>
                    </b-card-body>
                  </b-card>
                </div>
                <div class="slide slide--3">
                  <b-card no-body class="overflow-hidden spec__card">
                    <b-card-body>
                      <b-card-text>
                        “{{$t('homepage.specialist.slide_3_text')}}”
                      </b-card-text>
                      <div class="spec__card-meta">
                        <div class="sec__card-meta-avatar">
                          <picture>
                            <source srcset="../assets/img/Specialist/David_Meerman_Scott.webp" type="image/webp" />
                            <b-img v-bind="specialist_avatar" src="../assets/img/Specialist/David_Meerman_Scott.png" fluid alt="Responsive image"></b-img>
                          </picture>
                        </div>
                        <div class="spec__card-meta-details">
                          <div class="name">
                            David M.Scott
                          </div>
                          <div class="job">
                            Marketing & Sales Visionary
                          </div>
                        </div>
                      </div>
                    </b-card-body>
                  </b-card>
                </div>
                <div class="slide slide--4">
                  <b-card no-body class="overflow-hidden spec__card">
                    <b-card-body>
                      <b-card-text>
                        “{{$t('homepage.specialist.slide_4_text')}}”
                      </b-card-text>
                      <div class="spec__card-meta">
                        <div class="sec__card-meta-avatar">
                          <picture>
                            <source srcset="../assets/img/Specialist/avinash_kaushik.webp" type="image/webp" />
                            <b-img v-bind="specialist_avatar" src="../assets/img/Specialist/avinash_kaushik.png" fluid alt="Responsive image"></b-img>
                          </picture>
                        </div>
                        <div class="spec__card-meta-details">
                          <div class="name">
                            Avinash Kaushik
                          </div>
                          <div class="job">
                            Digital Marketing Evangelist
                          </div>
                        </div>
                      </div>
                    </b-card-body>
                  </b-card>
                </div>
                <div class="slide slide--5">
                  <b-card no-body class="overflow-hidden spec__card">
                    <b-card-body>
                      <b-card-text>
                        “{{$t('homepage.specialist.slide_5_text')}}”
                      </b-card-text>
                      <div class="spec__card-meta">
                        <div class="sec__card-meta-avatar">
                          <picture>
                            <source srcset="../assets/img/Specialist/bryan_eisenberg.webp" type="image/webp" />
                            <b-img v-bind="specialist_avatar" src="../assets/img/Specialist/bryan_eisenberg.png" fluid alt="Responsive image"></b-img>
                          </picture>
                        </div>
                        <div class="spec__card-meta-details">
                          <div class="name">
                            Bryan Eisenberg
                          </div>
                          <div class="job">
                            Digital Marketing Pioneer
                          </div>
                        </div>
                      </div>
                    </b-card-body>
                  </b-card>
                </div>

                <template slot="prevButton">
                    <font-awesome-icon icon="arrow-left" /></template>
                <template slot="nextButton">
                    <font-awesome-icon icon="arrow-right" /></template>
              </agile>
          </no-ssr>
        </div>
      </b-container>
    </section>
    <section class="services" data-aos="fade-zoom" data-aos-once="true">
      <b-container>
        <h2 class="text-center">{{$t('homepage.services.header')}}</h2>
        <p class="text-center">
          {{$t('homepage.services.sub_header')}}
        </p>
        <b-row id="zmot-audit">
          <b-col md="6" sm="12">
            <img src="../assets/img/services/service-zmot_audito.png" alt="" />
          </b-col>
          <b-col md="6" sm="12">
            <b-card class="service--item mb-3">
              <b-card-text>
                <h2 class="h3 mb-4">{{$t('homepage.services.service_1_header')}}</h2>
                <div>
                  <p class="mb-5 medium">
                      <span>{{$t('homepage.services.service_1_description')}}</span>
                  </p>
                </div>
                <a class="btn btn-orange rounded-pill" href="https://nordvpn.com/features/" data-ga-slug="Get a Quote" role="button" tabindex="0">
                  <span>
                      {{$t('homepage.services.get_a_quote')}}
                  </span>
                </a>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
        <b-row id="lectures">
          <b-col md="6" sm="12">
            <b-card class="service--item mb-3 text-right">
              <b-card-text>
                <h2 class="h3 mb-4">{{$t('homepage.services.service_2_header')}}</h2>
                <div>
                  <p class="mb-5 medium">
                      <span>{{$t('homepage.services.service_2_description')}}</span>
                  </p>
                </div>
                <a class="btn btn-orange rounded-pill" href="https://nordvpn.com/features/" data-ga-slug="Get a Quote" role="button" tabindex="0">
                  <span>
                      {{$t('homepage.services.get_a_quote')}}
                  </span>
                </a>
              </b-card-text>
            </b-card>
          </b-col>
          <b-col md="6" sm="12">
            <img src="../assets/img/services/service-lecture.webp" alt="" />
          </b-col>
        </b-row>
        <b-row id="courses">
          <b-col md="6" sm="12">
            <img src="../assets/img/services/service-online_course.webp" alt="" />
          </b-col>
          <b-col md="6" sm="12">
            <b-card class="service--item mb-3">
              <b-card-text>
                <h2 class="h3 mb-4">{{$t('homepage.services.service_3_header')}}</h2>
                <div>
                  <p class="mb-5 medium">
                    <span>
                      {{$t('homepage.services.service_3_description')}}
                    </span>
                  </p>
                </div>
                <a class="btn btn-orange rounded-pill" href="https://nordvpn.com/features/" data-ga-slug="Get a Quote" role="button" tabindex="0">
                  <span>
                      {{$t('homepage.services.get_a_quote')}}
                    </span>
                </a>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="say-about-us" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true">
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
                  <b-img v-bind="testimonial_avatar" src="../assets/img/Testominal/paulo-gomes.webp" fluid alt="Responsive image"></b-img>
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
                  <b-img v-bind="testimonial_avatar" src="../assets/img/Testominal/elvissilva.webp" fluid alt="Responsive image"></b-img>
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
                  <b-img v-bind="testimonial_avatar" src="../assets/img/Testominal/Eduardo-Moiolli-Congresso-Apdespbr-2.webp" fluid alt="Responsive image"></b-img>
                  Eduardo Maiolli
                </span>
              </div>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </section>
    <section class="blogs mt-5 mb-5" data-aos="fade-down" data-aos-easing="linear" data-aos-once="true" data-aos-duration="500">
      <b-container>
        <h2 class="text-center">Blog</h2>
        <div class="blog--list">
          <b-row>
            <b-col md="4" sm="12" v-for="post of stickyPosts" :key="post.id">
              <b-card
                :img-src="post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url"
                img-alt="Image"
                img-top
                tag="article"
                class="mb-2 blog--card"
              >
                <div class="card-meta">
                  <!-- <span>
                    <a class="text-small orange-text" href="/website-builders/review/">Review</a>
                  </span> -->
                  <!-- <span class="text-small mx-2">|</span> -->
                  <span class="text-small">{{ moment(post.date).format('MMMM Do YYYY') }}</span>
                </div>
                <div class="card-title">

                  <nuxt-link
                    :to="localePath({
                      name: 'blog-slug',
                      params: { slug: post.slug }
                    })"
                  >
                    {{post.title.rendered}}
                  </nuxt-link>
                </div>
                <nuxt-link
                  :to="localePath({
                    name: 'blog-slug',
                    params: { slug: post.slug }
                  })"
                   class="btn btn-orange rounded-pill"
                >
                  {{$t('homepage.blog.read_more')}}
                </nuxt-link>
              </b-card>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </section>
    <no-ssr>
      <NewsLetter />
    </no-ssr>
  </div>
</template>

<script>
  import {library} from '@fortawesome/fontawesome-svg-core'
  import axios from 'axios';
  import moment from 'moment';
  import {
      faUsers,
      faMobile,
      faSearch,
      faArrowLeft,
      faArrowRight,
  } from '@fortawesome/free-solid-svg-icons'
  import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

  library.add(
      faUsers,
      faMobile,
      faSearch,
      faArrowLeft,
      faArrowRight,
  );

  import NewsLetter from "@/components/NewsLetter.vue";

  export default {
    components: {
      'font-awesome-icon': FontAwesomeIcon,
      'NewsLetter': NewsLetter,
    },
    data: () => ({
        testimonial_avatar: {blank: false, width: 36, height: 36, class:'m1'},
        specialist_avatar: {blank: false, width: 85, height: 85, class:'m2'},
        agileOptions: {
            navButtons: false,
            centerMode: true,
            slidesToShow: 1,
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        dots: false,
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 900,
                    settings: {
                        dots: true,
                        infinite: false,
                        infinite: true,
                        slidesToShow: 3
                    }
                }
            ]
        },
        apiUrl: 'https://thezmot.com/wp-json/wp/v2/posts?include[]=490&include[]=147&include[]=584',
        stickyPosts: []
    }),
    mounted: function () {
        this.getStickyBlogs();
    },
    methods: {
      moment: function (date) {
        return moment(date);
      },
      getStickyBlogs: async function() {
        try {
          const result = await axios.get('https://thezmot.com/wp-json/wp/v2/posts?include[]=490&include[]=147&include[]=584&_embed=1');
          this.stickyPosts = result.data && result.data.reverse();
          console.log('post data: ', result.data);
        } catch(e) {
          this.stickyPosts = [];
        } finally {
        }
      }
    }
}
</script>490

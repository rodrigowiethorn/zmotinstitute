<template>
  <section class="services" data-aos="fade-zoom" data-aos-once="true">
    <b-container>
      <h2 class="text-center">{{$t('homepage.services.header')}}</h2>
      <p class="text-center" id="zmot-audit">
        {{$t('homepage.services.sub_header')}}
      </p>
      <b-row>
        <b-col md="6" sm="12" align-self="center">
          <b-img-lazy
            :src="require('~/assets/img/services/service-zmot_audit.png').src"
            :srcset="require('~/assets/img/services/service-zmot_audit.png').srcSet"
            :blank-src="require('~/assets/img/services/service-zmot_audit.png').placeholder"
            style="height: 100%; width: 100%;"
            alt="Service Zmot Audito Image"
          />
        </b-col>
        <b-col md="6" sm="12">
          <b-card class="service--item mb-3">
            <b-card-text>
              <h2 class="h3 mb-4">{{$t('homepage.services.service_1_header')}}</h2>
              <div>
                <p class="mb-5 medium text-justify">
                  <span>{{$t('homepage.services.service_1_description')}}</span>
                </p>
              </div>
              <nuxt-link :to="localePath('zmot-audit')">
                <a class="btn btn-purple rounded-pill" data-ga-slug="Get a Quote" role="button" tabindex="0"
                   id="CheckServicePage">
                      <span>
                          {{$t('homepage.services.get_a_quote')}}
                      </span>
                </a>
              </nuxt-link>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6" sm="12">
          <b-card class="service--item mb-3 text-right">
            <b-card-text>
              <h2 class="h3 mb-4">{{$t('homepage.services.service_2_header')}}</h2>
              <div>
                <p class="mb-5 medium text-justify">
                  <span>{{$t('homepage.services.service_2_description')}}</span>
                </p>
              </div>
              <nuxt-link :to="localePath('lectures-events')">
                <a class="btn btn-purple rounded-pill" data-ga-slug="Get a Quote" role="button" tabindex="0"
                   id="CheckServicePage">
                      <span>
                          {{$t('homepage.services.get_a_quote')}}
                      </span>
                </a>
              </nuxt-link>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col md="6" sm="12" align-self="center">
          <b-img-lazy
            :src="require('~/assets/img/services/service-lecture.png').src"
            :srcset="require('~/assets/img/services/service-lecture.png').srcSet"
            :blank-src="require('~/assets/img/services/service-lecture.png').placeholder"
            style="height: 100%; width: 100%;"
            alt="Service Lecture Image"
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6" sm="12" align-self="center">
          <b-img-lazy
            :src="require('~/assets/img/services/service-online_course.png').src"
            :srcset="require('~/assets/img/services/service-online_course.png').srcSet"
            :blank-src="require('~/assets/img/services/service-online_course.png').placeholder"
            style="height: 100%; width: 100%;"
            alt="Service Online Course Image"
          />
        </b-col>
        <b-col md="6" sm="12">
          <b-card class="service--item mb-3">
            <b-card-text>
              <h2 class="h3 mb-4">{{$t('homepage.services.service_3_header')}}</h2>
              <div>
                <p class="mb-5 medium text-justify">
                      <span>
                        {{$t('homepage.services.service_3_description')}}
                      </span>
                </p>
              </div>
              <nuxt-link :to="localePath('online-courses')">
                <a class="btn btn-purple rounded-pill" data-ga-slug="Get a Quote" role="button" tabindex="0"
                   id="CheckServicePage">
                      <span>
                          {{$t('homepage.services.get_a_quote')}}
                      </span>
                </a>
              </nuxt-link>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
  export default {
    name: "SectionServices"
  }
</script>

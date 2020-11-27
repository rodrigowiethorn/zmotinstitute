<template>
  <section class="banner">
    <b-container>
      <b-row class="mb-3">
        <b-col sm="12" md="6">
          <div class="elementor-spacer">
            <div class="elementor-spacer-inner"></div>
          </div>
          <div class="banner-widget-heading pa-2">
            <h1>{{$t('homepage.banner.header')}}</h1>
          </div>
          <div class="banner-widget-text pa-2">
            <p>{{$t('homepage.banner.text')}}</p>
          </div>
        </b-col>
        <b-col sm="12" md="6">
          <b-img-lazy
            :src="require('~/assets/img/header-zmot.jpg').src"
            :srcset="require('~/assets/img/header-zmot.jpg').srcSet"
            :blank-src="require('~/assets/img/header-zmot.jpg').placeholder"
            style="height: 100%; width: 100%;"
            alt="women persona using cell phone, sitting on a side of a big cell phone with an ecommerce website. There is a nice landscape with plants"
          />
        </b-col>
      </b-row>
      <b-row class="logos">
        <b-col>
          <b-img-lazy
            :src="require('~/assets/img/logos/google-white-logo.png').src"
            :srcset="require('~/assets/img/logos/google-white-logo.png').srcSet"
            :blank-src="require('~/assets/img/logos/google-white-logo.png').placeholder"
            fluid
            style="height: 100%; width: 150px;"
            alt="Google's logo white color"
          />
        </b-col>
        <b-col>
          <b-img-lazy
            :src="require('~/assets/img/logos/digitalks-white-logo.png').src"
            :srcset="require('~/assets/img/logos/digitalks-white-logo.png').srcSet"
            :blank-src="require('~/assets/img/logos/digitalks-white-logo.png').placeholder"
            fluid
            style="height: 100%; width: 150px;"
            alt="Digitalk's logo white color"
          />
        </b-col>
        <b-col>
          <b-img-lazy
            :src="require('~/assets/img/logos/logo-profissional-de-ecommerce.png').src"
            :srcset="require('~/assets/img/logos/logo-profissional-de-ecommerce.png').srcSet"
            :blank-src="require('~/assets/img/logos/logo-profissional-de-ecommerce.png').placeholder"
            fluid
            style="height: 100%; width: 150px;"
            alt="Profissional de ecommerce logo white color"
          />
        </b-col>
        <b-col>
          <b-img-lazy
            :src="require('~/assets/img/logos/logo-startupi-white.png').src"
            :srcset="require('~/assets/img/logos/logo-startupi-white.png').srcSet"
            :blank-src="require('~/assets/img/logos/logo-startupi-white.png').placeholder"
            fluid
            style="height: 100%; width: 150px;"
            alt="Startupi's logo white color"
          />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
  export default {
    name: "SectionBanner"
  }
</script>

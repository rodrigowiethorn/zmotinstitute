<template>
  <div id="home-page">

    <section class="banner">
      <b-container>
        <b-row>
          <b-col>
            <div class="elementor-spacer">
              <div class="elementor-spacer-inner"></div>
            </div>
            <div class="banner-widget-heading pa-2">
              <h2>{{$t('homepage.banner_header')}}</h2>
            </div>
            <div class="banner-widget-text pa-2">
              <p>{{$t('homepage.banner_text')}}</p>
            </div>
          </b-col>
          <b-col>
            <b-img src="../../assets/img/header-zmot.jpg" fluid alt="Responsive image"></b-img>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-img fluid src="../../assets/img/logos/buzzfeed-white.png" alt="Image 1"></b-img>
          </b-col>
          <b-col>
            <b-img fluid src="../../assets/img/logos/huffington-post-white.png" alt="Image 1"></b-img>
          </b-col>
          <b-col>
            <b-img fluid src="../../assets/img/logos/the-guardian-white.png" alt="Image 1"></b-img>
          </b-col>
          <b-col>
            <b-img fluid src="../../assets/img/logos/wired-white.png" alt="Image 1"></b-img>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="why-zmot">
      <b-container>
        <h2 class="text-center">{{$t('homepage.why_do_you_need_ZMOT.header')}}</h2>
        <p class="text-center">
          {{$t('homepage.why_do_you_need_ZMOT.text')}}
        </p>
        <div class="feature__list">
          <b-row class="feature__item" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
            <b-col class="feature__item-img">
                <b-img src="../../assets/img/planing.png" fluid alt="Responsive image"></b-img>
            </b-col>
            <b-col class="feature__item-content-wrapper">
                <div class="feature__item-content">
                  <div class="feature__item-icon">
                    <font-awesome-icon icon="search" />
                  </div>
                  <h3>Relevância</h3>
                  <p>Esteja presente apenas quando seu cliente precisa de você. Estar no lugar certo e na hora certa deve ser o seu lema.</p>
              </div>
            </b-col>
          </b-row>
          <b-row class="feature__item" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
            <b-col class="feature__item-content-wrapper">
                <div class="feature__item-content text-right">
                <div class="feature__item-icon">
                  <font-awesome-icon icon="users" />
                </div>
                <h3>Reviews</h3>
                <p>A experiência de outras pessoas influência a sua tomada de decisão. O boca a boca está mais forte do que nunca.</p>
              </div>
            </b-col>
            <b-col class="feature__item-img">
                <b-img src="../../assets/img/planing.png" fluid alt="Responsive image"></b-img>
            </b-col>
          </b-row>
          <b-row class="feature__item" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
            <b-col class="feature__item-img">
                <b-img src="../../assets/img/planing.png" fluid alt="Responsive image"></b-img>
            </b-col>
            <b-col class="feature__item-content-wrapper">
                <div class="feature__item-content">
                  <div class="feature__item-icon">
                    <font-awesome-icon icon="mobile" />
                  </div>
                  <h3>Mobile</h3>
                  <p>O consumidor tem controle total, eles encontram e compartilham informações a sua própria maneira e tempo.</p>
                </div>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </section>
    
    <section class="specialists" data-aos="fade-down" data-aos-easing="linear" data-aos-once="true" data-aos-duration="500">
      <b-container>
        <h2 class="text-center">Os Especialistas</h2>
        <p class="text-center">ZMOT é coisa de gente grande. Veja o que os maiores especialistas mundiais em Marketing Digital tem falado sobre o assunto.</p>
        <div class="specialist__items">
          <no-ssr placeholder="Loading...">
              <agile :options='agileOptions'>
                <div class="slide slide--1">
                  <b-card no-body class="overflow-hidden spec__card">
                    <b-card-body>
                      <b-card-text>
                        “Os consumidores pesquisam as informações na internet antes de comprar.”
                      </b-card-text>
                      <div class="spec__card-meta">
                        <div class="sec__card-meta-avatar">
                          <b-img v-bind="specialist_avatar" src="../../assets/img/Specialist/David_Meerman_Scott.webp" fluid alt="Responsive image"></b-img>
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
                        “Os consumidores pesquisam as informações na internet antes de comprar.”
                      </b-card-text>
                      <div class="spec__card-meta">
                        <div class="sec__card-meta-avatar">
                          <b-img v-bind="specialist_avatar" src="../../assets/img/Specialist/NeilPatel.webp" fluid alt="Responsive image"></b-img>
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
                <div class="slide slide--3">
                  <b-card no-body class="overflow-hidden spec__card">
                    <b-card-body>
                      <b-card-text>
                        “Os consumidores pesquisam as informações na internet antes de comprar.”
                      </b-card-text>
                      <div class="spec__card-meta">
                        <div class="sec__card-meta-avatar">
                          <b-img v-bind="specialist_avatar" src="../../assets/img/Specialist/NeilPatel.webp" fluid alt="Responsive image"></b-img>
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
                <div class="slide slide--4">
                  <b-card no-body class="overflow-hidden spec__card">
                    <b-card-body>
                      <b-card-text>
                        “Os consumidores pesquisam as informações na internet antes de comprar.”
                      </b-card-text>
                      <div class="spec__card-meta">
                        <div class="sec__card-meta-avatar">
                          <b-img v-bind="specialist_avatar" src="../../assets/img/Specialist/Jim_Lecinsk.webp" fluid alt="Responsive image"></b-img>
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
                <div class="slide slide--5">
                  <b-card no-body class="overflow-hidden spec__card">
                    <b-card-body>
                      <b-card-text>
                        “Os consumidores pesquisam as informações na internet antes de comprar.”
                      </b-card-text>
                      <div class="spec__card-meta">
                        <div class="sec__card-meta-avatar">
                          <b-img v-bind="specialist_avatar" src="../../assets/img/Specialist/David_Meerman_Scott.webp" fluid alt="Responsive image"></b-img>
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

                <template slot="prevButton">
                    <font-awesome-icon icon="arrow-left" /></template>
                <template slot="nextButton">
                    <font-awesome-icon icon="arrow-right" /></template>
              </agile>
          </no-ssr>
        </div>
      </b-container>
    </section>
    <section class="blogs" data-aos="fade-down" data-aos-easing="linear" data-aos-once="true" data-aos-duration="500">
      <b-container>
        <h2 class="text-center">Blog</h2>
        <div class="blog--list">
          <b-row>
            <b-col>
              <b-card
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                class="mb-2 blog--card"
              >
                <div class="card-meta">
                  <span>
                    <a class="text-small orange-text" href="/website-builders/review/">Review</a>
                  </span>
                  <span class="text-small mx-2">|</span>
                  <span class="text-small">Apr 9, 2020</span>
                </div>
                <div class="card-title">
                  <a href="#">BoldGrid Review – Everything You Need to Know</a>
                </div>
                <b-button variant="outline-orange">Read More</b-button>
              </b-card>
            </b-col>
            <b-col>
              <b-card
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                class="mb-2 blog--card"
              >
                <div class="card-meta">
                  <span>
                    <a class="text-small orange-text" href="/website-builders/review/">Review</a>
                  </span>
                  <span class="text-small mx-2">|</span>
                  <span class="text-small">Apr 9, 2020</span>
                </div>
                <div class="card-title">
                  <a href="#">BoldGrid Review – Everything You Need to Know</a>
                </div>
                <b-button variant="outline-orange">Read More</b-button>
              </b-card>
            </b-col>
            <b-col>
              <b-card
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                class="mb-2 blog--card"
              >
                <div class="card-meta">
                  <span>
                    <a class="text-small orange-text" href="/website-builders/review/">Review</a>
                  </span>
                  <span class="text-small mx-2">|</span>
                  <span class="text-small">Apr 9, 2020</span>
                </div>
                <div class="card-title">
                  <a href="#">BoldGrid Review – Everything You Need to Know</a>
                </div>
                <b-button variant="outline-orange">Read More</b-button>
              </b-card>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </section>
    <section class="services" data-aos="fade-zoom" data-aos-once="true">
      <b-container>
        <b-row> 
          <b-col>
            <b-card class="service--item mb-3" img-src="../../assets/img/man-room-devices-secured@2x.jpg" img-left>
              <b-card-text>
                <h2 class="h3 mb-4"><span>Protect all your devices</span></h2>
                <div>
                  <p class="mb-5 medium">
                    <span>
                      <span>Do you use Windows at work, macOS at home, and Linux for your special projects? No problem. There’s a NordVPN application for each of these, plus apps for iOS, Android, and Android TV. Oh, and also encrypted proxy extensions for Chrome and Firefox.</span>
                      <span>Best of all, with one NordVPN account, you can secure <strong><span>up to 6 devices</span></strong> at the same time.</span>
                    </span>
                  </p>
                </div>
                <a class="btn btn-orange rounded-pill" href="https://nordvpn.com/features/" data-ga-slug="See all features" role="button" tabindex="0">
                  <span>See All Features</span>
                </a>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
        <b-row> 
          <b-col>
            <b-card class="service--item mb-3" img-src="../../assets/img/man-room-devices-secured@2x.jpg" img-right>
              <b-card-text>
                <h2 class="h3 mb-4"><span>Protect all your devices</span></h2>
                <div>
                  <p class="mb-5 medium">
                    <span>
                      <span>Do you use Windows at work, macOS at home, and Linux for your special projects? No problem. There’s a NordVPN application for each of these, plus apps for iOS, Android, and Android TV. Oh, and also encrypted proxy extensions for Chrome and Firefox.</span>
                      <span>Best of all, with one NordVPN account, you can secure <strong><span>up to 6 devices</span></strong> at the same time.</span>
                    </span>
                  </p>
                </div>
                <a class="btn btn-orange rounded-pill" href="https://nordvpn.com/features/" data-ga-slug="See all features" role="button" tabindex="0">
                  <span>See All Features</span>
                </a>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
        <b-row> 
          <b-col>
            <b-card class="service--item mb-3" img-src="../../assets/img/man-room-devices-secured@2x.jpg" img-left>
              <b-card-text>
                <h2 class="h3 mb-4"><span>Protect all your devices</span></h2>
                <div>
                  <p class="mb-5 medium">
                    <span>
                      <span>Do you use Windows at work, macOS at home, and Linux for your special projects? No problem. There’s a NordVPN application for each of these, plus apps for iOS, Android, and Android TV. Oh, and also encrypted proxy extensions for Chrome and Firefox.</span>
                      <span>Best of all, with one NordVPN account, you can secure <strong><span>up to 6 devices</span></strong> at the same time.</span>
                    </span>
                  </p>
                </div>
                <a class="btn btn-orange rounded-pill" href="https://nordvpn.com/features/" data-ga-slug="See all features" role="button" tabindex="0">
                  <span>See All Features</span>
                </a>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="say-about-us" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true">
      <b-container>
        <h2 class="text-center">Opiniões sobre ZMOT</h2>
        <p class="text-center">Veja o que pessoas que passaram a conhecer o ZMOT estão falando sobre esse framework.</p>
        <div class="testimonial-list">
          <b-row class="testimonial-item-wrapper">
            <b-col>
              <div class="testimonial-item">
                <blockquote class="testimonial-item__quote">
                  Melhor começar aplicar o aprendizado do ZMOT o quanto antes... Parabéns por compartilhar seu conhecimento e nos ajudar a melhorar...
                </blockquote>
                <span class="testimonial-item__author">
                  <b-img v-bind="testimonial_avatar" src="../../assets/img/Testominal/Jim_Lecinsk.webp" fluid alt="Responsive image"></b-img>
                  Elvis Silva
                </span>
              </div>
              
            </b-col>
            <b-col>
              <div class="testimonial-item">
                <blockquote class="testimonial-item__quote">
                      Obrigado por compartilhar esse conteúdo com a comunidade. A partir de hoje vou prestar mais atenção no que foi exposto no texto.​
                </blockquote>
                <span class="testimonial-item__author">
                  <b-img v-bind="testimonial_avatar" src="../../assets/img/Testominal/Jim_Lecinsk.webp" fluid alt="Responsive image"></b-img>
                  Paulo Gomes
                </span>
              </div>
            </b-col>
          </b-row>
          <b-row class="testimonial-item-wrapper">
            <b-col>
              <div class="testimonial-item">
                <blockquote class="testimonial-item__quote">
                  Melhor começar aplicar o aprendizado do ZMOT o quanto antes... Parabéns por compartilhar seu conhecimento e nos ajudar a melhorar...
                </blockquote>
                <span class="testimonial-item__author">
                  <b-img v-bind="testimonial_avatar" src="../../assets/img/Testominal/Jim_Lecinsk.webp" fluid alt="Responsive image"></b-img>
                  Elvis Silva
                </span>
              </div>
              
            </b-col>
            <b-col>
              <div class="testimonial-item">
                <blockquote class="testimonial-item__quote">
                      Obrigado por compartilhar esse conteúdo com a comunidade. A partir de hoje vou prestar mais atenção no que foi exposto no texto.​
                </blockquote>
                <span class="testimonial-item__author">
                  <b-img v-bind="testimonial_avatar" src="../../assets/img/Testominal/NeilPatel.webp" fluid alt="Responsive image"></b-img>
                  Paulo Gomes
                </span>
              </div>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </section>
    <NewsLetter  />
  </div>
</template>

<script>
  import {library} from '@fortawesome/fontawesome-svg-core'
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
          infinite: true,
          slidesToShow: 3,
          navButtons: false,
          dots: true,
          centerMode: true,
        },
    }),
}
</script>

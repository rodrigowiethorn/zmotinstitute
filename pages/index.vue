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
              <h2>ZMOT: a chave para sua Transformação Digital</h2>
            </div>
            <div class="banner-widget-text pa-2">
              <p>O Comportamento do Consumidor a seu favor!</p>
            </div>
          </b-col>
          <b-col>
            <b-img src="../assets/img/header-zmot.jpg" fluid alt="Responsive image"></b-img>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="why-zmot">
      <b-container>
        <h2 class="text-center">Por que preciso do ZMOT?</h2>
        <p class="text-center">
          Entender o <b>Comportamento do Consumidor</b> é a chave para uma comunicação eficiente. Auxilie seu cliente durante a <b>Jornada de Compra</b> e veja seus resultados crescerem exponencialmente.
        </p>
        <div class="feature__list">
          <b-row class="feature__item" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
            <b-col class="feature__item-img">
                <b-img src="../assets/img/planing.png" fluid alt="Responsive image"></b-img>
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
                <b-img src="../assets/img/planing.png" fluid alt="Responsive image"></b-img>
            </b-col>
          </b-row>
          <b-row class="feature__item" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
            <b-col class="feature__item-img">
                <b-img src="../assets/img/planing.png" fluid alt="Responsive image"></b-img>
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
                          <b-img v-bind="specialist_avatar" src="../assets/img/testominal1.jpeg" fluid alt="Responsive image"></b-img>
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
                          <b-img v-bind="specialist_avatar" src="../assets/img/testominal1.jpeg" fluid alt="Responsive image"></b-img>
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
                          <b-img v-bind="specialist_avatar" src="../assets/img/testominal1.jpeg" fluid alt="Responsive image"></b-img>
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
                          <b-img v-bind="specialist_avatar" src="../assets/img/testominal1.jpeg" fluid alt="Responsive image"></b-img>
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
                          <b-img v-bind="specialist_avatar" src="../assets/img/testominal1.jpeg" fluid alt="Responsive image"></b-img>
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

    <section class="say-about-us" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true">
      <b-container>
        <h2 class="text-center">Opiniões sobre ZMOT</h2>
        <p class="text-center">Veja o que pessoas que passaram a conhecer o ZMOT estão falando sobre esse framework.</p>
        <div class="testimonial-list">
          <b-row>
            <b-col>
              <b-row  class="testimonial-item-wrapper">
                <b-col class="testimonial-item">
                  <blockquote class="testimonial-item__quote">
                    Melhor começar aplicar o aprendizado do ZMOT o quanto antes... Parabéns por compartilhar seu conhecimento e nos ajudar a melhorar...
                  </blockquote>
                  <span class="testimonial-item__author">
                    <b-img v-bind="testimonial_avatar" src="../assets/img/testominal1.jpeg" fluid alt="Responsive image"></b-img>
                    Elvis Silva
                  </span>
                </b-col>
              </b-row>
              <b-row  class="testimonial-item-wrapper">
                <b-col class="testimonial-item">
                  <blockquote class="testimonial-item__quote">
                    Obrigado por compartilhar esse conteúdo com a comunidade. A partir de hoje vou prestar mais atenção no que foi exposto no texto.​
                  </blockquote>
                  <span class="testimonial-item__author">
                    <b-img v-bind="testimonial_avatar" src="../assets/img/testominal2.jpeg" fluid alt="Responsive image"></b-img>
                    Paulo Gomes
                  </span>
                </b-col>
              </b-row>
            </b-col>
            <b-col>
              <b-row  class="testimonial-item-wrapper">
                <b-col class="testimonial-item">
                  <blockquote class="testimonial-item__quote">
                    Muito bom conteúdo, obrigado por compartilhar conosco este excelente conteúdo.
                  </blockquote>
                  <span class="testimonial-item__author">
                    <b-img v-bind="testimonial_avatar" src="../assets/img/testominal3.png" fluid alt="Responsive image"></b-img>
                    Elvis Silva
                  </span>
                </b-col>
              </b-row>
              <b-row  class="testimonial-item-wrapper">
                <b-col class="testimonial-item">
                  <blockquote class="testimonial-item__quote">
                    Obrigado por compartilhar esse conteúdo com a comunidade. A partir de hoje vou prestar mais atenção no que foi exposto no texto.​
                  </blockquote>
                  <span class="testimonial-item__author">
                    <b-img v-bind="testimonial_avatar" src="../assets/img/testominal2.jpeg" fluid alt="Responsive image"></b-img>
                    Paulo Gomes
                  </span>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </section>
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
  export default {
    components: {
      'font-awesome-icon': FontAwesomeIcon,
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
        }
    }),
}
</script>


<style lang="scss">
@import '../assets/scss/homepage.scss';
</style>

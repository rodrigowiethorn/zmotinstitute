<template>
  <section class="specialists" data-aos="fade-down" data-aos-easing="linear" data-aos-once="true"
           data-aos-duration="500">
    <b-container>
      <h2 class="text-center">{{$t('homepage.specialist.header')}}</h2>
      <p class="text-center">{{$t('homepage.specialist.text')}}</p>
      <div class="specialist__items">
        <client-only placeholder="Loading...">
          <agile :options='agileOptions'>
            <div class="slide slide--1">
              <b-card no-body class="overflow-hidden spec__card">
                <b-card-body>
                  <b-card-text>
                    “{{$t('homepage.specialist.slide_1_text')}}”
                  </b-card-text>
                  <div class="spec__card-meta">
                    <div class="sec__card-meta-avatar">
                      <b-img-lazy
                        v-bind="specialist_avatar"
                        :src="require('~/assets/img/Specialist/NeilPatel.jpg').src"
                        :srcset="require('~/assets/img/Specialist/NeilPatel.jpg').srcSet"
                        :blank-src="require('~/assets/img/Specialist/NeilPatel.jpg').placeholder"
                        fluid
                        alt="Neil Patel Photo"
                      />
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
                      <b-img-lazy
                        v-bind="specialist_avatar"
                        :src="require('~/assets/img/Specialist/Jim_Lecinsk.jpeg').src"
                        :srcset="require('~/assets/img/Specialist/Jim_Lecinsk.jpeg').srcSet"
                        :blank-src="require('~/assets/img/Specialist/Jim_Lecinsk.jpeg').placeholder"
                        fluid
                        alt="Jim Lecinsk Photo"
                      />
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
                      <b-img-lazy
                        v-bind="specialist_avatar"
                        :src="require('~/assets/img/Specialist/David_Meerman_Scott.png').src"
                        :srcset="require('~/assets/img/Specialist/David_Meerman_Scott.png').srcSet"
                        :blank-src="require('~/assets/img/Specialist/David_Meerman_Scott.png').placeholder"
                        fluid
                        alt="David Meerman Scott Photo"
                      />
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
                      <b-img-lazy
                        v-bind="specialist_avatar"
                        :src="require('~/assets/img/Specialist/avinash_kaushik.png').src"
                        :srcset="require('~/assets/img/Specialist/avinash_kaushik.png').srcSet"
                        :blank-src="require('~/assets/img/Specialist/avinash_kaushik.png').placeholder"
                        fluid
                        alt="Avinash Kaushik Photo"
                      />
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
                      <b-img-lazy
                        v-bind="specialist_avatar"
                        :src="require('~/assets/img/Specialist/bryan_eisenberg.png').src"
                        :srcset="require('~/assets/img/Specialist/bryan_eisenberg.png').srcSet"
                        :blank-src="require('~/assets/img/Specialist/bryan_eisenberg.png').placeholder"
                        fluid
                        alt="Bryan Eisenberg Photo"
                      />
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
              <font-awesome-icon :icon="['fas', 'arrow-left']"/>
            </template>
            <template slot="nextButton">
              <font-awesome-icon :icon="['fas', 'arrow-right']"/>
            </template>
          </agile>
        </client-only>
      </div>
    </b-container>
  </section>
</template>

<script>
  export default {
    name: "SectionSpecialists",
    data: () => ({
      agileOptions: {
        autoplay: true,
        mobileFirst: true,
        navButtons: false,
        centerMode: true,
        infinite: true,
        slidesToShow: 1,
        dots: true,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 3
            }
          }
        ]
      },
      specialist_avatar: {blank: false, width: 85, height: 85, class:'m2'},
    })
  }
</script>

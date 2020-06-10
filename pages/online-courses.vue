<template>
  <div id="online-courses-page">
    <section>
      <b-container class="navbar">
        <b-navbar-brand>
          <picture>
            <source srcset="../assets/img/zmot-logo.webp" type="image/webp" />
            <source srcset="../assets/img/zmot-logo.png" type="image/png" />
            <b-img v-bind="logoProp" src="../assets/img/zmot-logo.png" fluid alt="zmot-institute white logo"></b-img>
          </picture>
        </b-navbar-brand>
      </b-container>
    </section>
    <section>
      <b-container>
        <b-row class="online-courses-wrapper">
          <b-col md="5" sm="12">
            <h1 class="text-center">{{$t('online_courses.header')}}</h1>
            <p class="text-center">{{$t('online_courses.text_1')}}</p>
            <p class="text-center">{{$t('online_courses.text_2')}}</p>
          </b-col>

          <b-col md="5" sm="12">
            <b-form @submit.prevent="onSubmit">
              <b-form-group>
                <b-form-input :type="'email'" v-model="email" required placeholder="Email"></b-form-input>
                <b-form-input :type="'text'" v-model="name" required placeholder="Name"></b-form-input>
                <b-form-input :type="'text'" v-model="surname" required placeholder="Surname"></b-form-input>
                <vue-tel-input v-model="phone" v-bind="bindProps"></vue-tel-input>
                <recaptcha
                  @error="onError"
                  @success="onSuccess"
                  @expired="onExpired"
                />
                <b-toast
                  id="error-toast"
                  static
                  auto-hide-delay="3000"
                  no-close-button
                  variant="danger"
                >
                  Please verify the captcha
                </b-toast>
                <b-button type='submit'>
                  {{$t('online_courses.submit')}}
                </b-button>
              </b-form-group>
            </b-form>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <div id="page-submitting" v-if="submitting">
      <loading
        :active.sync="submitting"
        :can-cancel="false"
        :is-full-page="true"
        color="white"
      >
      </loading>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import {hubSpotPortalId, hubSpotFormGuid} from "@/config";
  import Loading from 'vue-loading-overlay';
  import {telInputOption} from "@/config";

  export default {
    nuxtI18n: {
      paths: {
        en: '/online-courses',
        es: '/cursos-online',
        'pt-br':  '/cursos-online'
      }
    },
    components: {
      'Loading': Loading
    },
    data: () => ({
      logoProp: {blank: false, width: 250, class: 'm2'},
      email: "",
      name: "",
      surname: "",
      phone: "",
      submitting: false,
      bindProps: telInputOption
    }),
    methods: {
      async onSubmit() {
        try {
          const token = await this.$recaptcha.getResponse();
          console.log('ReCaptcha token:', token);

          this.submitting = true;
          const data = {
            fields: [
              {
                name: "email",
                value: this.email
              },
              {
                name: "firstname",
                value: this.name
              },
              {
                name: "lastname",
                value: this.surname
              },
              {
                name: "phone",
                value: this.phone
              }
            ]
          };

          await axios.post(
            `https://api.hsforms.com/submissions/v3/integration/submit/${hubSpotPortalId}/${hubSpotFormGuid}`,
            data
          )
            .then(res => {
              this.submitting = false;
              console.log('success', res);
            })
            .catch((err) => {
              this.submitting = false;
              console.log('fail', err);
            });

          await this.$recaptcha.reset();
        } catch (error) {
          console.log('error:', error);
        }
      },
      onError (error) {
        console.log('Error happened:', error);
        this.$bvToast.show('error-toast');
      },
      onSuccess (token) {
        console.log('Succeeded:', token);
      },
      onExpired () {
        console.log('Expired');
      }
    },
    async mounted() {
      $nuxt.$emit('hide-header-footer');
    }
  }
</script>

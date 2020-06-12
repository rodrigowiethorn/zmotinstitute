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
          <b-col md="6" sm="12">
            <h1>{{$t('online_courses.header')}}</h1>
            <p>{{$t('online_courses.text_1')}}</p>
            <p>{{$t('online_courses.text_2')}}</p>
          </b-col>

          <b-col md="5" sm="12">
            <b-form @submit.prevent="onSubmit">
              <b-form-group>
                <b-form-input :type="'email'" v-model="email" required v-bind:placeholder="$t('placeholder.email')"></b-form-input>
                <b-form-input :type="'text'" v-model="name" required v-bind:placeholder="$t('placeholder.name')"></b-form-input>
                <b-form-input :type="'text'" v-model="surname" required v-bind:placeholder="$t('placeholder.surname')"></b-form-input>
                <vue-tel-input
                  v-model="phone"
                  v-bind="bindProps"
                  v-on:country-changed="countryChanged"
                  required
                  v-bind:placeholder="$t('placeholder.phone')"
                ></vue-tel-input>
                <recaptcha
                  @error="onError"
                  @success="onSuccess"
                  @expired="onExpired"
                />
                <div class="button-wrapper">
                  <b-button type='submit'>
                    {{$t('online_courses.submit')}}
                  </b-button>
                </div>
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
      country: "",
      submitting: false,
      bindProps: telInputOption
    }),
    methods: {
      countryChanged(country) {
        this.country = country.dialCode;
        this.phone = "+" + country.dialCode + " ";
      },
      async onSubmit() {
        try {
          const token = await this.$recaptcha.getResponse();
          console.log('ReCaptcha token:', token);
          const url = window.location.href;
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
              },
              {
                name: "service_interest",
                value: "online-courses"
              },
              {
                name: "form_url",
                value: url
              }
            ]
          };
          await axios.post(
            `https://api.hsforms.com/submissions/v3/integration/submit/${hubSpotPortalId}/${hubSpotFormGuid}`,
            data
          )
            .then(res => {
              this.submitting = false;
              this.showSuccessToast();
            })
            .catch((err) => {
              this.submitting = false;
              if (err.response.data.errors[0].message.indexOf('phone') !== -1) {
                this.showPhoneNumberErrorToast();
              } else {
                this.showErrorToast();
              }
            });
          await this.$recaptcha.reset();
        } catch (error) {
          console.log('error:', error);
        }
      },
      showSuccessToast() {
        this.$bvToast.toast(this.$t('online_courses.success'), {
          title: ``,
          toaster: 'b-toaster-top-right',
          variant: 'success',
          solid: true,
          appendToast: false,
          autoHideDelay: 3000,
          noCloseButton: true
        })
      },
      showErrorToast() {
        this.$bvToast.toast(this.$t('online_courses.failed'), {
          title: ``,
          toaster: 'b-toaster-top-right',
          variant: 'danger',
          solid: true,
          appendToast: false,
          autoHideDelay: 3000,
          noCloseButton: true
        })
      },
      showPhoneNumberErrorToast() {
        this.$bvToast.toast('Enter valid phone number', {
          title: ``,
          toaster: 'b-toaster-top-right',
          variant: 'danger',
          solid: true,
          appendToast: false,
          autoHideDelay: 3000,
          noCloseButton: true
        })
      },
      onError (error) {
        console.log('Error happened:', error);
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
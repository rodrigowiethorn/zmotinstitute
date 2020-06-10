<template>
  <div id="online-courses-page">
    <section>
      <b-container>
        <b-row class="online-courses-wrapper">
          <b-col md="5" sm="12">
            <h1 class="text-center">{{$t('online_courses.header')}}</h1>
            <p class="text-center">{{$t('online_courses.text_1')}}</p>
            <p class="text-center">{{$t('online_courses.text_2')}}</p>
          </b-col>

          <b-col md="5" sm="12">
            <b-form @submit="onSubmit">
              <b-form-group>
                <b-form-input :type="'email'" v-model="email" required placeholder="Email"></b-form-input>
                <b-form-input :type="'text'" v-model="name" required placeholder="Name"></b-form-input>
                <b-form-input :type="'text'" v-model="surname" required placeholder="Surname"></b-form-input>
                <vue-tel-input v-model="phone" v-bind="bindProps"></vue-tel-input>
                <b-button type='submit'>
                  {{$t('online_courses.submit')}}
                </b-button>
              </b-form-group>
            </b-form>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
  import axios from "axios";
  import {hubspotAPIKey} from "@/config";

  export default {
    nuxtI18n: {
      paths: {
        en: '/online-courses',
        es: '/cursos-online',
        'pt-br':  '/cursos-online'
      }
    },
    components: {
    },
    data: () => ({
      email: "",
      name: "",
      surname: "",
      phone: "",
      bindProps: {
        mode: "international",
        // defaultCountry: "FR",
        disabledFetchingCountry: false,
        disabled: false,
        disabledFormatting: false,
        placeholder: "Enter a phone number",
        required: true,
        validCharactersOnly: true,
        enabledCountryCode: false,
        enabledFlags: true,
        // preferredCountries: ["AU", "BR"],
        onlyCountries: [],
        ignoredCountries: [],
        autocomplete: "off",
        name: "phone",
        maxLen: 25,
        wrapperClasses: "",
        inputClasses: "",
        dropdownOptions: {
          disabledDialCode: false
        },
        inputOptions: {
          showDialCode: true
        }
      }
    }),
    methods: {
      async onSubmit(evt) {
        try {
          evt.preventDefault();
          const token = await this.$recaptcha.execute('login');
          console.log('ReCaptcha token:', token);
          const data = {
            email: this.email,
            name: this.name,
            surname: this.surname,
            phone: this.phone
          };
          await axios.post(`https://api.hubapi.com/contacts/v1/contact/?hapikey=${hubspotAPIKey}`, data)
            .then(res => {
              console.log('hubspot res', res);
            })
            .catch((err) => {
              console.log('hubspot err', err);
            });
        } catch (error) {
          console.log('Login error:', error);
        }
      }
    },
    async mounted() {
      console.log(this.$recaptcha.siteKey);
      await this.$recaptcha.init();
    }
  }
</script>

<template>
  <div id="zmot-audit-page">
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
        <b-row class="zmot-audit-wrapper">
          <b-col md="5" sm="12">
            <h1 class="text-center">{{$t('zmot_audit.header')}}</h1>
            <p class="text-center">{{$t('zmot_audit.text_1')}}</p>
            <p class="text-center">{{$t('zmot_audit.text_2')}}</p>
          </b-col>

          <b-col md="5" sm="12">
            <b-form @submit="onSubmit">
              <b-form-group>
                <b-form-input :type="'email'" required placeholder="Email"></b-form-input>
                <b-form-input :type="'text'" required placeholder="Name"></b-form-input>
                <b-form-input :type="'text'" required placeholder="Surname"></b-form-input>
                <vue-tel-input v-bind="bindProps"></vue-tel-input>
                <b-button type="submit">{{$t('zmot_audit.submit')}}</b-button>
              </b-form-group>
            </b-form>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
  import {telInputOption} from "@/config";

  export default {
    nuxtI18n: {
      paths: {
        en: '/zmot-audit',
        es: '/auditoria-zmot',
        'pt-br':  '/auditoria-zmot'
      }
    },
    components: {
    },
    data: () => ({
      logoProp: {blank: false, width: 250, class: 'm2'},
      bindProps: telInputOption
    }),
    methods: {
      async onSubmit() {
        try {
          // const token = await this.$recaptcha.execute('login');
          // console.log('ReCaptcha token:', token);
        } catch (error) {
          // console.log('Login error:', error);
        }
      }
    },
    async mounted() {
      // await this.$recaptcha.init()

      $nuxt.$emit('hide-header-footer');
    }
  }
</script>

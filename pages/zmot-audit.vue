<template>
  <div id="zmot-audit-page">
    <section>
      <b-container>
        <b-row class="zmot-audit-wrapper">
          <b-col md="5" sm="12">
            <h1 class="text-center">{{$t('zmot-audit.header')}}</h1>
            <p class="text-center">{{$t('zmot-audit.text_1')}}</p>
            <p class="text-center">{{$t('zmot-audit.text_2')}}</p>
          </b-col>

          <b-col md="5" sm="12">
            <b-form @submit="onSubmit">
              <b-form-group>
                <b-form-input :type="'email'" required placeholder="Email"></b-form-input>
                <b-form-input :type="'text'" required placeholder="Name"></b-form-input>
                <b-form-input :type="'text'" required placeholder="Surname"></b-form-input>
                <vue-tel-input v-bind="bindProps"></vue-tel-input>
                <b-button type="submit">{{$t('zmot-audit.submit')}}</b-button>
              </b-form-group>
            </b-form>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
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
        name: "telephone",
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
      async onSubmit() {
        try {
          const token = await this.$recaptcha.execute('login')
          console.log('ReCaptcha token:', token)
        } catch (error) {
          console.log('Login error:', error)
        }
      }
    },
    async mounted() {
      await this.$recaptcha.init()
    }
  }
</script>

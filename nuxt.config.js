module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/zmot-institute-android-chrome-192x192.png' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/style.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: './plugins/GoogleAnalytics.js',
      mode: 'client'
    },
    { src: "@/plugins/aos",
      ssr: false
    },
    { src: '@/plugins/vue-agile',
      ssr: false
    }
  ],
  router: {
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    'nuxt-fontawesome',
    ['nuxt-i18n', {
      locales: [
        {
          name: 'English',
          code: 'en',
          iso: 'en-US'
        },
        {
          name: 'Português',
          code: 'pt-br',
          iso: 'pt-BR'
        },
        {
          name: 'Español',
          code: 'es',
          iso: 'es-ES'
        },
      ],
      defaultLocale: 'en',
      detectBrowserLanguage: {
        useCookie: true,
        alwaysRedirect: true
      },
      vueI18n: {
        fallbackLocale: 'en',
        messages: {
          en: require('./locales/en.json'),
          pt: require('./locales/pt-br.json'),
          es: require('./locales/es.json')
        }
      }
    }],
    [
      "@nuxtjs/google-tag-manager",
      {
        id: "GTM-K3SW4XN",
        pageTracking: true
      }
    ]
  ],
  /*
  ** Build configuration
  */
  build: {
  }
}

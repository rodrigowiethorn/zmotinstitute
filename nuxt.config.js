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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
    },
    { src: "@/plugins/i18n", 
      ssr: true
    }
  ],
  router: {
    middleware: ['i18n'],
    extendRoutes (routes, resolve) {
    }
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
  ],
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'vue-i18n',
    ],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}

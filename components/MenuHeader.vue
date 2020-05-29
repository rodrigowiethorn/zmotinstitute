<template>
  <b-navbar toggleable="lg" type="dark">
    <b-container class="bv-example-row bv-example-row-flex-cols">
      <nuxt-link :to="localePath('index')">
        <b-navbar-brand>
          <picture>
            <source srcset="../assets/img/zmot-logo.webp" type="image/webp">
            <b-img v-bind="logoProp" src="../assets/img/zmot-logo.png" fluid alt=""></b-img>
          </picture>
        </b-navbar-brand>
      </nuxt-link>

      <b-nav-item-dropdown :text="localeToLang" right class="burger-langpicker">
        <b-dropdown-item :to="switchLocalePath('en')">
          <b-img src="../assets/img/svg/en.svg" width="25"></b-img>
          English
        </b-dropdown-item>
        <b-dropdown-item :to="switchLocalePath('pt-br')">
          <b-img src="../assets/img/svg/br.svg" width="25"></b-img>
          Português
        </b-dropdown-item>
        <b-dropdown-item :to="switchLocalePath('es')">
          <b-img src="../assets/img/svg/es.svg" width="25"></b-img>
          Español
        </b-dropdown-item>
      </b-nav-item-dropdown>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <!-- Right aligned nav items -->
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <li class="pg-nav">
            <b-dropdown-item><nuxt-link :to="localePath('index')">{{$t('navs.home.title')}}</nuxt-link></b-dropdown-item>
          </li>
          <li class="pg-nav">
            <b-dropdown-item><nuxt-link :to="localePath('blogs')">{{$t('navs.blog.title')}}</nuxt-link></b-dropdown-item>
          </li>
          <li class="pg-nav">
            <b-dropdown-item><nuxt-link :to="localePath('contact')">{{$t('navs.contact.title')}}</nuxt-link></b-dropdown-item>
          </li>
          <b-nav-item-dropdown :text="localeToLang" right class="langpicker">
            <b-dropdown-item :to="switchLocalePath('en')">
              <b-img src="../assets/img/svg/en.svg" width="25"></b-img>
              English
            </b-dropdown-item>
            <b-dropdown-item :to="switchLocalePath('pt-br')">
              <b-img src="../assets/img/svg/br.svg" width="25"></b-img>
              Português
            </b-dropdown-item>
            <b-dropdown-item :to="switchLocalePath('es')">
              <b-img src="../assets/img/svg/es.svg" width="25"></b-img>
              Español
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>
<style>

  @media screen and (max-width: 467px){
    .nuxt-link-active {
      width: 50%;
    }
    .navbar-brand {
      width: 100%;
    }

    .bv-example-row {
      display: flex;
      min-width: 250px;
    }

    .navbar-dark .navbar-toggler {
      width: 10%;
    }
  }

  nav.navbar {
    min-height: 80px;
  }

  nav.navbar .container ul.navbar-nav li.pg-nav {
    padding: 0;
  }

  nav.navbar .container ul.navbar-nav li.pg-nav a {
    background-color: transparent;
    padding: 0.25rem 1.25rem;
  }

  nav.navbar .container ul.navbar-nav li.pg-nav a:hover {
    text-decoration: underline;
  }

  .navbar-dark .navbar-toggler {
    outline: none;
    border: none;
  }

</style>
<script>

  export default {
    name: "MenuHeader",
    data: () => ({
      logoProp: {blank: false, width: 250, class: 'm2'},
      menuVisible: true,
    }),
    methods: {
      switchLang(locale) {
        if (locale === this.$store.state.i18n.locale) {
          return;
        }

        // update store info
        this.$store.commit('i18n/i18nSetLocale', locale);

        // fetch new locale file
        import(`../locales/${locale}`).then(module => {
          // update i18n's locale instance
          this.$i18n.locale = locale;
          // set new messages from new locale file
          this.$i18n.setLocaleMessage(locale, module.default);
          // update url to point to new path, without reloading the page
          window.history.replaceState('', '', this.switchLocalePath(locale));
        });
      }
    },
    computed: {
      localeToLang() {
        let lang = this.$i18n.locale
        if (lang == 'en')
          return 'English'
        else if (lang == 'pt-br')
          return 'Português'
        else if (lang == 'es')
          return 'Español'
      }
    }
  };
</script>

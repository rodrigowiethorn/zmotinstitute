<template>
    <b-navbar toggleable="lg" type="dark">
        <b-container class="bv-example-row bv-example-row-flex-cols">
            <nuxt-link :to="localePath('index')">
                <b-navbar-brand><b-img v-bind="logoProp" src="../assets/img/zmot-logo.webp" fluid></b-img></b-navbar-brand>
            </nuxt-link>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <!-- Right aligned nav items -->
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <li class="pg-nav">
                        <nuxt-link :to="localePath('index')">{{$t('navs.home.title')}}</nuxt-link>
                    </li>
                    <li class="pg-nav">
                        <nuxt-link :to="localePath('blogs')">{{$t('navs.blog.title')}}</nuxt-link>
                    </li>
                    <li class="pg-nav">
                        <nuxt-link :to="localePath('contact')">{{$t('navs.contact.title')}}</nuxt-link>
                    </li>
                    <b-nav-item-dropdown :text="localeToLang" right>
                        <b-dropdown-item :to="switchLocalePath('en')"><b-img src="../assets/img/svg/en.svg" width="25"></b-img>English</b-dropdown-item>
                        <b-dropdown-item :to="switchLocalePath('pt-br')"><b-img src="../assets/img/svg/br.svg" width="25"></b-img>Português</b-dropdown-item>
                        <b-dropdown-item :to="switchLocalePath('es')"><b-img src="../assets/img/svg/es.svg" width="25"></b-img>Español</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
</template>
<script>

export default {
    name: "MenuHeader",
    data: () => ({
        logoProp: {blank: false, width: 250, class:'m2'},
    }),
    methods: {
    },
    computed: {
        localeToLang () {
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
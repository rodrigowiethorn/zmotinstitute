<template>
    <b-navbar toggleable="lg" type="dark">
        <b-container class="bv-example-row bv-example-row-flex-cols">
            <nuxt-link :to="$i18n.path('')"><b-navbar-brand><b-img v-bind="logoProp" src="../assets/img/zmot-logo.webp" fluid></b-img></b-navbar-brand></nuxt-link>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <!-- Right aligned nav items -->
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <li class="pg-nav">
                        <nuxt-link :to="$i18n.path('')">{{$t('navs.home.title')}}</nuxt-link>
                    </li>
                    <li class="pg-nav">
                        <nuxt-link :to="$i18n.path('blog')">{{$t('navs.blog.title')}}</nuxt-link>
                    </li>
                    <li class="pg-nav">
                        <nuxt-link :to="$i18n.path('contact')">{{$t('navs.contact.title')}}</nuxt-link>
                    </li>
                    <b-nav-item-dropdown text="Lang" right>
                        <b-dropdown-item :to="$route.fullPath.replace(/^\/[^\/]+/, '')">en</b-dropdown-item>
                        <b-dropdown-item v-if="$i18n.locale === 'en'" :to="`/pt-br` + $route.fullPath">pt-br</b-dropdown-item>
                        <b-dropdown-item v-else :to="`/pt-br` + $route.fullPath.replace(/^\/[^\/]+/, '')">pt-br</b-dropdown-item>
                        <b-dropdown-item v-if="$i18n.locale === 'en'" :to="`/es` + $route.fullPath">es</b-dropdown-item>
                        <b-dropdown-item v-else :to="`/es` + $route.fullPath.replace(/^\/[^\/]+/, '')">es</b-dropdown-item>
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
    }
};
</script>
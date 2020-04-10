<template>
    <b-navbar toggleable="lg" type="dark">
        <b-container class="bv-example-row bv-example-row-flex-cols">
            <nuxt-link to='/'><b-navbar-brand><b-img v-bind="logoProp" src="../assets/img/zmot-logo.webp" fluid></b-img></b-navbar-brand></nuxt-link>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <li>
                    <nuxt-link to="/">Home</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/blogs">Blogs</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/contact">Contact</nuxt-link>
                </li>
            </b-navbar-nav>
        </b-container>
    </b-navbar>
</template>
<script>

export default {
    name: "MenuHeader",
    components: {},
    data: () => ({
        logoProp: {blank: false, width: 250, class:'m2'}
    }),
    methods: {}
};
</script>
<style lang="scss">
@import '../assets/scss/header_menu.scss';
</style>
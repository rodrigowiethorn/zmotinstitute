<template>
    <b-navbar toggleable="lg" type="dark">
        <b-container class="bv-example-row bv-example-row-flex-cols">
            <b-navbar-brand href="#"><b-img v-bind="logoProp" src="../assets/img/zmot-logo.webp" fluid></b-img></b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-item href="#">Home</b-nav-item>
                <b-nav-item href="#">Blog</b-nav-item>
                <b-nav-item href="#">Contacto</b-nav-item>

                <!-- <b-nav-item-dropdown text="Lang" right>
                    <b-dropdown-item href="#">EN</b-dropdown-item>
                    <b-dropdown-item href="#">ES</b-dropdown-item>
                    <b-dropdown-item href="#">RU</b-dropdown-item>
                    <b-dropdown-item href="#">FA</b-dropdown-item>
                </b-nav-item-dropdown> -->
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
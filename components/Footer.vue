<template>
    <div class="app-footer">
        <b-container>
            <b-row>
                <b-col>
                    <img v-bind="footerLogo" src="../assets/img/zmot-logo.webp" alt="Brand logo" class="footer-new-holder-right-holder__brand">
                    <p>
                        Our mission is to make life easier for website developers and their customers. We do it by offering easy to use, fast and reliable web hosting services.
                    </p>
                </b-col>
                <b-col></b-col>
                <b-col>
                    <div class="social-links">
                        <b-link><font-awesome-icon :icon="['fab', 'linkedin']" /></b-link>
                        <b-link><font-awesome-icon :icon="['fab', 'instagram']" /></b-link>
                        <b-link><font-awesome-icon :icon="['fab', 'facebook-f']" /></b-link>
                        <b-link><font-awesome-icon :icon="['fab', 'twitter']" /></b-link>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>

    import {library} from '@fortawesome/fontawesome-svg-core'
    import {faFacebookF, faLinkedin, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(faFacebookF, faLinkedin, faInstagram, faTwitter);
    export default {
        name: "Footer",
        components: {
        'font-awesome-icon': FontAwesomeIcon,
        },
        data: () => ({footerLogo: {blank: false, width: 300, class:'m2'}}),
        methods: {}
    };
</script>
<style lang="scss">
@import '../assets/scss/footer.scss'
</style>
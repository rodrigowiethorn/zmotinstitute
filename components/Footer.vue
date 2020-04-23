<template>
    <div class="app-footer">
        <b-container>
            <b-row>
                <b-col md="4" sm="1">
                    <img v-bind="footerLogo" src="../assets/img/zmot-logo.webp" alt="Brand logo" class="footer-new-holder-right-holder__brand">
                    <p>
                        {{$t('footer')}}
                    </p>
                </b-col>
                <b-col md="6" sm="6">
                    <b-row class="mt-3">
                        <b-col>
                            <h5>SERVICES</h5>
                            <ul>
                                <li><nuxt-link :to="$i18n.path('')">ZMOT Audit</nuxt-link></li>
                                <li><nuxt-link :to="$i18n.path('')">Speeches & Lectures</nuxt-link></li>
                                <li><nuxt-link :to="$i18n.path('')">Online Course</nuxt-link></li>
                            </ul>
                        </b-col>
                        <b-col>
                            <h5>KNOWLEDGE</h5>
                            <ul>
                                <li><nuxt-link :to="$i18n.path('')">Blog</nuxt-link></li>
                                <li><nuxt-link :to="$i18n.path('')">Newsletter</nuxt-link></li>
                            </ul>
                        </b-col>
                        <b-col>
                            <h5>LEGAL</h5>
                            <ul>
                                <li><nuxt-link :to="$i18n.path('')">Privacy Policy</nuxt-link></li>
                            </ul>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col md="2" sm="6">
                    <div class="social-links mt-3">
                        <b-link><font-awesome-icon :icon="['fab', 'linkedin']" /></b-link>
                        <b-link><font-awesome-icon :icon="['fab', 'facebook-f']" /></b-link>
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
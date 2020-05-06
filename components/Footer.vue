<template>
    <div class="app-footer">
        <b-container>
            <b-row>
                <b-col md="4" sm="12">
                    <img v-bind="footerLogo" src="../assets/img/zmot-logo.webp" alt="Brand logo" class="footer-new-holder-right-holder__brand">
                    <p>
                        {{$t('footer.text')}}
                    </p>
                </b-col>
                <b-col md="6" sm="6">
                    <b-row class="mt-3">
                        <b-col>
                            <h5>{{$t('footer.services.text')}}</h5>
                            <ul>
                                <li><nuxt-link :to="localePath('index')">{{$t('homepage.services.service_1_header')}}</nuxt-link></li>
                                <li><nuxt-link :to="localePath('index')">{{$t('homepage.services.service_2_header')}}</nuxt-link></li>
                                <li><nuxt-link :to="localePath('index')">{{$t('homepage.services.service_3_header')}}</nuxt-link></li>
                            </ul>
                        </b-col>
                        <b-col>
                            <h5>{{$t('footer.knowledge.text')}}</h5>
                            <ul>
                                <li><nuxt-link :to="localePath('index')">{{$t('footer.blog')}}</nuxt-link></li>
                                <li><nuxt-link :to="localePath('index')">{{$t('footer.newsletter')}}</nuxt-link></li>
                            </ul>
                        </b-col>
                        <b-col>
                            <h5>{{$t('footer.legal.text')}}</h5>
                            <ul>
                                <li><nuxt-link :to="localePath('index')">{{$t('footer.privacy_policy.text')}}</nuxt-link></li>
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
<template>
  <div class="social-link">
    <div>
      <img class="social-image" src="../assets/img/social-links/twitter.svg"/>
    </div>
    <div>
      <img class="social-image" src="../assets/img/social-links/facebook.svg"/>
    </div>
    <div>
      <img class="social-image" src="../assets/img/social-links/message.svg"/>
    </div>
  </div>
</template>

<style>
  .social-link {
    position: fixed;
    top: 20%;
    left: 0;
  }
  .social-image {
    width: 30px;
    height: 30px;
  }
</style>

<script>
  import {library} from '@fortawesome/fontawesome-svg-core'
  import {faFacebookF, faLinkedin, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
  import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

  library.add(faFacebookF, faLinkedin, faInstagram, faTwitter);
  export default {
    name: "SocialLinks",
    components: {
      'font-awesome-icon': FontAwesomeIcon,
    },
    data: () => ({
      footerLogo: {
        blank: false,
        width: 300,
        class:'m2'
      }}),
    methods: {}
  };
</script>

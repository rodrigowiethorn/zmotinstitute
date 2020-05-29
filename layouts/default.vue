<template>
  <div class="page">
    <!--  https://developers.facebook.com/docs/javascript/quickstart -->
    <script>
      window.fbAsyncInit = function() {
        FB.init({
          appId            : 'your-app-id',
          autoLogAppEvents : true,
          xfbml            : true,
          version          : 'v7.0'
        });
      };
    </script>
    <script async defer src="https://connect.facebook.net/en_US/sdk.js"></script>
    <MenuHeader />
<!--    <SocialLinks/>-->
    <no-ssr>
      <nuxt />
    </no-ssr>
    <no-ssr>
      <Footer />
    </no-ssr>
    <no-ssr>
      <Cookie />
    </no-ssr>
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

  .page {
    min-width: 300px;
  }

</style>
<script>
  import MenuHeader from "@/components/MenuHeader.vue";
  import Footer from "@/components/Footer.vue";
  import Cookie from "@/components/Cookie.vue";
  import SocialLinks from "@/components/SocialLinks";

  export default {
    components: {SocialLinks, MenuHeader, Footer, Cookie }
  }
</script>

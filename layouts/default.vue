<template>
  <div class="page">
    <MenuHeader v-if="visibleHeaderFooter"/>
    <no-ssr>
      <nuxt />
    </no-ssr>
    <no-ssr>
      <Footer v-if="visibleHeaderFooter"/>
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
  scroll-behavior: smooth;
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

  export default {
    components: { MenuHeader, Footer, Cookie },
    data: () => ({
      visibleHeaderFooter: true
    }),
    mounted() {
      $nuxt.$on('hide-header-footer', () => {
        this.visibleHeaderFooter = false;
      });

      $nuxt.$on('show-header-footer', () => {
        this.visibleHeaderFooter = true;
      });
    }
  }
</script>

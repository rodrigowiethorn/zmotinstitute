<template>
  <div id="home-page">
    <lazy-hydrate when-visible>
      <section-banner />
    </lazy-hydrate>

    <lazy-hydrate when-visible>
      <section-why-zmot />
    </lazy-hydrate>

    <lazy-hydrate when-visible>
      <section-specialists />
    </lazy-hydrate>

    <lazy-hydrate when-visible>
      <section-services />
    </lazy-hydrate>

    <lazy-hydrate when-visible>
      <section-say-about-us />
    </lazy-hydrate>

    <!-- <lazy-hydrate when-visible>
      <section-blogs />
    </lazy-hydrate> -->

    <client-only>
      <lazy-hydrate>
        <NewsLetter slot-scope="{ hydrated }" v-if="hydrated" />
      </lazy-hydrate>
    </client-only>
  </div>
</template>

<script>
  export default {
    head () {
      return {
        title: this.$t('homepage.seo.title'),
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.$t('homepage.seo.description'),
          },
          {
            hid: 'twitter-card',
            name: 'twitter:card',
            content: 'summary'
          },
          {
            hid: 'og-title',
            property: 'og:title',
            content: this.$t('homepage.seo.title')
          },
          {
            hid: 'og-description',
            property: 'og:description',
            content: this.$t('homepage.seo.description')
          },
          {
            hid: 'og-image',
            property: 'og:image',
            content: '../assets/img/header-zmot.webp'
          },
          {
            hid: 'og-url',
            property: 'og:url',
            content: this.$route.path
          }
        ]
      }
    },
    components: {
      SectionBlogs: () => import('~/components/Home/SectionBlogs'),
      SectionSayAboutUs: () => import('~/components/Home/SectionSayAboutUs'),
      SectionServices: () => import('~/components/Home/SectionServices'),
      SectionSpecialists: () => import('~/components/Home/SectionSpecialists'),
      SectionWhyZmot: () => import('~/components/Home/SectionWhyZmot'),
      SectionBanner: () => import('~/components/Home/SectionBanner'),
      NewsLetter: () => import('~/components/NewsLetter'),
    },
    mounted: function () {
      $nuxt.$emit('show-header-footer');
    }
}
</script>

<template>
    <section class="news-letter">
      <b-container>
        <b-row data-aos="zoom-in">
          <b-col offset-md="2" md="8">
            <h2 class="text-center">Find the perfect domain name</h2>
            <p class="text-center">Enter domain name of your choice and pick any extension name on the next step (choose between .com, .xyz, .online, .tech, .site, .net and many more)</p>
            <div class="search-form">
              <b-form-input placeholder="Enter your desired domain name"></b-form-input>
              <b-button variant="danger">Search</b-button>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
</template>

<script>
export default {
    name: "NewsLetter",
    components: {},
    data: () => ({
    }),
    methods: {}
};
</script>
<style lang="scss">
@import '../assets/scss/newsletter.scss';
</style>
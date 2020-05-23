<template>
    <section class="news-letter">
      <b-container>
        <b-row data-aos="zoom-in" data-aos-once="true" id="newsletter">
          <b-col offset-md="2" md="8">
            <h2 class="text-center">
              {{$t('news_letter.header')}}
            </h2>
            <p class="text-center">{{$t('news_letter.text')}}</p>
            <div class="search-form">
              <b-form-input></b-form-input>
              <b-button variant="danger">{{$t('news_letter.subscribe')}}</b-button>
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

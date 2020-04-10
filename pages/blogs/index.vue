<template>
  <div>
<b-container>
      <section id="blogs">
        <a href="#" class="blog--item" data-aos="fade-up">
          <b-card no-body class="overflow-hidden" >
            <b-row no-gutters>
              <b-col md="5" sm="5" xs="12">
                <b-card-img src="../../assets/img/blogs/file-encryption.jpg" alt="Image" class="rounded-0"></b-card-img>
              </b-col>
              <b-col md="7" sm="7" xs="12">
                <b-card-body title="Horizontal Card">
                  <b-card-text>
                    Nesse Guia de Mídia vamos te mostrar como o brasileiro tem consumido mídia e tendências de publicidade na TV, Internet, Rádio e outros meios.
                  </b-card-text>
                  <div class="card-meta">
                    03/08/2019 by RafaelH with No Comment Sem categoria
                  </div>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </a>
        <a href="#" class="blog--item"  data-aos="fade-up">
          <b-card no-body class="overflow-hidden">
            <b-row no-gutters>
              <b-col md="5" sm="5" xs="12">
                <b-card-img src="../../assets/img/blogs/parents-guide-internet-safety-blog.jpg" alt="Image" class="rounded-0"></b-card-img>
              </b-col>
              <b-col md="7" sm="7" xs="12">
                <b-card-body title="Horizontal Card">
                  <b-card-text>
                    Nesse Guia de Mídia vamos te mostrar como o brasileiro tem consumido mídia e tendências de publicidade na TV, Internet, Rádio e outros meios.
                  </b-card-text>
                  <div class="card-meta">
                    03/08/2019 by RafaelH with No Comment Sem categoria
                  </div>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </a>
        <a href="#" class="blog--item"  data-aos="fade-up">
          <b-card no-body class="overflow-hidden">
            <b-row no-gutters>
              <b-col md="5" sm="5" xs="12">
                <b-card-img src="../../assets/img/blogs/NordVPN-app-update-macos.png" alt="Image" class="rounded-0"></b-card-img>
              </b-col>
              <b-col md="7" sm="7" xs="12">
                <b-card-body title="Horizontal Card">
                  <b-card-text>
                    Nesse Guia de Mídia vamos te mostrar como o brasileiro tem consumido mídia e tendências de publicidade na TV, Internet, Rádio e outros meios.
                  </b-card-text>
                  <div class="card-meta">
                    03/08/2019 by RafaelH with No Comment Sem categoria
                  </div>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </a>
        <b-pagination-nav size="lg" number-of-pages="10" base-url="#"></b-pagination-nav>
      </section>
    </b-container>
    <NewsLetter  />
  </div>
    
</template>

<script>
  import NewsLetter from "@/components/NewsLetter.vue";
  export default {
    components: {
      'NewsLetter': NewsLetter,
    },
    data: () => ({
        rows: 100,
        currentPage: 1
    }),
}
</script>

<style lang="scss">
@import '../../assets/scss/blog.scss';
</style>


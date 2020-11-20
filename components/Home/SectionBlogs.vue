<template>
  <section class="blogs mt-5 mb-5" data-aos="fade-down" data-aos-easing="linear" data-aos-once="true"
           data-aos-duration="500">
    <b-container>
      <h2 class="text-center">Blog</h2>
      <p class="text-center">{{$t('homepage.blog.text')}}</p>
      <div class="blog--list">
        <b-row>
          <b-col md="4" sm="12" v-for="(post, index) of stickyPosts" :key="post.id">
            <b-card
              :img-src="require('~/assets/img/blog/home-blog-' + index + '.png')"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-2 blog--card"
            >
              <div class="card-meta">
                <span class="text-small">{{ moment(post.date).format('MMMM Do YYYY') }}</span>
              </div>
              <div class="card-title">

                <nuxt-link
                  :to="localePath({
                        name: 'blog-slug',
                        params: { slug: post.slug }
                      })"
                  id="AcessBlogHome-Headline"
                >
                  {{post.title.rendered}}
                </nuxt-link>
              </div>
              <nuxt-link
                :to="localePath({
                      name: 'blog-slug',
                      params: { slug: post.slug }
                    })"
                class="btn btn-purple rounded-pill"
                id="AcessBlogHome-Button"
              >
                {{$t('homepage.blog.read_more')}}
              </nuxt-link>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </section>
</template>

<script>
  import axios from "axios";
  import moment from 'moment';

  export default {
    name: "SectionBlogs",
    async fetch () {
      try {
        const result = await axios.get('https://thezmot.com/wp-json/wp/v2/posts?include[]=490&include[]=147&include[]=584');
        this.stickyPosts = result.data && result.data.reverse();
      } catch(e) {
        this.stickyPosts = [];
      } finally {
      }
    },
    data: () => ({
      stickyPosts: [],
    }),
    methods: {
      moment: function (date) {
        return moment(date);
      }
    }
  }
</script>

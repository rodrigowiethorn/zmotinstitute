<template>
    <div id="blog" v-if="!this.isLoading">
        <b-container>
            <b-row>
                <b-col cols="9">
                    <div class="blog-main">
                        <div class="blog-media">
                            <b-img :src="post._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url" fluid alt="Responsive image"></b-img>
                        </div>
                        <header class="blog-header">
                            <h1 class="blog-title" v-html="post.excerpt.rendered"></h1>
                        </header>
                        <div class="blog-info ">
                            <div class="blog-date">
                                <time datetime="2019-03-08T17:10:45-03:00">{{ moment(post.date).format('MMMM Do YYYY') }}</time>
                            </div>
                            <div class="blog-comments"> <span class="meta-sep">with</span> <span class="meta-comment">no comment</span></div>
                        </div>
                        <div class="blog-content" v-html="post.content.rendered">
                        </div>
                    </div>
                </b-col>
                <b-col>
                    <div class="sidebar-content">
                        <div class="search">
                            <h3 class="title">Pesquisar</h3>
                            <b-form-input v-model="text" placeholder="Search here"></b-form-input>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
    <div v-else id="blog-loading">
        <loading :active.sync="isLoading" 
            :can-cancel="false" 
            :is-full-page="fullPage"
            :color="color"></loading>
    </div>
</template>

<script>
  import axios from 'axios';
  import moment from 'moment';
  import Loading from 'vue-loading-overlay';
  import 'vue-loading-overlay/dist/vue-loading.css';
  
  export default {
    components: {
        'Loading': Loading,
    },
    data: () => ({
        text: '',
        post: null,
        isLoading: true,
        fullPage: true,
        color: '#ff6600',
    }),
    mounted: function() {
        this.$nextTick(() => {
            this.$nuxt.$loading.start();
            this.getPost();
            this.$nuxt.$loading.finish();
        })
    },
    methods: {
        getPost: async function() {
            const result = await axios.get(`https://thezmot.com/wp-json/wp/v2/posts?slug=${this.$route.params.slug}&_embed=1`);
            this.post = result.data[0];
            this.isLoading = false;
        },
        moment: function (date) {
            return moment(date);
        }
    }
}
</script>
<template>
  <div id="contact-page">
      <section class="banner">
        <b-container>
            <b-row>
                <b-col>
                    <div class="elementor-spacer">
                        <div class="elementor-spacer-inner"></div>
                    </div>
                    <div class="banner-widget-heading pa-2">
                        <h2>{{$t('contact.banner.header')}}</h2>
                    </div>
                    <div class="banner-widget-text pa-2">
                        <p>{{$t('contact.banner.text')}}</p>
                    </div>
                    <div class="banner-buttons">
                      <b-row>
                        <b-col md="6" sm="12" class="button-wrapper">
                          <a href="https://wa.me/5548999831686" target="_blank">
                            <b-button pill variant="white">
                              {{$t('contact.banner.button.access_live_chat')}}
                            </b-button>
                          </a>
                        </b-col>
                        <b-col md="6" sm="12" class="button-wrapper">
                          <a href="#contact-form">
                            <b-button pill variant="white">{{$t('contact.banner.button.send_email')}}</b-button>
                          </a>
                        </b-col>
                      </b-row>
                    </div>
                </b-col>
                <b-col>
                  <picture>
                    <source srcset="../assets/img/contact/contact_hero.webp" type="image/webp" />
                    <source srcset="../assets/img/contact/contact_hero.png" type="image/png" />
                    <b-img src="../assets/img/contact/contact_hero.webp" fluid alt="Contact Hero Image"></b-img>
                  </picture>
                </b-col>
            </b-row>
        </b-container>
      </section>

      <section class="contact-form" id="contact-form">
          <b-container>
            <h2 class="text-center">{{$t('contact.form.contact')}}</h2>
            <p class="text-center">Tem alguma opinião ou sugestão de conteúdo? <br>Não perca tempo e nos <strong>envie uma mensagem.</strong></p>
            <b-row>
              <b-form @submit.prevent="onSubmit">
                <b-col offset-md="1" md="9" sm="12">
                  <b-form-group>
                    <b-row>
                      <b-col md="4" sm="12">
                        <b-form-input type="text" required placeholder="Name"></b-form-input>
                      </b-col>
                      <b-col md="4" sm="12">
                        <b-form-input type="text" required placeholder="Surname"></b-form-input>
                      </b-col>
                      <b-col md="4" sm="12">
                        <b-form-input type="email" required placeholder="Email"></b-form-input>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col md="12">
                        <b-form-textarea rows="5" required placeholder="Message"></b-form-textarea>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col md="12">
                        <b-button type="submit" variant="orange">{{$t('contact.form.send_email')}}</b-button>
                      </b-col>
                    </b-row>
                  </b-form-group>
                </b-col>
              </b-form>
            </b-row>
            <b-row>
                <b-col>
                    <div class="hubspot-link text-center">
                        <img src="https://js.hsforms.net/sproket.png" alt="Sproket Image" />
                        <span>Crie seu próprio</span>
                        <a href="https://app.hubspot.com/signup/marketing?hubs_medium=virality&amp;hubs_campaign=hubspot-forms-virality&amp;hubs_id=forms-branding-control&amp;hubs_source=thezmot.com&amp;intent=marketingFreeForms&amp;opt_sidebar=forms&amp;viralSourcePortalId=5835830" target="_blank">
                            formulário gratuito com o HubSpot
                        </a>
                    </div>
                </b-col>
            </b-row>
          </b-container>
      </section>
  </div>
</template>

<script>
  export default {
    components: {
    },
    data: () => ({
    }),
    mounted: function() {
      $nuxt.$emit('show-header-footer');
    },
    methods: {
      onSubmit() {

      }
    }
}
</script>

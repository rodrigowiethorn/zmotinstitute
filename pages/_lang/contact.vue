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
                        <b-button pill variant="white">{{$t('contact.banner.button.access_live_chat')}}</b-button>
                        <b-button pill variant="white">{{$t('contact.banner.button.send_email')}}</b-button>
                    </div>
                </b-col>
                <b-col>
                    <b-img src="../../assets/img/contact/contact_hero.webp" fluid alt="Responsive image"></b-img>
                </b-col>
            </b-row>
        </b-container>
      </section>

      <section class="contact-form">
          <b-container>
            <h2 class="text-center">Contato</h2>
            <p class="text-center">Tem alguma opinião ou sugestão de conteúdo? <br>Não perca tempo e nos <strong>envie uma mensagem.</strong></p>
            <b-row>
                <b-col offset-md="4" md="4">
                    <b-form-group>
                        <b-form-input placeholder="Email"></b-form-input>
                        <b-form-input placeholder="Name"></b-form-input>
                        <b-form-input placeholder="Sobernome"></b-form-input>
                        <b-form-input placeholder="Mensagem"></b-form-input>
                        <b-button variant="orange">Enviar Email</b-button>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <div class="hubspot-link text-center">
                        <img src="https://js.hsforms.net/sproket.png">
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
}
</script>

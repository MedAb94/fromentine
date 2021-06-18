<template>
  <div>
    <section class="hero">
      <v-container class="fill-height">
        <v-row class="fill-height" align="center" justify="stretch">
          <v-col class="text-center white--text">
            <h1 class="display-2">
              {{ $t('contact.title') }}
            </h1>
            <h1>{{ $t('contact.subtitle') }}</h1>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section id="contact" class=" pa-3 light pa-md-10">
      <v-row>
        <v-col cols="12" lg="6" md="6">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246.72257706498405!2d-73.6305443731106!3d45.603663952711685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDM2JzEzLjQiTiA3M8KwMzcnNDkuMCJX!5e0!3m2!1sen!2s!4v1623408551907!5m2!1sen!2s"
              width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">
          </iframe>
          <div>
            <v-icon color="primary" class="my-4">mdi-map-marker</v-icon>
            774A Boulevard Saint-Joseph, Gatineau, Québec J8Y 4B9
          </div>
          <div>
            <v-icon color="primary" class="my-4">mdi-phone</v-icon>
            819-777-5754
          </div>
          <div>
            <v-icon color="primary" class="my-4">mdi-email</v-icon>
            info@nomadefinir.ca
          </div>
        </v-col>
        <v-col cols="12" lg="6" md="6">
          <v-form class="pa-3 pa-md-10 ">
            <v-text-field background-color="white" :label="$t('contact.name')" placeholder="Enter your name here"
                          outlined/>
            <v-text-field background-color="white" type="email" label="E-Mail" outlined/>
            <v-text-field background-color="white" :label="$t('contact.subject')" outlined/>
            <v-textarea background-color="white" label="Message" outlined/>
            <v-layout justify-center>
              <v-btn class="primary" rounded text width="150">{{ $t('contact.send') }}</v-btn>
            </v-layout>
          </v-form>
        </v-col>
      </v-row>
    </section>
    <mail-box/>
  </div>

</template>
<script>
import MailBox from "../components/MailBox.vue";

export default {
  name: 'Home',
  components: {MailBox},
  data: () => ({
    fab: false,
    model: 0,
    colors: [
      'primary',
      'secondary',
      'yellow darken-2',
      'red',
      'orange',
    ],
    valid: true,
    name: '',
    nameRules: [
      v => !!v || this.$i18n.locale === 'fr' ? 'Veillez saisir votre nom' : 'Name is required',
    ],
    email: '',
    emailRules: [
      v => !!v || this.$i18n.locale === 'fr' ? 'Veillez saisir votre couriel' : 'Email is required',
      v => /.+@.+\..+/.test(v) || 'E-mail Invalide',
    ],
    select: null,
  }),

}
</script>
<style scoped>


.hero {
  height: 50vh;
  background: linear-gradient(rgba(0, 0, 0, 0.61), rgba(0, 0, 0, 0.61)), url('../assets/icons/serving-dish.png') no-repeat center center;
  background-size: contain;
}
</style>

<template>
  <div>
    <v-app-bar
        color="primary"
        dark
        flat
    >

      <div class="mt-1">
        <router-link class="white--text" :to="{name: 'Home'}">
          LOGO
        </router-link>
      </div>
      <v-spacer/>
      www.votresiteweb.ca
      <v-spacer/>
      <v-btn
          text class="white--text"
      >
        <v-icon class="mr-3">mdi-face</v-icon>
        ACCOUNT
      </v-btn>
      <v-btn
          text class="white--text"
          v-if="$i18n.locale==='en'"
          @click="switchLang('fr')"
      >
        Fr
      </v-btn>
      <v-btn
          text class="white--text ml-2"
          v-if="$i18n.locale==='fr'"
          @click="switchLang('en')"
      >
        En
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import i18n from '../i18n'

export default {
  name: 'Navbar',
  methods: {
    switchLang(lang) {
      i18n.locale = lang;
      localStorage.setItem("lang", lang)
    }
  },
  data: () => ({
    drawer: false
  }),
}
</script>
<style>
a {
  text-decoration: none;
}

.custom-placeholer-color input::placeholder {
  color: black !important;
  opacity: 0.8;
}

.custom-placeholer-color input {
  color: black !important;
}
</style>

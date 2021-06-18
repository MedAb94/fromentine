<template>
  <div>
    <v-app-bar
        color="primary"
        dark
        flat
    >

      <router-link class="white--text" :to="{name: 'Home'}">
        <v-img
            alt="Logo"
            src="../assets/logo.jpg"
            max-width="80"
        />
      </router-link>
      <v-spacer/>
      <v-btn text link :to="{name: 'Home'}" v-if="!$route.matched.some(({ name }) => name === 'Home')">
        {{ $t('navbar.home') }}
      </v-btn>
      <v-btn text :to="{name: 'About'}">{{ $t('navbar.about') }}</v-btn>
      <v-btn
          text :to="{name: 'Login'}"
           class="white--text"
      >
        <v-icon class="mr-3">mdi-account-circle-outline</v-icon>
        {{ $t('navbar.account') }}
      </v-btn>
      <v-btn text :to="{name: 'Contact'}">{{ $t('navbar.contact') }}</v-btn>
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
<style >
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

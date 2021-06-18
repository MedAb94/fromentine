<template>
  <div>
    <section class="hero">
      <v-container class="fill-height">
        <v-row class="fill-height" align="center" justify="stretch">
          <v-col class="text-center white--text">
            <h1 class="display-2">
              {{ $t('about.hero') }}
            </h1>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="light">
      <v-container>
        <v-row align="center ">
          <v-col cols="12" lg="6" md="6" class="pa-5">
            <img src="../assets/img/about/1.jpg" style="width: 100%" alt="">
          </v-col>
          <v-col cols="12" lg="6" md="6">
            <p>{{ $t("about.1") }}</p>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <v-container class="my-5">
      <v-row align="center">
        <v-col cols="12" lg="6" md="6">
          <p>{{ $t("about.2") }}</p>
        </v-col>
        <v-col cols="12" lg="6" md="6">
          <img src="../assets/img/Image-about-2.webp" style="width: 100%" alt="">
        </v-col>
      </v-row>
    </v-container>
    <div class="bordered text-center py-3 ma-3">
      {{ $t('about.3') }} <br><br>
      <img src="../assets/img/App store.png" class="mx-2" width="120" height="40">
      <img src="../assets/img/playStore.png" class="mx-2" width="120" height="40">
    </div>
    <mail-box/>
  </div>

</template>
<script>
import MailBox from "../components/MailBox.vue";

export default {
  name: 'Home',
  components: {MailBox},
  data: () => ({}),

  methods: {},
}
</script>
<style scoped>
.hero {
  height: 45vh;
  background: linear-gradient(rgba(0, 0, 0, 0.61), rgba(0, 0, 0, 0.61)), url('../assets/img/about/about.jpg') no-repeat center center;
  background-size: cover;
}

.bordered {
  border: 5px solid blue;
  border-radius: 10px;
}
</style>

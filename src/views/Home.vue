<template>
  <div class="light">
    <section class="hero">
      <v-container class="fill-height">
        <v-row class="fill-height" justify="stretch" align="center">
          <v-col cols="12" md="8" lg="6" xl="4" class=" white--text">
            <h1 class="display-1 my-5">
              {{ $t('home.title') }}
            </h1>
            <div>
              <v-text-field background-color="white"
                            outlined
                            :label="$t('home.search')"
                            class="custom-label-color"
                            prepend-inner-icon="mdi-map-marker"
              >
                <v-btn
                    slot="append"
                    x-large
                    class="primary white--text"
                >
                   {{ $t('home.find') }}
                </v-btn>
              </v-text-field>
            </div>
          </v-col>
        </v-row>
      </v-container>

    </section>
    <v-container>
      <section class="py-8">
        <v-card class="transparent pa-5" flat rounded>
          <v-row>
            <v-col class="text-center px-3">
              <div class="white fill-height rounded">
                <div>
                  <v-img max-width="50" class="mx-auto" src="../assets/icons/delivery-man.png"></v-img>
                </div>
                <div class="px-6">
                  <h3>
                    {{ $t("services.1.title") }}
                  </h3>
                  <p>{{ $t("services.1.desc") }}</p>
                </div>
              </div>
            </v-col>
            <v-col class="text-center px-3">
              <div class="white fill-height rounded">
                <div>
                  <v-icon x-large color="primary" class="mb-5">mdi-headset</v-icon>
                </div>
                <div class="px-6">
                  <h3>
                    {{ $t("services.2.title") }}
                  </h3>
                  <p>{{ $t("services.2.desc") }}</p>
                </div>
              </div>
            </v-col>
            <v-col class="text-center px-3">
              <div class="white fill-height rounded">
                <div>
                  <v-icon x-large color="primary" class="mb-5">mdi-credit-card-settings-outline</v-icon>
                </div>
                <div class="px-6">
                  <h3>
                    {{ $t("services.3.title") }}
                  </h3>
                  <p>{{ $t("services.3.desc") }}</p>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-card>

      </section>
      <!--Restaurants list-->
      <section class="my-5">
        <div class="my-8">
          <h1 class="primary--text mb-3">
            {{ $t("services.title") }}
          </h1>
          <div style="background-color: #0077fb; width: 100px; height: 8px; border-radius: 4px"></div>
          <v-icon style="margin-top: -34px; margin-left: 110px" small color="#0077fb">mdi-circle</v-icon>
          <p>
            {{ $t("services.subtitle") }}
          </p>
        </div>
        <v-row justify="stretch">
          <v-col cols="12" lg="4" md="4" >
            <router-link
                class="white--text "
                :to="{name : 'Menu', params:{name: 'Res 1', id: c}}"
            >
              <v-card
                  flat
                  class="mx-auto"
                  max-width="344"
              >
                <v-img
                    src="../assets/logo.jpg"
                />
                <v-card-title class="primary ">
                  <H2 class=" blue--text text-center">
                    LA FROMENTINE
                  </H2>
                  <div class="body-2 white--text">
                    <v-icon color="blue">mdi-map-marker</v-icon>
                    774A Boulevard Saint - Joseph <br>
                    <v-icon color="blue">mdi-map-marker</v-icon>
                    1202 Bank St, Ottawa, On K1S 3Y <br>
                  </div>
                </v-card-title>
              </v-card>
            </router-link>
          </v-col>
        </v-row>
      </section>
    </v-container>
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
<style scoped lang="scss">
.hero {
  height: 500px;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('../assets/img/hero.jpg') no-repeat center center;
  background-size: cover;
  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    min-height: 150px;
    .display-2 {
      font-size: 1rem
    }
  }

  .v-btn {
    margin-top: -15px;
    margin-right: -10px;
  }

  .custom-label-color .v-label {
    color: black !important;
    opacity: 1;
  }
}

.half-bordered {
  border: 8px solid blue;
  border-top: 0;
  border-left: 0;
}
</style>

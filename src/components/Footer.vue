<template>
  <v-card
      flat
      tile
      width="100%"
      color="dark"
  >
    <v-card-text class="white--text font-weight-bold">
      <v-container>
        <v-row>
          <v-col cols="12" sm="12" md="4" lg="4">
            <router-link class="white--text" :to="{name: 'Home'}">
              <v-img
                  alt="Logo"
                  src="../assets/logo.jpg"
                  max-width="80"
                  class="my-5"
              />
            </router-link>

            <p>
             {{$t('footer.delivery')}}
            </p>

            <h3>{{$t('footer.download')}}</h3>
            <div>
              <img src="../assets/img/App store.png" class="mx-2" width="120" height="40">
              <img src="../assets/img/playStore.png" class="mx-2" width="120" height="40">

            </div>
          </v-col>
          <v-col cols="12" sm="6" md="3" lg="3">
              <div class="pl-8">
                {{ $t("footer.links") }}
              </div>
              <div>
                <v-list style="background-color: transparent">
                  <v-list-item>
                    <v-list-item-title>
                      <router-link :to="{name:'Home'}">
                        <v-btn text class="white--text">
                          {{ $t('navbar.home') }}
                        </v-btn>
                      </router-link>
                    </v-list-item-title>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-title>
                      <router-link :to="{name:'About'}">
                        <v-btn text class="white--text">
                          {{ $t('navbar.about') }}
                        </v-btn>
                      </router-link>
                    </v-list-item-title>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-title>
                      <router-link :to="{name:'Login'}">
                        <v-btn text class="white--text">
                          {{ $t('navbar.account') }}
                        </v-btn>
                      </router-link>
                    </v-list-item-title>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-title>
                      <router-link :to="{name:'Contact'}">
                        <v-btn text class="white--text">
                          {{ $t('navbar.contact') }}
                        </v-btn>
                      </router-link>
                    </v-list-item-title>
                  </v-list-item>

                </v-list>
              </div>
          </v-col>
          <v-col cols="12" sm="6" md="5" lg="5">
            <h3 class="text-center text-md-left">
              Contact info
            </h3>
            <div>
              <v-icon class="mr-3 my-3" color="white">mdi-map-marker</v-icon> 774A Boulevard Saint-Joseph, Gatineau, Québec J8Y 4B9 <br>
              <v-icon class="mr-3 my-3" color="white">mdi-phone</v-icon> 819-777-5754 <br>
              <v-icon class="mr-3 my-3" color="white">mdi-email</v-icon>info@lafromentine.com <br>
            </div>
            <div>
              <v-icon color="white" class="mr-5">mdi-facebook</v-icon>
              <v-icon color="white" class="mr-5">mdi-instagram</v-icon>
              <v-icon color="white" class="mr-5">mdi-twitter</v-icon>
            </div>
            <v-container>
              <v-row align="center">
                <v-col>
                  <v-img width="60" max-height="50" src="../assets/img/payments/cc.png" alt=""/>
                </v-col>
                <v-col>
                  <v-img width="60" max-height="50" src="../assets/img/payments/mastercard.png" alt=""/>
                </v-col>
                <v-col>
                  <v-img width="80" max-height="50" src="../assets/img/payments/paypal.png" alt=""/>
                </v-col>
              </v-row>
            </v-container>

          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-divider/>
    <div class="white--text text-center">
      &copy{{ new Date().getFullYear() }} — <strong>FROMENTINE / All rights reserved</strong>
    </div>
  </v-card>
</template>
<script>
import {mapGetters} from "vuex";

export default {
  name: "AppFooter",
  data() {
    return {
      days: [
        {en: "Monday", fr: "Lundi", hours: "8.30am - 6 pm"},
        {en: "Tuesday", fr: "Mardi", hours: "8.30am - 6 pm"},
        {en: "Wednesday", fr: "Mercredi", hours: "8.30am - 6 pm"},
        {en: "Thursday", fr: "Jeudi", hours: "8.30am - 6 pm"},
        {en: "Friday", fr: "Vendredi", hours: "8.30am - 6 pm"},
        {en: "Saturday", fr: "Samedi", hours: "8.30am - 1 pm"},
        {en: "Sunday", fr: "Dimanche", hours: this.$i18n.locale == "en" ? "Closed" : "Fermé"},
      ]
    };
  },
};
</script>
<style lang="scss" scoped>
a {
  color: white !important;
  text-decoration: none;
}
</style>

<template>
  <div class="light" >
    <section class="hero" style="position: relative">
      <v-container class="fill-height">
        <v-row class="fill-height" align="center" justify="stretch">
          <v-col class=" white--text" cols="12" lg="6" md="6">
            <h1 class="orange--text display-2">FROMENTINE</h1>
            <p>{{$t("menu.subtitle")}}</p>
            <v-btn x-large class="orange my-3 white--text" text> {{$t("menu.orderNow")}}</v-btn>
          </v-col>
        </v-row>
      </v-container>
      <v-img src="../../assets/logo.jpg" max-width="50" style="position: absolute; bottom: 0"></v-img>
    </section>
    <v-container>
      <section class="py-8">
        <v-row>
          <v-col class="text-center px-3">
            <div class="white fill-height rounded">
              <div>
                <v-img src="../../assets/icons/food.png" max-width="80px" class="mx-auto"></v-img>
              </div>
              <div class="px-6">
                <h3>
                  <!--                  {{ $t("services.1.title") }}-->
                  Delicious Food
                </h3>
                <p>
                  <!--                  {{ $t("services.1.desc") }}-->
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
              </div>
            </div>
          </v-col>
          <v-col class="text-center px-3">
            <div class="white fill-height rounded">
              <div>
                <v-img src="../../assets/icons/funtime.png" max-width="80px" class="mx-auto"></v-img>
              </div>
              <div class="px-6">
                <h3>
                  <!--                  {{ $t("services.3.title") }}-->
                  Fun Time
                </h3>
                <p>
                  <!--                  {{ $t("services.3.desc") }}-->
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
              </div>
            </div>
          </v-col>
          <v-col class="text-center px-3">
            <div class="white fill-height rounded">
              <div>
                <v-img src="../../assets/icons/health.png" max-width="80px" class="mx-auto"></v-img>
              </div>
              <div class="px-6">
                <h3>
                  <!--                  {{ $t("services.2.title") }}-->
                  Healthy Options
                </h3>
                <p>
                  <!--                  {{ $t("services.2.desc") }}-->
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
              </div>
            </div>
          </v-col>
        </v-row>
      </section>
      <!--      famous dishes-->
      <section>
        <div>
          <div class="my-5 famous pl-3">
            <h1 class="display-2 orange--text font-weight-bold">{{$t("menu.famous")}}</h1>
          </div>
          <p class="mt-5">
            {{$t("menu.enjoy")}}
          </p>
        </div>
        <v-row>
          <v-col class="text-center px-3" v-for="i in products[0].products.slice(0,3)" :key="i.id">
            <div class="white fill-height rounded pt-3">
              <div class="mt-3">
                <v-img :src="i.img_url" max-width="100px" class="mx-auto"></v-img>
              </div>
              <div class="px-6">
                <h3>
                  {{i.name}}
                </h3>
                <p>
                  {{i.description}}
                </p>
              </div>
            </div>
          </v-col>
        </v-row>
      </section>
      <!--      Menu-->
      <section>
        <div>
          <div class="my-5 famous pl-3">
            <h1 class="display-2 orange--text font-weight-bold">{{$t("menu.main")}}</h1>
          </div>
        </div>
        <v-sheet
            v-for="r in products" :key="r.id"
            class="mx-auto my-5 light"
            max-height="500"
            width="100%"
            style="overflow-y: scroll"
        >
          <v-container>
            <h2>{{ r.name }}</h2>
            <v-row justify="stretch">
              <v-col cols="12" lg="3" md="4"
                     v-for="p in r.products" :key="p.id"
              >
                <router-link
                    class="white--text "
                    to="#"
                >
                  <v-card
                      class="mx-auto fill-height"
                      max-width="344"
                  >
                    <v-img :src="p.img_url" max-height="150"
                    />
                    <v-card-text class="primary white--text text-center  mb-0 px-1">
                      <v-row>
                        <v-col cols="8" class="text-left"><strong>{{ p.name }}</strong></v-col>
                        <v-col cols="4">${{ p.price }}</v-col>
                      </v-row>


                    </v-card-text>
                  </v-card>
                </router-link>
              </v-col>

            </v-row>
          </v-container>
        </v-sheet>
      </section>
    </v-container>
  </div>
</template>
<script>
import MailBox from "../../components/MailBox.vue";
import axios from 'axios'

export default {
  name: 'Home',
  components: {MailBox},
  data: () => ({
    products: []
  }),
  methods: {},
  mounted() {
    axios.get("https://still-garden-34311.herokuapp.com/categories?$eager=products").then(res => {
      this.products = res.data.data
    })
  }
}
</script>
<style scoped>
.hero {
  height: 45vh;
  background: linear-gradient(rgba(0, 0, 0, 0.61), rgba(0, 0, 0, 0.61)), url('../../assets/img/Frometine-image-main.webp') no-repeat center center;
  background-size: cover;
}

.famous {
  border: 0 solid #FF9800;
  border-left-width: 8px;
  border-radius: 10px;
}
</style>

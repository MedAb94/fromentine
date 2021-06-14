<template>
  <div>
    <section class="hero">
      <v-container class="fill-height">
        <v-row class="fill-height" align="center" justify="stretch">
          <v-col class=" white--text" cols="12" lg="6" md="6">
            <h2 class="display-1"> The best </h2>
            <v-row>
              <v-col>
                <span class="h1 display-2 orange--text font-weight-bold">
                Restaurant
              </span>
                <span class="display-1">in Ottawa</span>
              </v-col>

            </v-row>

            <p>The fine art of the modern professional cooking methods</p>
            <v-btn x-large class="orange my-3 white--text" text> Order now</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="light pa-8">
      <v-card class="transparent pa-5" flat rounded>
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
      </v-card>
      <div class="my-5">
        <h1 class="font-weight-light">
          Some Of Our
        </h1>
        <h1 class="display-2 orange--text font-weight-bold">Famous Dishes</h1>
         <p class="mt-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, doloribus eaque est, excepturi expedita
          laboriosam natus non nostrum nulla officia praesentium sapiente sit voluptas. Autem consequuntur dicta
          provident quam sit?
        </p>
      </div>
    </section>
    <section class="light">
      <v-container>
        <v-sheet
            v-for="r in products" :key="r.id"
            :elevation="1"
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
      </v-container>
    </section>

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
    axios.get("https://mondemenagement.ca/categories?$eager=products").then(res => {
      console.log(res.data.data)
      this.products = res.data.data
    })
  }
}
</script>
<style scoped>
.hero {
  height: 45vh;
  background: linear-gradient(rgba(0, 0, 0, 0.61), rgba(0, 0, 0, 0.61)), url('../../assets/img/about/about.jpg') no-repeat center center;
  background-size: cover;
}

.half-bordered {
  border: 8px solid blue;
  border-top: 0;
  border-left: 0;
  border-radius: 10px;
}
</style>

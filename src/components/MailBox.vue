<template>
  <section class="mailbox  mb-0 py-3 white--text">
    <div class="container newsLetter">
      <h1 class="text-center blue--text">{{ $t('mailBox.stay') }}</h1>
      <h3 class="text-center font-weight-bold white--text">
        {{ $t('mailBox.subscribe') }}
      </h3>
      <form @submit.prevent="subscribe">
        <div class="row ">
          <div class="col-12">
            <v-text-field color="white" outlined
                          label="Email"
                          class="custom-label-color"
            >
              <v-btn
                  slot="append"
                  x-large
                  class="primary white--text"
              >
                {{ $t('mailBox.subscribeBtn') }}
              </v-btn>
            </v-text-field>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "Mailbox"
}
</script>

<style lang="scss">
.newsLetter .v-btn {
  margin-top: -16px;
  margin-right: -10px;
}

.mailbox {
  min-height: 30vh;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)), url('../assets/img/mailbox.jpg') center center no-repeat;
  background-size: cover;
}


.custom-label-color .v-label {
  color: white;
  opacity: 1;
}

.custom-label-color .v-text-field--outlined >>> fieldset {
  border-color: red !important;
}
</style>

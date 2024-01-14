<template>
<q-page class="flex column q-pa-sm">
      <div class="q-field__control relative-position row no-wrap">
         <div class="q-field__prepend q-field__marginal row no-wrap items-center"><i data-v-9d03536e="" class="q-icon notranslate material-icons" aria-hidden="true" role="presentation">place</i></div>
         <GoogleAddressAutocomplete
          :apiKey="googleMapsApiKey"
          v-model="homeAddress"
          @callback="homeCallback"
          class="q-field__native q-placeholder"
          :placeholder="homeAddress"
          />
          <div class="q-field__append q-field__marginal row no-wrap items-center"><i data-v-9d03536e="" class="q-icon notranslate material-icons" aria-hidden="true" role="presentation">home</i></div>
      </div>
      <br>
      <!-- <div class="q-field__control relative-position row no-wrap">
         <div class="q-field__prepend q-field__marginal row no-wrap items-center"><i data-v-9d03536e="" class="q-icon notranslate material-icons" aria-hidden="true" role="presentation">place</i></div>
         <GoogleAddressAutocomplete
          :apiKey="googleMapsApiKey"
          v-model="workAddress"
          @callback="workCallback"
          class="q-field__native q-placeholder"
          :placeholder="workAddress"
          />
          <div class="q-field__append q-field__marginal row no-wrap items-center"><i data-v-9d03536e="" class="q-icon notranslate material-icons" aria-hidden="true" role="presentation">push_pin</i></div>
      </div> -->
</q-page>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useStore } from 'stores/store'
import GoogleAddressAutocomplete from 'vue3-google-address-autocomplete'

const store = useStore()
const home = ref(store.home)
// const work = ref(store.work)
const homeAddress = ref(home.value.address) // Create homeAddress variable
// const workAddress = ref(work.value.address) // Create homeAddress variable

const googleMapsApiKey = 'AIzaSyDGK-JloxIj-G_a4W5MahoD2w4AlYVBA7c'

// const workCallback = (place) => {
//   work.value = {
//     address: place.formatted_address,
//     lat: place.geometry.location.lat(),
//     lng: place.geometry.location.lng()
//   }
//   store.setWork(work)
// }
watch(home, (newHome) => {
  homeAddress.value = newHome.address // Update homeAddress when home changes
})

// watch(work, (newWork) => {
//   workAddress.value = newWork.address // Update workAddress when work changes
// })

const homeCallback = (place) => {
  home.value = {
    address: place.formatted_address,
    lat: place.geometry.location.lat(),
    lng: place.geometry.location.lng()
  }
  store.setHome(home)
}

</script>

<style scoped>
.q-page{
  background-color: #fff !important;
  background: linear-gradient(to bottom, #fff, #fff);
}

h2{
  margin-bottom: 0;
  font-size: 1.5rem;
}
.q-field{
  margin-bottom: 10px;
  margon-top: 10px;
}
</style>

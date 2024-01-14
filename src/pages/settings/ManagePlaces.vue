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
      <q-input color="orange" standout bottom-slots v-model="work" label="Work"  clearable>
        <template v-slot:prepend>
          <q-icon name="place" />
        </template>
        <template v-slot:append>
          <q-icon name="push_pin" />
        </template>

        <template v-slot:hint>
          Enter the url endpoint for your work place Data
        </template>
      </q-input>
</q-page>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useStore } from 'stores/store'
import GoogleAddressAutocomplete from 'vue3-google-address-autocomplete'

const store = useStore()
const home = ref(store.home)
const work = ref(store.work)
const homeAddress = ref(home.value.address) // Create homeAddress variable

const googleMapsApiKey = 'AIzaSyDGK-JloxIj-G_a4W5MahoD2w4AlYVBA7c'

watch(work, (newWork) => {
  store.setWork(newWork)
})

watch(home, (newHome) => {
  homeAddress.value = newHome.address // Update homeAddress when home changes
})

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

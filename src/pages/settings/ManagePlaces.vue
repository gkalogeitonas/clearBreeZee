<template>
<q-page class="flex column q-pa-sm">
      <q-input color="orange" standout bottom-slots v-model="home" label="Home"  clearable>
        <template v-slot:prepend>
          <q-icon name="place" />
        </template>
        <template v-slot:append>
          <q-icon name="home" />
        </template>

        <template v-slot:hint>
          Enter the url endpoint for your home Data
        </template>
      </q-input>
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

        <GoogleAddressAutocomplete
          :apiKey="googleMapsApiKey"
          v-model="address"
          @callback="callbackFunction"
          class="css-class-here"
          placeholder="placeholder if you wish"
        />

</q-page>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useStore } from 'stores/store'
import GoogleAddressAutocomplete from 'vue3-google-address-autocomplete'

const store = useStore()
const home = ref(store.home)
const work = ref(store.work)
const address = ref('')
const googleMapsApiKey = 'AIzaSyDGK-JloxIj-G_a4W5MahoD2w4AlYVBA7c'

watch(home, (newHome) => {
  store.setHome(newHome)
})

watch(work, (newWork) => {
  store.setWork(newWork)
})

const callbackFunction = (place) => {
  console.log(place)
  address.value = place.formatted_address
  const lat = place.geometry.location.lat()
  const lng = place.geometry.location.lng()
  console.log(`Latitude: ${lat}, Longitude: ${lng}`)
  // do something with place.geometry.location.lat() and place.geometry.location.lng()
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

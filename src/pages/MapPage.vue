<template>
  <GoogleMap :api-key="googleMapsApiKey" style="width: 100%; height: 500px" :center="center" :zoom="15">
    <MapMarker :options="{ position: center }" />
  </GoogleMap>
  googleMapsApiKey : {{ googleMapsApiKey }}
</template>

<script>
import { ref, onMounted, defineComponent } from 'vue'
// import { useStore } from 'stores/store'
import { GoogleMap, Marker as MapMarker } from 'vue3-google-map'

export default defineComponent({
  components: { GoogleMap, MapMarker },
  setup () {
    const center = ref(null)

    onMounted(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          center.value = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        }, () => {
          // Fallback to a default location if geolocation is not available
          center.value = { lat: 40.689247, lng: -74.044502 }
        })
      } else {
        // Fallback to a default location if geolocation is not available
        center.value = { lat: 40.689247, lng: -74.044502 }
      }
    })

    return {
      // googleMapsApiKey: store.googleMapsApiKey,
      googleMapsApiKey: process.env.googleMapsApiKey,
      center
    }
  }
})
</script>

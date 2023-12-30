<template>
  <div>
    <GoogleMap
      :center="center"
      :zoom="12"
      :options="{
        mapTypeId: 'roadmap'
      }"
      style="width: 100%; height: 400px"
    >
      <Marker
        :position="center"
      />
    </GoogleMap>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { GoogleMap, Marker as MapMarker } from 'vue3-google-map'

export default {
  components: {
    GoogleMap,
    Marker
  },
  setup () {
    const center = ref({ lat: 40.730610, lng: -73.935242 }) // Default to New York

    onMounted(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          center.value = { lat: position.coords.latitude, lng: position.coords.longitude }
        })
      }
    })

    return {
      center
    }
  }
}
</script>

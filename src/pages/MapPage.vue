<template>
    <template v-if="weatherData || pollutionData">
      <div  v-if="weatherData" class="col text-black text-center">
        <div class="text-h4 text-weight-light">
          {{ weatherData.name }}
        </div>
        <!-- <div class="text-h6 text-weight-light">
          {{weatherData.weather[0].main}}
        </div> -->
        <!-- <div class="text-h2 text-weight-thin q-my-lg">
          <span>{{Math.round(weatherData.main.temp,2)}}</span>
          <span class="text-small">°</span>C
        </div> -->
      </div>
      <div v-if="pollutionData" class="col text-black text-center">
        <div class="aqi-circle">
          <div class="text-h2">{{ pollutionData.main.aqi }}</div>
          <div class="text-caption">AQI</div>
        </div>
        <div style="display: flex; flex-wrap: wrap;">
          <div style="flex: 1;">
            <div class="text-h6 text-weight-light">
              NO: {{ pollutionData.components.no }} μg/m3
            </div>
            <div class="text-h6 text-weight-light">
              NO2: {{ pollutionData.components.no2 }} μg/m3
            </div>
            <div class="text-h6 text-weight-light">
              O3: {{ pollutionData.components.o3 }} μg/m3
            </div>
            <div class="text-h6 text-weight-light">
              SO2: {{ pollutionData.components.so2 }} μg/m3
            </div>
          </div>
          <div style="flex: 1;">
            <div class="text-h6 text-weight-light">
              PM2.5: {{ pollutionData.components.pm2_5 }} μg/m3
            </div>
            <div class="text-h6 text-weight-light">
              PM10: {{ pollutionData.components.pm10 }} μg/m3
            </div>
            <div class="text-h6 text-weight-light">
              NH3: {{ pollutionData.components.nh3 }} μg/m3
            </div>
          </div>
        </div>
      </div>
    </template>
  <GoogleMap @click="handleMapClick" :api-key="googleMapsApiKey" style="width: 100%; height: 500px" :center="center" :zoom="15">
    <MapMarker :options="{ position: center }" />
  </GoogleMap>
</template>

<script>
import { ref, watch, onMounted, defineComponent } from 'vue'
// import { useStore } from 'stores/store'
import { GoogleMap, Marker as MapMarker } from 'vue3-google-map'
import { WeatherApi } from 'src/services/weatherApi.js'

export default defineComponent({
  components: { GoogleMap, MapMarker },
  setup () {
    const center = ref(null)
    const weatherApi = new WeatherApi(process.env.openWeatherMapApiKey)
    const weatherData = ref(null)
    const pollutionData = ref(null)

    onMounted(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          center.value = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
          weatherData.value = await weatherApi.getWeatherByCoords(center.value.lat, center.value.lng)
          pollutionData.value = await weatherApi.getPollutionByCoords(center.value.lat, center.value.lng)
        }, () => {
          // Fallback to a default location if geolocation is not available
          center.value = { lat: 40.689247, lng: -74.044502 }
        })
      }
    })
    // Define the handleMapClick function
    const handleMapClick = (event) => {
      center.value = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      }
      console.log(center.value)
    }
    console.log(center)
    watch(center, async (newCenter) => {
      weatherData.value = await weatherApi.getWeatherByCoords(newCenter.lat, newCenter.lng)
      pollutionData.value = await weatherApi.getPollutionByCoords(newCenter.lat, newCenter.lng)
    }, { immediate: true })
    return {
      // googleMapsApiKey: store.googleMapsApiKey,
      googleMapsApiKey: process.env.googleMapsApiKey,
      center,
      weatherData,
      pollutionData,
      handleMapClick
    }
  }
})
</script>

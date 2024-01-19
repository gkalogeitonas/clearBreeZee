<template>
       <div v-if="centerPollutionData" id="center" class="col text-black text-center">
        <div class="aqi-circle">
          <div class="text-h2">{{ centerPollutionData.main.aqi }}</div>
          <div class="text-caption">AQI</div>
        </div>
      </div>
      <div v-if="pollutionData" id="home" class="row text-black text-center">
        <div class="col-2">
          <div class="aqi-circle">
            <div class="text-h3">{{ pollutionData.main.aqi }}</div>
            <div class="text-caption">Home</div>
          </div>
        </div>
        <div class="col-10">
          <div class="text-caption text-weight-light">
            NO: {{ pollutionData.components.no }} μg/m3,
            NO2: {{ pollutionData.components.no2 }} μg/m3,
            O3: {{ pollutionData.components.o3 }} μg/m3,
            SO2: {{ pollutionData.components.so2 }} μg/m3
          </div>
          <div class="text-caption text-weight-light">
            PM2.5: {{ pollutionData.components.pm2_5 }} μg/m3,
            PM10: {{ pollutionData.components.pm10 }} μg/m3,
            NH3: {{ pollutionData.components.nh3 }} μg/m3
          </div>
        </div>
      </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'stores/store'
import { WeatherApi } from 'src/services/weatherApi.js'

const store = useStore()
// const work = ref(store.work) // Access the work value from the store
const home = ref(store.home) // Access the home value from the store
const center = ref(null)
const weatherApi = new WeatherApi(process.env.openWeatherMapApiKey)
const weatherData = ref(null)
const pollutionData = ref(null)
const centerPollutionData = ref(null)

const fetchData = async () => {
  weatherData.value = await weatherApi.getWeatherByCoords(home.value.lat, home.value.lng)
  pollutionData.value = await weatherApi.getPollutionByCoords(home.value.lat, home.value.lng)
}

onMounted(async () => {
  fetchData()
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      center.value = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      centerPollutionData.value = await weatherApi.getPollutionByCoords(center.value.lat, center.value.lng) // Fetch pollution data for the current location
      console.log('center', center.value)
    })
  } else {
    console.log('Geolocation is not supported by this browser.')
  }
})

// fetchData()

</script>
<style scoped>
#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}

#center {
  align-self: center;
}

#home {
  align-self: flex-end;
}
</style>

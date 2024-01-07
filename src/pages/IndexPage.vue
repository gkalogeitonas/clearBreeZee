<template>
  <q-page class="flex column">
    <div class="col q-pt-lg  q-px-md">
      <q-input color="white" text-color="white" label-color="white" outlined v-model="search" placeholder="Search">
        <template v-slot:prepend>
          <q-btn size="lg" color="" name="my_position" icon="gps_fixed" @click="getLocation" />
        </template>
        <template v-slot:append>
          <q-icon name="search" color="white" @click="getWeatherByCityName(search)" />
        </template>
      </q-input>
    </div>

    <template v-if="weatherData || pollutionData">
      <div  v-if="weatherData" class="col text-white text-center">
        <div class="text-h4 text-weight-light">
          {{ weatherData.name }}
        </div>
        <div class="text-h6 text-weight-light">
          {{weatherData.weather[0].main}}
        </div>
        <div class="text-h2 text-weight-thin q-my-lg">
          <span>{{Math.round(weatherData.main.temp,2)}}</span>
          <span class="text-small">°</span>C
        </div>
      </div>
      <div v-if="pollutionData" class="col text-white text-center">
        <div class="aqi-circle">
          <div class="text-h2">{{ pollutionData.main.aqi }}</div>
          <div class="text-caption">AQI</div>
        </div>
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
    </template>
    <template v-else>
    <div class = "col text-h2 text-center text-white">
      <q-btn   size="" color="primary" label="Find my location" icon="gps_fixed" @click="getLocation" />
    </div>
    </template>
  </q-page>
</template>
<script>
import { defineComponent } from 'vue'
import { WeatherApi } from 'src/services/weatherApi.js'

export default defineComponent({
  name: 'IndexPage',
  data () {
    return {
      search: '',
      weatherData: null,
      pollutionData: null,
      position: null,
      apiUrlWeather: 'https://api.openweathermap.org/data/2.5/weather',
      apiUrlPollution: 'https://api.openweathermap.org/data/2.5/air_pollution',
      apiKey: process.env.openWeatherMapApiKey,
      weatherApi: null
    }
  },
  created () {
    this.weatherApi = new WeatherApi(this.apiKey)
  },
  methods: {
    getLocation () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            this.showPosition(position)
            this.position = position
            this.getWeatherByCoords(position.coords.latitude, position.coords.longitude)
            this.getPollutionByCoords(position.coords.latitude, position.coords.longitude)
          },
          error => {
            switch (error.code) {
              case error.PERMISSION_DENIED:
                alert('User denied the request for Geolocation.')
                break
              case error.POSITION_UNAVAILABLE:
                alert('Location information is unavailable.')
                break
              case error.TIMEOUT:
                alert('The request to get user location timed out.')
                break
              case error.UNKNOWN_ERROR:
                alert('An unknown error occurred.')
                break
            }
          }
        )
      } else {
        console.log('Geolocation is not supported by this browser.')
      }
    },
    showPosition (position) {
      console.log('Latitude: ' + position.coords.latitude + '<br>Longitude: ' + position.coords.longitude)
    },
    async getWeatherByCoords (lat, lon) {
      this.weatherData = await this.weatherApi.getWeatherByCoords(lat, lon)
    },
    async getPollutionByCoords (lat, lon) {
      console.log('getPollutionByCoords', lat, lon)
      this.pollutionData = await this.weatherApi.getPollutionByCoords(lat, lon)
      console.log('pollutionData', this.pollutionData)
    },
    async getWeatherByCityName (cityName) {
      this.weatherData = await this.weatherApi.getWeatherByCityName(cityName)
      if (this.weatherData && this.weatherData.coord) {
        this.pollutionData = await this.weatherApi.getPollutionByCoords(this.weatherData.coord.lat, this.weatherData.coord.lon)
      }
    }
  }
})
</script>

<style lang="scss">
  .q-page{
    background: linear-gradient(to bottom, #13648a, #267881);
  }
  #footer{
    flex: 0 0 100px;
  }
  .aqi-circle {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: blue;
    color: white;
    margin: 0 auto;
  }
</style>

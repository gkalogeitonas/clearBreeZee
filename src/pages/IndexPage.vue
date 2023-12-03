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
      apiKey: '5114231f956c863476e7ffdc500717e1'
    }
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
      console.log('Latitude: ' + position.coords.latitude +
      '<br>Longitude: ' + position.coords.longitude)
    },
    getWeatherByCoords (lat, lon) {
      const url = this.apiUrlWeather + '?lat=' + lat + '&lon=' + lon + '&appid=' + this.apiKey + '&units=metric'
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.weatherData = data
        })
    },
    getPollutionByCoords (lat, lon) {
      const url = this.apiUrlPollution + '?lat=' + lat + '&lon=' + lon + '&appid=' + this.apiKey
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.pollutionData = data.list[0]
        })
    },
    getWeatherByCityName (cityName) {
      const url = this.apiUrlWeather + '?q=' + cityName + '&appid=' + this.apiKey + '&units=metric'
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.weatherData = data
          this.pollutionData = null
          this.getPollutionByCoords(data.coord.lon, data.coord.lat)
        })
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

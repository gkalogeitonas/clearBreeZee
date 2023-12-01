<template>
  <q-page class="flex column">
    <div class="col q-pt-lg  q-px-md">
      <q-input color="white" text-color="white" label-color="white" outlined v-model="search" placeholder="Search" >
        <template v-slot:append>
          <q-icon name="search" color="white" />
        </template>
      </q-input>
    </div>

    <template v-if="weatherData">
      <div class="col text-white text-center">
        <div class="text-h4 text-weight-light">
          {{ weatherData.name }}
        </div>
        <div class="text-h6 text-weight-light">
          Rain
        </div>
        <div class="text-h1 text-weight-thin q-my-lg">
          <span>8</span>
          <span class="text-small">°</span>C
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
      position: null,
      apiUrl: 'https://api.openweathermap.org/data/2.5/weather',
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
            alert('Latitude: ' + position.coords.latitude)
            this.getWeatherByCoords(position.coords.latitude, position.coords.longitude)
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
      const url = this.apiUrl + '?lat=' + lat + '&lon=' + lon + '&appid=' + this.apiKey + '&units=metric'
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.weatherData = data
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
</style>

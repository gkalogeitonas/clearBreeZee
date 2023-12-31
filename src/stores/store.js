// store.js
import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'main',
  state: () => ({
    googleMapsApiKey: 'AIzaSyDGK-JloxIj-G_a4W5MahoD2w4AlYVBA7c',
    openWeatherMapApiKey: 'your-openweathermap-api-key'
  })
})

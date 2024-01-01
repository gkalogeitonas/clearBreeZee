// weatherApi.js
const apiUrlWeather = 'https://api.openweathermap.org/data/2.5/weather'
const apiUrlPollution = 'https://api.openweathermap.org/data/2.5/air_pollution'

export class WeatherApi {
  constructor (apiKey) {
    this.apiKey = apiKey
  }

  getWeatherByCoords (lat, lon) {
    const url = `${apiUrlWeather}?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`
    return fetch(url).then(response => response.json())
  }

  getPollutionByCoords (lat, lon) {
    const url = `${apiUrlPollution}?lat=${lat}&lon=${lon}&appid=${this.apiKey}`
    return fetch(url).then(response => response.json())
  }

  getWeatherByCityName (cityName) {
    const url = `${apiUrlWeather}?q=${cityName}&appid=${this.apiKey}&units=metric`
    return fetch(url).then(response => response.json())
  }
}

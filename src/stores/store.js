import { defineStore } from 'pinia'
import { toRaw } from 'vue'

export const useStore = defineStore({
  id: 'main',
  state: () => {
    const home = JSON.parse(localStorage.getItem('home')) || {
      address: '',
      lat: '',
      lng: ''
    }
    const work = JSON.parse(localStorage.getItem('work')) || {
      address: '',
      lat: '',
      lng: ''
    }

    return {
      home,
      work
    }
  },
  actions: {
    setHome (home) {
      this.home = home
      localStorage.setItem('home', JSON.stringify(toRaw(home.value)))
    },
    setWork (work) {
      this.work = work
      localStorage.setItem('work', JSON.stringify(toRaw(work.value)))
    }
  }
})

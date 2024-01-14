// store.js
import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'main',
  state: () => ({
    home: JSON.parse(localStorage.getItem('home')),
    work: localStorage.getItem('work') || ''
  }),
  actions: {
    setHome (url) {
      this.home = url
      console.log(JSON.stringify(url))
      localStorage.setItem('home', JSON.stringify(url))
    },
    setWork (url) {
      this.work = url
      localStorage.setItem('work', url)
    }
  }
})

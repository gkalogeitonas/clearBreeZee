// store.js
import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'main',
  state: () => ({
    home: localStorage.getItem('home') || '',
    work: localStorage.getItem('work') || ''
  }),
  actions: {
    setHome (url) {
      this.home = url
      localStorage.setItem('home', url)
    },
    setWork (url) {
      this.work = url
      localStorage.setItem('work', url)
    }
  }
})

<template>
  <div>
    Hello World!
  </div>
  Work: {{ work }}
  <br>
  Home Address: {{ home.address }}
  Home Latitude: {{ home.lat }}
  Home Longitude: {{ home.lng }}
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'stores/store'

const store = useStore()
const work = ref(store.work) // Access the work value from the store
const home = ref(store.home) // Access the home value from the store

</script>

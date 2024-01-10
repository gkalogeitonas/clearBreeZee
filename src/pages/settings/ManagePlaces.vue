<template>
<q-page class="flex column q-pa-sm">
      <q-input color="orange" standout bottom-slots v-model="home" label="Home"  clearable>
        <template v-slot:prepend>
          <q-icon name="place" />
        </template>
        <template v-slot:append>
          <q-icon name="home" />
        </template>

        <template v-slot:hint>
          Enter the url endpoint for your home Data
        </template>
      </q-input>
      <br>
      <q-input color="orange" standout bottom-slots v-model="work" label="Work"  clearable>
        <template v-slot:prepend>
          <q-icon name="place" />
        </template>
        <template v-slot:append>
          <q-icon name="push_pin" />
        </template>

        <template v-slot:hint>
          Enter the url endpoint for your work place Data
        </template>
      </q-input>
</q-page>
</template>

<script>
import { ref, watch } from 'vue'
import { useStore } from 'stores/store'
export default {
  name: 'SettingsPage',
  setup () {
    const store = useStore()
    const home = ref(store.home)
    const work = ref(store.work)

    watch(home, (newHome) => {
      store.setHome(newHome)
    })

    watch(work, (newWork) => {
      store.setWork(newWork)
    })

    return { home, work }
  }
}
</script>

<style scoped>
.q-page{
  background-color: #fff !important;
  background: linear-gradient(to bottom, #fff, #fff);
}

h2{
  margin-bottom: 0;
  font-size: 1.5rem;
}
.q-field{
  margin-bottom: 10px;
  margon-top: 10px;
}
</style>

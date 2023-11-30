<template>
  <q-page class="flex column">
    <div class="col q-pt-lg  q-px-md">
      <q-input color="white" text-color="white" label-color="white" outlined v-model="search" placeholder="Search" >
        <template v-slot:append>
          <q-icon name="search" color="white" />
        </template>
      </q-input>
    </div>

    <div class="col text-white text-center">
      <div class="text-h4 text-weight-light">
        Naxos
      </div>
      <div class="text-h6 text-weight-light">
        Rain
      </div>
      <div class="text-h1 text-weight-thin q-my-lg">
        <span>8</span>
        <span class="text-small">°</span>C
      </div>
    </div>

    <div class="col" id="footer">
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
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

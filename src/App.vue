<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
// import HelloWorldWc from './components/HelloWorldWc.ce.vue'
import { onMounted } from 'vue'
import mitt from 'mitt'

const bus = mitt()

const resetCounter = () => {
  bus.emit('reset-counter')
}

const callbackCustom = (count: number) => {
  console.log('external custom count=', count)
}

onMounted(() => {
  // registerAsWC()
})

</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <button @click="resetCounter">Reset counter</button>

  <HelloWorld
      msg="hello from HelloWorld"
      @callbackAngular="callbackCustom"
      :bus="bus"
  ></HelloWorld>

<!--  <HelloWorldWc-->
<!--      msg="hello from HelloWorld2"-->
<!--      @callbackAngular="callbackCustom"-->
<!--      :bus="bus"-->
<!--  ></HelloWorldWc>-->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

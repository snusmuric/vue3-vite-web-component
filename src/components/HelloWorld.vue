<script lang="ts">
import { defineComponent, defineCustomElement, ref, toRef, watch } from 'vue'

const helloWorldComponent = defineComponent({
  props: {
    msg: {
      type: String,
      default: 'msg was not set',
    },
    bus: {
      type: Object,
    },
  },
  emits: {
    callbackAngular(counter: number) {
      return counter
    },
  },

  setup(props, content) {
    console.log('HelloWorld: setup')
    const count = ref(0)
    const msg = toRef(props, 'msg')

    const busProp = toRef(props, 'bus')
    console.log('busProp', busProp)
    const bus = busProp.value

    function registerBusListener(bus: any) {
      bus.on('*', console.log)

      bus.on('reset-counter', () => {
        console.log('on reset-counter...')
        count.value = 0
        content.emit('callbackAngular', count.value)
      })
    }

    if (bus) {
      // bus as prop from another vue component
      registerBusListener(bus)
    } else {
      // bus transferred as web component attr
      watch(busProp, (bus) => {
        console.log('in busProp watch', busProp)
        registerBusListener(bus)
      })
    }
    const incrementCount = () => {
      count.value++
      content.emit('callbackAngular', count.value)
    }
    return { count, msg, incrementCount }
  },
})

let registered = false

function registerVueComponentAsWC(webComponentTag = 'hello-world') {
  if (registered) {
    return
  }
  console.log(`wc register: ${webComponentTag}`)
  customElements.define(webComponentTag, defineCustomElement(helloWorldComponent))
  registered = true
}

export { helloWorldComponent, registerVueComponentAsWC }
export default helloWorldComponent

</script>

<template>
  <div class="hello-world-component">
    <h1>Msg: --- {{ msg }} ---</h1>

    <button type="button" @click="incrementCount">count is: {{ count }}</button>
  </div>
</template>

<style scoped lang="scss">
@import "hello-world";
</style>

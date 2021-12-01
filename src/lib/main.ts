import { defineCustomElement } from 'vue'
import HelloWorldWc from './HelloWorldWc2.ce.vue'

const HelloWorld = defineCustomElement(HelloWorldWc)

// export individual elements
export { HelloWorld }

let registered = false

export function register() {
  if (registered) {
    return
  }
  customElements.define('hello-world-wc', HelloWorld)
  registered = true
}

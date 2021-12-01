<script lang="ts">
import { helloWorldComponent, registerVueComponentAsWC } from './HelloWorld.vue'

registerVueComponentAsWC('hello-world-ce')
export default helloWorldComponent

</script>

<style lang="scss">
@import "hello-world";
</style>

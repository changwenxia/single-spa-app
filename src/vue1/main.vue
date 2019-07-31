<template>
  <div>
      <h1 class="text">我是Vue项目</h1>
      <!-- <one></one> -->
  </div>
</template>

<script>
import one from './one.vue'
import two from './two.vue'
import isv from './isv.vue'
export default {
  name: 'child',
  components: {
    one,
    two,
    isv,
  },
  mounted(){
    console.log(this.token)
  },
}
</script>
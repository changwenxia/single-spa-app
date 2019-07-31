<template>
  <div>
      <h1 class="text">我是Vue项目</h1>
      <el-button @click='isShow=true'>click</el-button>
      <el-dialog :visible.sync="isShow" :before-close="beforeClose">
        hdskhfa
      </el-dialog>
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
  data() {
    return {
     isShow: false,
    }
  },
  mounted(){
    // console.log(this.token)
  },
  methods:{
    beforeClose(){
      this.isShow = false
    },
  },
}
</script>
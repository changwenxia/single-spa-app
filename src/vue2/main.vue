<template>
  <div>
      <h1 class="text">我是Vue项目</h1>
      <el-button @click='isShow=true'>click</el-button>
      <el-dialog :visible.sync="isShow" :before-close="beforeClose">
        弹窗内容
      </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'child',
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
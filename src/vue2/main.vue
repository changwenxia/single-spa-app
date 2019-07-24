<template>
<div>
  <el-container>
  <el-header>
    禧云商家中心
  </el-header>
  <el-container>
    <el-aside width="200px">菜单</el-aside>
    <el-container>
      <el-main>
        <child></child>
      </el-main>

      <el-footer>底部</el-footer>
    </el-container>
  </el-container>
</el-container>
</div>
</template>


<script>
import child from '../vue1/main.vue'
export default {
  components: {
    child,
  },
  data() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    };
    return {
      tableData: Array(20).fill(item)
    }
  },
};
</script>

<style>
   .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>


<template>
  <div>
    <el-container style="height:100%;">
      <el-header>禧云商家中心</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            default-active="2" 
            class="el-menu-vertical-demo" 
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            style='height: 100%;'
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1" route='https://element.eleme.cn/2.7/#/zh-CN/component/menu'>选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <!-- <router-view></router-view> -->
          </el-main>

          <el-footer>底部</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>


<script>
import child from "../vue/main.vue";
export default {
  components: {
    child,
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
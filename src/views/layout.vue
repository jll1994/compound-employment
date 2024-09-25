<template>
  <el-container>
    <el-aside width="200px">
      <el-menu
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :default-active="activeIndex"
        :router="true"
      >
        <el-submenu index="1">
          <template slot="title">任务管理</template>
          <el-menu-item index="taskList">任务列表</el-menu-item>
          <el-menu-item index="taskTemplate">任务模板</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">充电桩任务管理</template>
          <el-menu-item index="cpFormTemplate">表单模板</el-menu-item>
          <el-menu-item index="cpTaskTemplate">任务模板</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '',
    }
  },
}
</script>

<style>
.el-container {
  height: 100%;
}
.el-aside {
  text-align: center;
  background-color: #545c64;
}
.el-main {
  overflow-y: auto;
  overflow-x: hidden;
}
</style>

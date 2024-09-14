<template>
  <el-container>
    <el-aside width="200px">
      <el-menu :default-active="activeIndex">
        <el-submenu index="1">
          <template slot="title">任务管理</template>
          <el-menu-item index="1-1">
            <router-link to="/taskList">任务列表</router-link>
          </el-menu-item>
          <el-menu-item index="1-2">
            <router-link to="/taskTemplate">任务模板</router-link>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">充电桩任务管理</template>
          <el-menu-item index="2-1">表单模板</el-menu-item>
          <el-menu-item index="2-2">任务模板</el-menu-item>
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
      activeIndex: '1',
    }
  },
}
</script>

<style>
.el-container {
  height: 100%;
}
.el-aside {
  color: #333;
  text-align: center;
}

.el-main {
  color: #333;
}
</style>

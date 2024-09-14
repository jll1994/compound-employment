<template>
  <div>
    <div class="section">基础信息</div>
    <div class="desc">
      <div class="desc__label">任务名称：</div>
      <div class="desc__content">天猫打卡</div>
    </div>
    <div class="section">审批设置</div>
    <div class="section">通知设置</div>
    <div class="section">派单设置</div>
    <div class="section">交付设置</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.section {
  padding-left: 10px;
  position: relative;
}
.section:before {
  position: absolute;
  width: 2px;
  height: 100%;
  background: blue;
}
</style>
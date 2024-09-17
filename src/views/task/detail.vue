<template>
  <div>
    <div class="border-title">基础信息</div>
    <el-descriptions :column="3">
      <el-descriptions-item label="任务名称">kooriookami</el-descriptions-item>
      <el-descriptions-item label="发单企业">18100000000</el-descriptions-item>
      <el-descriptions-item label="联系电话">苏州市</el-descriptions-item>
      <el-descriptions-item label="任务地点">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
    </el-descriptions>
    <div class="title">补贴及扣除</div>
    <el-descriptions :column="3">
      <el-descriptions-item label="餐补">满3小时补30</el-descriptions-item>
      <el-descriptions-item label="交通补贴">满3小时补30</el-descriptions-item>
      <el-descriptions-item label="扣除">工具费用20</el-descriptions-item>
    </el-descriptions>
    <div class="title">发放设置</div>
    <el-descriptions :column="3">
      <el-descriptions-item label="免审批上限">100元/人</el-descriptions-item>
      <el-descriptions-item label="延迟发放"
        >延迟60分钟发放</el-descriptions-item
      >
    </el-descriptions>
    <div class="title">二维码有效期</div>
    <el-descriptions :column="1">
      <el-descriptions-item label="报名二维码">每10分钟更新</el-descriptions-item>
      <el-descriptions-item label="签到二维码">每10分钟更新</el-descriptions-item>
      <el-descriptions-item label="签退二维码">每10分钟更新</el-descriptions-item>
    </el-descriptions>
    <div class="border-title">审批设置</div>
    <div class="formItem">
      <span class="label">接单报名需审批</span>
      <span class="content">审批人：企业管理员</span>
    </div>
    <div class="formItem">
      <span class="label">验收需要审批</span>
      <span class="content">审批人：张三</span>
    </div>
    <div class="border-title">通知设置</div>
    <div class="border-title">派单设置</div>
    <el-descriptions :column="3">
      <el-descriptions-item label="允许抢单次数">不限</el-descriptions-item>
      <el-descriptions-item label="单人抢单上线">1</el-descriptions-item>
      <el-descriptions-item>允许分享</el-descriptions-item>
      <el-descriptions-item label="派单方式">抢单</el-descriptions-item>
      <el-descriptions-item label="允许抢单人员">指定范围</el-descriptions-item>
      <el-descriptions-item>本企业自有职业者</el-descriptions-item>
    </el-descriptions>
    <div class="border-title">交付方式</div>
    <el-descriptions :column="1">
      <el-descriptions-item label="创建人/时间">张三/2024-09-08 12:00:00</el-descriptions-item>
      <el-descriptions-item label="更新人/时间">张三/2024-09-08 12:00:00</el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="less" scoped>
.title {
  margin-bottom: 10px;
  color: #606266;
}
.formItem {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #606266;
  margin-bottom: 10px;
  .label {
    width: 120px;
  }
}
</style>

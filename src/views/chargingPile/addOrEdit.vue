<template>
  <el-form>
    <el-form-item label="请选择任务类型：">
      <el-select></el-select>
    </el-form-item>
    <div class="border-title">流程审批设置</div>
    <div class="flex-align-center">
      <el-checkbox>勘测需审批：</el-checkbox>
      <span>审批人：</span>
      <el-checkbox>企业管理员</el-checkbox>
      <el-checkbox>
        <span>指定人员</span>
        <el-select placeholder="选择人员"></el-select>
      </el-checkbox>
    </div>
    <div class="flex-align-center">
      <el-checkbox>安装需审批：</el-checkbox>
      <span>审批人：</span>
      <el-checkbox>企业管理员</el-checkbox>
      <el-checkbox>
        <span>指定人员</span>
        <el-select placeholder="选择人员"></el-select>
      </el-checkbox>
    </div>
    <div class="border-title">通知设置</div>
    <div>
      <el-checkbox-group>
        <el-checkbox label="派单后短信通知施工队负责人"></el-checkbox>
        <el-checkbox label="预约后短信通知客户"></el-checkbox>
        <el-checkbox label="审批后通知施工队负责人"></el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="border-title">派单设置</div>
    <el-form-item label="允许接单次数：">
      <el-radio-group v-model="form.count">
        <el-radio label="1">单次</el-radio>
        <el-radio label="2">不限</el-radio>
        <el-radio label="3">有上限多次</el-radio>
      </el-radio-group>
      <el-input v-if="form.count === '3'"></el-input>
    </el-form-item>
    <el-form-item label="单人接待上限：">
      <el-radio-group v-model="form.count">
        <el-radio label="1">单次</el-radio>
        <el-radio label="2">不限</el-radio>
        <el-radio label="3">有上限多次</el-radio>
      </el-radio-group>
      <el-input v-if="form.count === '3'"></el-input>
    </el-form-item>
    <el-form-item label="接单是否需要报名后审批：">
      <el-radio-group v-model="form.count">
        <el-radio label="1">需要</el-radio>
        <el-radio label="2">不需要</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="派单方式：">
      <el-radio-group v-model="form.count">
        <el-radio label="1">抢单</el-radio>
        <el-radio label="2">指定</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="允许抢单人员：">
      <el-radio-group v-model="form.count">
        <el-radio label="1">全员</el-radio>
        <el-radio label="2">指定范围</el-radio>
      </el-radio-group>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        count: '',
      },
    }
  },
}
</script>

<style lang="less" scoped></style>

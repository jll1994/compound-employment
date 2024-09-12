<template>
  <el-form>
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
    <el-form-item label="分享设置：">
      <el-radio-group v-model="form.count">
        <el-radio label="1">允许分享</el-radio>
        <el-radio label="2">不允许</el-radio>
      </el-radio-group>
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
    <el-form-item label="抢单人员：">
      <el-radio-group v-model="form.count">
        <el-radio label="1">全员</el-radio>
        <el-radio label="2">指定范围</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="企业子账号是否可见：">
      <el-radio-group v-model="form.count">
        <el-radio label="1">可见</el-radio>
        <el-radio label="2">不可见</el-radio>
      </el-radio-group>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      form: {
        count: 1,
      },
    }
  },
}
</script>

<style lang="less" scoped></style>

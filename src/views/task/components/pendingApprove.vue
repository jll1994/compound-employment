<template>
  <!-- 报名待批 -->
  <div>
    <el-form inline>
      <el-form-item>
        <el-select placeholder="报名人姓名/手机号/身份证号"></el-select>
      </el-form-item>
      <el-form-item>
        <el-select placeholder="任务名称"></el-select>
      </el-form-item>
      <el-form-item>
        <el-date-picker
          type="daterange"
          range-separator="-"
          start-placeholder="报名开始日期"
          end-placeholder="报名结束日期"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">搜索</el-button>
        <el-button type="success">导出</el-button>
      </el-form-item>
    </el-form>
    <el-tabs v-model="activeName">
      <el-tab-pane label="待审批" name="1"></el-tab-pane>
      <el-tab-pane label="审批记录" name="2"></el-tab-pane>
    </el-tabs>
    <ProTable :columns="columns" :data="tableData"></ProTable>
  </div>
</template>
<script>
export default {
  data() {
    return {
      query: {},
      activeName: '1',
      columns: [
        { prop: 'StrTaskName', label: '任务名称' },
        { prop: '', label: '接单人姓名' },
        { prop: '', label: '接单人手机号' },
        { prop: '', label: '身份证号' },
        { prop: '', label: '任务类别' },
        { prop: '', label: '报名时间' },
        { prop: '', label: '最近访问地' },
        { prop: '', label: '审批结果' },
        { prop: '', label: '审批时间' },
        { prop: '', label: '累计报名' },
        { prop: '', label: '累计接单' },
        { prop: '', label: '任务描述' },
        { prop: '', label: '接单人范围' },
        { prop: '', label: '最大接单次数' },
        { prop: '', label: '任务海报' },
        { prop: '', label: '分享链接标题' },
        { prop: '', label: '个人累计结算金额' },
        { prop: '', label: '个人累计支付金额' },
      ],
      tableData: [],
    }
  },
}
</script>

<style scoped></style>

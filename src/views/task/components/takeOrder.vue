<template>
  <!-- 接单 -->
  <div>
    <el-form inline>
      <el-form-item>
        <el-select placeholder="任务名称" v-model="query.keyword"></el-select>
      </el-form-item>
      <el-form-item>
        <el-select placeholder="接单人姓名/手机号/身份证号"></el-select>
      </el-form-item>
      <el-form-item>
        <el-select
          placeholder="发放通道"
          v-model="query.ThoroughuId"
        ></el-select>
      </el-form-item>
      <el-form-item>
        <el-date-picker
          type="daterange"
          range-separator="-"
          start-placeholder="接单开始日期"
          end-placeholder="接单结束日期"
          v-model="dateRange"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">搜索</el-button>
        <el-button type="success">导出</el-button>
      </el-form-item>
    </el-form>
    <ProTable :columns="columns" :data="tableData"></ProTable>
  </div>
</template>
<script>
export default {
  data() {
    return {
      query: {
        keyword: '',
        ThoroughuId: '',
      },
      dateRange: [],
      columns: [
        { prop: 'Taskid', label: '任务编号' },
        { prop: 'StrTaskName', label: '任务名称' },
        { prop: 'StrThoroughName', label: '发放通道' },
        { prop: '', label: '接单人姓名' },
        { prop: '', label: '接单人手机号' },
        { prop: '', label: '接单时间' },
        { prop: '', label: '最近访问地' },
        { prop: '', label: '上次接单' },
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

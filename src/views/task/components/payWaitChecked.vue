<template>
  <!-- 支付待验收 -->
  <div>
    <el-form inline>
      <el-form-item>
        <el-select placeholder="任务名称"></el-select>
      </el-form-item>
      <el-form-item>
        <el-select placeholder="接单人姓名/手机号/身份证号"></el-select>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="任务编号" v-model="query.keyword"></el-input>
      </el-form-item>
      <el-form-item>
        <el-select placeholder="交付类型"></el-select>
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
          start-placeholder="交付开始日期"
          end-placeholder="交付结束日期"
          v-model="dateRange"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">搜索</el-button>
        <el-button type="success">导出</el-button>
        <el-button type="primary">下载交付文件</el-button>
      </el-form-item>
    </el-form>
    <el-tabs v-model="activeName">
      <el-tab-pane label="待验收" name="1"></el-tab-pane>
      <el-tab-pane label="验收记录" name="2"></el-tab-pane>
    </el-tabs>
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
      activeName: '1',
      columns: [
        { prop: 'Taskid', label: '任务编号' },
        { prop: 'StrTaskName', label: '任务名称' },
        { prop: 'StrThoroughName', label: '发放通道' },
        { prop: '', label: '接单人姓名' },
        { prop: '', label: '接单人手机号' },
        { prop: '', label: '身份证号' },
        { prop: '', label: '交付类型' },
        { prop: '', label: '交付附件' },
        { prop: '', label: '交付时间' },
        { prop: '', label: '交付地点' },
        { prop: '', label: '上次交付时间' },
        { prop: '', label: '累计交付' },
        { prop: '', label: '个人累计结算金额' },
        { prop: '', label: '个人累计支付金额' },
      ],
      tableData: [],
    }
  },
}
</script>

<style scoped></style>

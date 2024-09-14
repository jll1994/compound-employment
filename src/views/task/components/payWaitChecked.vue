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
        <el-input placeholder="任务编号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-select placeholder="交付类型"></el-select>
      </el-form-item>
      <el-form-item>
        <el-select placeholder="发放通道"></el-select>
      </el-form-item>
      <el-form-item>
        <el-date-picker
          type="daterange"
          range-separator="-"
          start-placeholder="交付开始日期"
          end-placeholder="交付结束日期"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">搜索</el-button>
        <el-button type="success">导出</el-button>
        <el-button type="success">下载交付文件</el-button>
      </el-form-item>
    </el-form>
    <ProTable
      :columns="columns"
      :data="tableData"
      style="width: 100%"
    ></ProTable>
  </div>
</template>
<script>
export default {
  data() {
    return {
      columns: [
        { prop: 'name', label: '任务编号' },
        { prop: 'name', label: '任务名称' },
        { prop: '', label: '发放通道' },
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
      tableData: [
        { number: '111111', name: '任务名称111' },
        { number: '222222', name: '任务名称222' },
      ],
    }
  },
}
</script>

<style scoped></style>

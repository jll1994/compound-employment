<template>
  <div>
    <el-form inline>
      <el-form-item>
        <el-select placeholder="选择表单模板"></el-select>
      </el-form-item>
      <el-form-item>
        <el-select placeholder="选择表单模板类型"></el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">搜索</el-button>
        <el-button type="success">导出</el-button>
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
      activeName: '1',
      columns: [
        { prop: '', label: '表单模板编号' },
        { prop: '', label: '表单模板名称' },
        { prop: '', label: '状态' },
        { prop: '', label: '类型' },
        { prop: '', label: '更新时间' },
        { prop: '', label: '操作' },
      ],
      tableData: [],
    }
  },
}
</script>

<style scoped></style>

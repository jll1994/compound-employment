<template>
  <!-- 任务模板 -->
  <div>
    <el-form inline>
      <el-form-item>
        <el-select placeholder="选择企业"></el-select>
      </el-form-item>
      <el-form-item>
        <el-select placeholder="选择任务"></el-select>
      </el-form-item>
      <el-form-item>
        <el-select placeholder="选择发单人"></el-select>
      </el-form-item>
      <el-form-item>
        <el-select placeholder="任务类别"></el-select>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="任务编号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-select placeholder="发放通道"></el-select>
      </el-form-item>
      <el-form-item>
        <el-date-picker
          type="daterange"
          range-separator="-"
          start-placeholder="创建开始日期"
          end-placeholder="创建结束日期"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">搜索</el-button>
        <el-button type="primary">新建模板</el-button>
        <el-button type="primary">启用</el-button>
        <el-button type="primary">禁用</el-button>
        <el-button type="success">导出</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :columns="columns"
      :data="tableData"
      style="width: 100%"
    ></el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      columns: [
        { prop: '', label: '模板编号' },
        { prop: '', label: '模板名称' },
        { prop: '', label: '发放通道' },
        { prop: '', label: '创建企业' },
        { prop: '', label: '创建人' },
        { prop: '', label: '模板类型' },
        { prop: '', label: '模板描述' },
        { prop: '', label: '接单次数限制' },
        { prop: '', label: '派单方法' },
        { prop: '', label: '允许抢单人员' },
        { prop: '', label: '指定人员' },
        { prop: '', label: '接单审批' },
        { prop: '', label: '创建时间' },
        { prop: '', label: '更新时间' },
      ],
      tableData: [],
    }
  },
}
</script>

<style scoped></style>

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
        <el-select placeholder="状态"></el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">搜索</el-button>
        <el-button type="warning" @click="handleAdd">新建模板</el-button>
        <el-button type="primary">启用</el-button>
        <el-button type="info">停用</el-button>
        <el-button type="success">导出</el-button>
      </el-form-item>
    </el-form>
    <ProTable :columns="columns" :data="tableData">
      <template slot="action" slot-scope="scope">
        <el-button type="text">停用</el-button>
        <el-button type="text">编辑</el-button>
        <el-button type="text">复制</el-button>
      </template>
    </ProTable>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: '1',
      columns: [
        { prop: 'no', label: '表单模板编号' },
        { prop: 'name', label: '表单模板名称' },
        { prop: 'status', label: '状态' },
        { prop: 'type', label: '类型' },
        { prop: 'createTime', label: '创建时间' },
        { prop: 'updateTime', label: '更新时间' },
        { prop: 'action', label: '操作', isSlot: true },
      ],
      tableData: [],
    }
  },
  mounted() {
    this.getTemplateList()
  },
  methods: {
    // 获取表单模板列表
    getTemplateList() {
      this.tableData = [...Array.from({ length: 3 })].map((_, index) => ({
        name: '蔚来确定报装信息' + index,
        type: '报装信息' + index,
      }))
    },
    handleAdd() {
      this.$router.push('/cpFormTemplateAddOrEdit')
    },
  },
}
</script>

<style scoped></style>

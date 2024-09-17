<template>
  <!-- 任务模板 -->
  <div>
    <el-form inline>
      <el-form-item>
        <el-select placeholder="选择企业"></el-select>
      </el-form-item>
      <el-form-item>
        <el-select placeholder="选择发单人"></el-select>
      </el-form-item>
      <el-form-item>
        <el-select
          placeholder="任务类别"
          v-model="query.StrRemunetype"
        ></el-select>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="任务编号" v-model="query.keyword"></el-input>
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
          start-placeholder="创建开始日期"
          end-placeholder="创建结束日期"
          v-model="dateRange"
          @change="changeDateRange"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">搜索</el-button>
        <el-button type="warning" @click="handleCreate">新建任务</el-button>
        <el-button type="warning" :disabled="true">批量导入</el-button>
        <el-button type="success">导出</el-button>
      </el-form-item>
    </el-form>
    <ProTable type="selection" :columns="columns" :data="tableData">
      <template slot="action" slot-scope="scope">
        <el-button type="text">编辑</el-button>
        <el-button type="text">派单</el-button>
        <el-button type="text">停止</el-button>
        <el-button type="text">取消</el-button>
        <el-button type="text" @click="goToDetail(scope.row)">详情</el-button>
      </template>
    </ProTable>
  </div>
</template>
<script>
import dayjs from 'dayjs'
export default {
  data() {
    return {
      query: {
        keyword: '',
        ThoroughuId: '',
        StrRemunetype: '',
      },
      dateRange: [],
      columns: [
        { prop: 'Taskid', label: '任务编号', fixed: 'left' },
        { prop: 'StrTaskName', label: '任务名称', fixed: 'left' },
        { prop: 'StrThoroughName', label: '发放通道' },
        { prop: 'StrEntName', label: '发单企业' },
        { prop: 'Username', label: '发单人' },
        { prop: 'StrRemunetype', label: '任务类别' },
        { prop: 'StrTaskpost', label: '任务描述' },
        { prop: 'StrAllowtimes', label: '接单次数限制' },
        { prop: 'StrAllowtimes', label: '派单方式' },
        { prop: 'StrAlloworder', label: '允许抢单人员' },
        { prop: '', label: '指定人员' },
        { prop: '', label: '接单审批' },
        { prop: '', label: '任务海报' },
        { prop: '', label: '分享链接标题' },
        { prop: 'DteffecDate', label: '有效期' },
        { prop: 'IntViewPsn', label: '浏览人数' },
        { prop: 'IntOrderPsn', label: '已接单人数' },
        { prop: 'IntCalculate', label: '累计核算笔数' },
        { prop: 'DecPay', label: '累计支付金额' },
        { prop: 'DtInsertDate', label: '创建时间' },
        { prop: 'DtUpdateDate', label: '更新时间' },
        { prop: '', label: '附件' },
        {
          prop: 'action',
          label: '操作',
          width: 230,
          align: 'center',
          fixed: 'right',
          isSlot: true,
        },
      ],
      tableData: [],
    }
  },
  mounted() {
    this.getTaskList()
  },
  methods: {
    changeDateRange() {
      const [startTime, endTime] = this.dateRange || []
      this.query.datestart = startTime ? dayjs(startTime).format('YYYY-MM-DD') : ''
      this.query.dateend = endTime ? dayjs(endTime).format('YYYY-MM-DD') : ''
    },
    // 获取任务列表
    getTaskList() {
      this.tableData = [...Array.from({ length: 6 })].map((_, index) => ({
        Taskid: '任务编号' + index,
        StrTaskName: '任务名称' + index,
      }))
    },
    handleCreate() {
      this.$router.push('/addOrEditTask')
    },
    // 详情
    goToDetail() {
      this.$router.push('/taskDetail')
    },
  },
}
</script>

<style scoped></style>

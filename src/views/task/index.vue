<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane
        :label="item.label"
        :name="item.name"
        v-for="item in tabPanes"
        :key="item.name"
      >
        <component :is="item.component"></component>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import TaskList from './components/taskList'
import PendingApprove from './components/pendingApprove'
import TakeOrder from './components/takeOrder'
import PayWaitChecked from './components/payWaitChecked'
import PayRecord from './components/payRecord'
export default {
  components: {
    TaskList,
    PendingApprove,
    TakeOrder,
    PayWaitChecked,
    PayRecord,
  },
  data() {
    return {
      activeName: 'taskList',
      tabPanes: [
        {
          label: '任务列表',
          name: 'taskList',
          component: TaskList,
        },
        {
          label: '报名待批',
          name: 'pendingApprove',
          component: PendingApprove,
        },
        {
          label: '接单',
          name: 'takeOrder',
          component: TakeOrder,
        },
        {
          label: '交付待验收',
          name: 'payWaitChecked',
          component: PayWaitChecked,
        },
        {
          label: '交付记录',
          name: 'payRecord',
          component: PayRecord,
        },
      ],
    }
  },
}
</script>

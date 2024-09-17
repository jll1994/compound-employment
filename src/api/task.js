import { axios } from "@/utils/request"

const taskAPI = {
  getTaskList(data) {
    return axios({
      url: '/task/list',
      method: 'post',
      data
    })
  },
  // 任务详情
  getTaskInfo(data) {
    return axios({
      url: '/task/list',
      method: 'post',
      data
    })
  },
  // 新增编辑任务基础信息
  addUpdateTask(data) {
    return axios({
      url: '/task/list',
      method: 'post',
      data
    })
  },
  // 任务派单设置
  settingTaskOrder(data) {
    return axios({
      url: '/task/list',
      method: 'post',
      data
    })
  },
  // 任务支付设置
  settingTaskPay(data) {
    return axios({
      url: '/task/list',
      method: 'post',
      data
    })
  },
  // 将任务保存为模板
  saveTaskTemplate(data) {
    return axios({
      url: '/task/list',
      method: 'post',
      data
    })
  },
  // 报名待批列表
  getApproveList(data) {
    return axios({
      url: '/task/list',
      method: 'post',
      data
    })
  },
  // 接单列表
  getTakeOrderList(data) {
    return axios({
      url: '/task/list',
      method: 'post',
      data
    })
  },
  // 交付待验收列表
  getBeCheckedList(data) {
    return axios({
      url: '/task/list',
      method: 'post',
      data
    })
  },
  // 交付记录列表
  getPayRecordList(data) {
    return axios({
      url: '/task/list',
      method: 'post',
      data
    })
  },
}

export default taskAPI
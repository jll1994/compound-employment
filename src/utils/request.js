import Vue from 'vue'
import axios from 'axios'

// 创建 axios 实例
const service = axios.create({
  baseURL: '',
  timeout: 10000, // 请求超时时间
})

const err = (error) => {
  if (error.response) {
    // 
  }
  return Promise.reject(error)
}

// request interceptor
service.interceptors.request.use(config => {
  const token = Vue.ls.get('token')
  if (token) {
    config.headers['Authorization'] = 'Bearer ' + token
  }
  return config
}, err)

// response interceptor
service.interceptors.response.use((response) => {
  return response.data
}, err)

export {
  service as axios
}

<template>
  <el-dialog
    width="60%"
    title="地图选点"
    :visible.sync="showDialog"
    append-to-body
  >
    <iframe
      width="100%"
      height="100%"
      style="border: none; width: 100%; height: 500px"
      :src="mapSrc"
    ></iframe>
  </el-dialog>
</template>

<script>
const mapSrc =
  'https://mapapi.qq.com/web/mapComponents/locationPicker/v/index.html?search=1&type=1&key=DU6BZ-5OAWH-F4ZDC-WY7Z6-Q4KVZ-DCFQE&referer=location'
export default {
  data() {
    return {
      showDialog: false,
      mapSrc,
      form: {
        // 省市区id
        areaId: [0, 0, 0],
        address: '',
        lng: '',
        lat: '',
      },
      mapData: {
        url: mapSrc,
        address: '',
        lng: '',
        lat: '',
      },
    }
  },
  created() {
    this.getInfo()
  },
  methods: {
    // 选择
    getInfo() {
      window.addEventListener(
        'message',
        (event) => {
          // 接收位置信息，用户选择确认位置点后选点组件会触发该事件，回传用户的位置信息
          const loc = event.data
          // 防止其他应用也会向该页面post信息，需判断module是否为'locationPicker'
          if (loc && loc.module == 'locationPicker') {
            this.mapData.address = loc.poiaddress
            this.mapData.lat = loc.latlng.lat
            this.mapData.lng = loc.latlng.lng
            //调用父组件方法并传值给父组件
            this.$emit('chooseAddress', this.mapData)
          }
        },
        false
      )
    },
    // 父组件调用方法,打开模态框
    openDialog() {
      this.showDialog = true
    },
    // 关闭模态框
    closeDialog() {
      this.isDialog = false
    },
  },
}
</script>

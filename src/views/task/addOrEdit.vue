<!-- 新建/编辑任务 -->
<template>
  <div>
    <el-form label-width="150px" v-if="step === 1">
      <div class="border-title">基础信息</div>
      <el-row :gutter="48">
        <el-col :span="12">
          <el-form-item label="从其他任务复制：">
            <el-select placeholder="请选择">
              <el-option
                v-for="item in taskList"
                :label="item.StrTaskName"
                :value="item.Taskid"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="选择模板：">
            <el-select placeholder="请选择">
              <el-option
                v-for="item in taskTemplates"
                :label="item.StrTaskName"
                :value="item.choiceTemtaskid"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="任务名称：">
            <el-input
              v-model="form.StrTaskName"
              placeholder="请输入"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="发单企业：">
            <el-select placeholder="请选择">
              <el-option
                v-for="item in entList"
                :label="item.entname"
                :value="item.entid"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="发放通道：">
            <el-select placeholder="请选择" v-model="form.ThoroughuId">
              <el-option
                v-for="item in channelList"
                :label="item.StrThoroughName"
                :value="item.ThoroughuId"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="开票内容：">
            <el-select placeholder="请选择" v-model="form.InvoiceuId">
              <el-option
                v-for="item in invoiceList"
                :label="item.StrInvoiceName"
                :value="item.InvoiceuId"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="联系电话：">
            <el-input
              placeholder="输入联系电话"
              v-model="form.StrcontactPhone"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="任务地点：">
            <div class="position flex-align-center">
              <el-cascader
                :options="options"
                v-model="selectedOptions"
                @change="handleRegionChange"
                placeholder="请先选择省市区"
              >
              </el-cascader>
              <el-input
                placeholder="请输入详细地址"
                v-model="form.StrAddr"
              ></el-input>
              <i class="el-icon-location"></i>
            </div>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="任务有效期：">
            <el-date-picker
              v-model="dateRange"
              type="daterange"
              range-separator="-"
              start-placeholder="开始日期"
              end-placeholder="截至日期"
              @change="changeDateRange"
            >
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="任务说明：">
            <el-input
              type="textarea"
              v-model="form.StrTaskpost"
              :maxlength="2000"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="附件：">
            <div class="attach">
              <div
                class="attach-item"
                v-for="(item, index) in attachments"
                :key="index"
              >
                <span class="name">{{ item.name }}</span>
                <i
                  class="el-icon-close close"
                  @click="handleDel(index, 'attach')"
                ></i>
              </div>
              <label for="attachFile">
                <span class="btnText">上传</span>
                <input
                  type="file"
                  id="attachFile"
                  hidden
                  @change="(e) => handleChangeFile(e, 'attach')"
                />
              </label>
            </div>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="图片：">
            <div class="attach">
              <div
                class="attach-item"
                v-for="(item, index) in images"
                :key="index"
              >
                <span class="name">{{ item.name }}</span>
                <i
                  class="el-icon-close close"
                  @click="handleDel(index, 'img')"
                ></i>
              </div>
              <label for="attachFile">
                <span class="btnText">上传</span>
                <input
                  type="file"
                  id="attachFile"
                  hidden
                  @change="(e) => handleChangeFile(e, 'img')"
                />
              </label>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
      <CollapsePanel title="任务报酬：">
        <el-radio-group v-model="form.StrRemunetype">
          <el-radio
            v-for="item in remuneTypes"
            :key="item.Strfigid"
            :label="item.Strfigid"
            >{{ item.StrfigName }}</el-radio
          >
        </el-radio-group>
        <div class="inlineItem">
          <el-input
            v-model="form.DecTaskfound"
            v-if="form.StrRemunetype === '1'"
          ></el-input>
          <template v-if="['2', '3', '4'].includes(form.StrRemunetype)">
            <el-input v-model="form.DecTaskfounds"></el-input>
            <i class="el-icon-right rightArrow"></i>
            <el-input v-model="form.DecTaskfounde"></el-input>
          </template>
          <span class="tip" v-if="form.StrRemunetype !== '5'"
            >元/{{ getUnit() }}</span
          >
          <template v-if="form.StrRemunetype === '3'">
            <el-checkbox v-model="form.StrIsdeduct" style="margin-left: 40px"
              >扣除工时</el-checkbox
            >
            <el-input class="margin-10" v-model="form.Decdeduct"></el-input>
            <span>小时/天</span>
          </template>
          <el-input
            placeholder="输入自定义任务报酬"
            style="width: 400px"
            v-model="form.DecTaskfound"
            v-if="form.StrRemunetype === '5'"
          ></el-input>
        </div>
        <div class="inlineItem">
          <span>延迟发放</span>
          <el-input class="margin-10"></el-input>
          <el-radio-group>
            <el-radio label="1">分钟</el-radio>
            <el-radio label="2">小时</el-radio>
            <el-radio label="3">天</el-radio>
          </el-radio-group>
        </div>
        <div class="inlineItem">
          <span>免审批上限</span>
          <div class="inlineItem margin-10">
            <span>每人每笔</span>
            <el-input class="margin-10" v-model="form.DecPsnOne"></el-input>
            <span>元</span>
          </div>
          <div class="inlineItem margin-10">
            <span>每笔</span>
            <el-input class="margin-10" v-model="form.DecOne"></el-input>
            <span>元</span>
          </div>
        </div>
      </CollapsePanel>
      <CollapsePanel title="补贴：">
        <ProTable :columns="columns" :data="subsidyData">
          <template slot="headerAction">
            <el-button
              type="text"
              icon="el-icon-plus"
              @click="handleAdd('subsidy')"
              >新增</el-button
            >
          </template>
          <template slot="action" slot-scope="scope">
            <el-button type="text">编辑</el-button>
            <el-button type="text">删除</el-button>
          </template>
        </ProTable>
      </CollapsePanel>
      <CollapsePanel title="扣除：">
        <ProTable :columns="columns" :data="deductData">
          <template slot="headerAction">
            <el-button
              type="text"
              icon="el-icon-plus"
              @click="handleAdd('deduct')"
              >新增</el-button
            >
          </template>
          <template slot="action" slot-scope="scope">
            <el-button type="text">编辑</el-button>
            <el-button type="text">删除</el-button>
          </template>
        </ProTable>
      </CollapsePanel>
      <CollapsePanel title="二维码有效期：">
        <div
          class="inlineItem"
          v-for="(item, index) in qrcodeList"
          :key="index"
        >
          <span class="label">{{ item.label }}</span>
          <el-input></el-input>
        </div>
      </CollapsePanel>
      <div class="border-title">审批设置</div>
      <div class="pl">
        <div
          class="inlineItem"
          v-for="(item, index) in approveList"
          :key="index"
        >
          <el-checkbox v-model="form[item.prop1]" style="width: 200px">{{
            item.title
          }}</el-checkbox>
          <span class="label">审批人：</span>
          <el-radio-group v-model="form[item.prop2]">
            <el-radio v-for="(rdo, i) in singles" :key="i">
              <span class="label">{{ rdo.text }}</span>
              <el-select placeholder="选择人员" v-if="rdo.label === '4'">
                <el-option
                  v-for="item in personList"
                  :label="item.username"
                  :value="item.userid"
                ></el-option>
              </el-select>
            </el-radio>
          </el-radio-group>
        </div>
      </div>
      <div class="border-title">通知设置</div>
      <div class="pl">
        <el-checkbox label="接单后短信通知接单人"></el-checkbox>
        <el-checkbox label="验收后短信通知接单人"></el-checkbox>
      </div>
      <div class="operate-btn">
        <el-button type="primary" @click="handleStep(1)">下一步</el-button>
        <el-button type="info" @click="handleCancel">取消</el-button>
      </div>
    </el-form>
    <!-- 补贴、扣除 新增/编辑 -->
    <el-dialog
      :title="`新增${typeName}`"
      :visible.sync="visible"
      width="680px"
      class="condDialog"
    >
      <el-form label-width="100px">
        <el-form-item label="补贴类型" v-if="type === 'subsidy'">
          <div class="inlineItem">
            <el-select>
              <el-option
                v-for="item in subsidyList"
                :label="item.StrCondName"
                :value="item.Gdcondid"
              ></el-option>
            </el-select>
            <el-input
              placeholder="输入其他补贴名称"
              style="width: 240px"
            ></el-input>
          </div>
        </el-form-item>
        <el-form-item label="扣除项目" v-if="type === 'deduct'">
          <el-input placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="完成任务满">
          <div class="inlineItem">
            <el-input></el-input>
            <span class="label">件</span>
          </div>
        </el-form-item>
        <el-form-item :label="`${typeName}金额`">
          <div class="inlineItem">
            <el-input></el-input>
            <el-radio-group>
              <el-radio label="1">元</el-radio>
              <el-radio label="2">元/件</el-radio>
            </el-radio-group>
          </div>
        </el-form-item>
        <el-form-item label="结算工时满">
          <div class="inlineItem">
            <el-input></el-input>
            <span class="label">小时</span>
          </div>
        </el-form-item>
        <el-form-item label="补贴金额">
          <div class="inlineItem">
            <el-input></el-input>
            <el-radio-group>
              <el-radio label="1">元/天</el-radio>
              <el-radio label="2">元/次</el-radio>
              <el-radio label="3">元/小时</el-radio>
            </el-radio-group>
          </div>
        </el-form-item>
        <el-form-item :label="`${typeName}备注`">
          <el-input></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="visible = false">取 消</el-button>
        <el-button type="primary" @click="visible = false">确 定</el-button>
      </div>
    </el-dialog>
    <OrderSetting v-if="step === 2" @step="handleStep"></OrderSetting>
    <DeliverySetting v-if="step === 3" @step="handleStep"></DeliverySetting>
  </div>
</template>

<script>
import { regionData } from 'element-china-area-data'
import { addUpdateTask } from '@/api/task'
import dayjs from 'dayjs'
import CollapsePanel from '@/components/CollapsePanel.vue'
import OrderSetting from './orderSetting'
import DeliverySetting from './deliverySetting'
export default {
  components: {
    OrderSetting,
    DeliverySetting,
  },
  data() {
    return {
      options: regionData,
      selectedOptions: [],
      taskList: [],
      taskTemplates: [],
      entList: [], // 企业列表
      channelList: [], // 通道列表
      invoiceList: [], // 开票内容
      attachments: [],
      images: [],
      remuneTypes: [
        { Strfigid: '1', StrfigName: '按件' },
        { Strfigid: '2', StrfigName: '按次' },
        { Strfigid: '3', StrfigName: '按小时' },
        { Strfigid: '4', StrfigName: '按天' },
        { Strfigid: '5', StrfigName: '自定义' },
      ],
      personList: [],
      subsidyList: [], // 补贴类型列表
      form: {
        StrTaskName: '',
        ThoroughuId: '',
        InvoiceuId: '',
        StrcontactPhone: '',
        StrTaskpost: '',
        StrProvince: '',
        StrCity: '',
        StrArea: '',
        StrAddr: '',
        Strlongitude: '',
        Strlatitude: '',
        StrRemunetype: '1',
        DecTaskfound: '',
        DecTaskfounds: '',
        DecTaskfounde: '',
        StrIsdeduct: false,
        Decdeduct: '',
        DecPsnOne: '',
        DecOne: '',
        StrIsReorderappr: '', // 接单报名需审批
        StrReorderappruserid: '',
        StrIsCheckacappr: '', // 验收需审批
        StrCheckacappruserid: '',
        StrIsGrantappr: '', // 发放需审批
        StrGrantappruserid: '',
        StrIsSettlappr: '', // 核算需审批
        StrSettlappruserid: '',
        StrReorderapprdist: '',
        StrCheckacapprdist: '',
        StrGrantapprdist: '',
        StrSettlapprdist: '',
      },
      dateRange: [],
      qrcodeList: [
        { label: '报名二维码', prop: 'StrsignQrcode' },
        { label: '签到二维码', prop: 'StrregQrcode' },
        { label: '签退二维码', prop: 'StrlogoutQrcode' },
      ],
      visible: false, // 补贴、扣除
      type: 'subsidy', // subsidy=补贴；deduct=扣除
      columns: [
        { prop: 'StrtypeName', label: '类型', width: 200 },
        { prop: 'DecCondition', label: '条件' },
        { prop: 'Decfound', label: '金额', width: 200 },
        { prop: 'StrRemunetype', label: '单位', width: 200 },
        {
          prop: 'action',
          columnTemplate: 'header',
          headerSlot: 'headerAction',
          width: 200,
          align: 'center',
          isSlot: true,
        },
      ],
      subsidyData: [], // 补贴表格数据
      deductData: [], // 扣除表格数据
      approveList: [
        {
          title: '接单报名需审批',
          prop1: 'StrIsReorderappr',
          prop2: 'StrReorderapprdist',
        },
        {
          title: '验收需审批',
          prop1: 'StrIsCheckacappr',
          prop2: 'StrCheckacapprdist',
        },
        {
          title: '核算需审批',
          prop1: 'StrIsSettlappr',
          prop2: 'StrSettlapprdist',
        },
        {
          title: '发放需审批',
          prop1: 'StrIsGrantappr',
          prop2: 'StrGrantapprdist',
        },
      ],
      singles: [
        { label: '1', text: '企业管理员' },
        { label: '2', text: '任务负责人' },
        { label: '3', text: '发单人' },
        { label: '4', text: '指定人员' },
      ], // 发单人
      step: 1,
    }
  },
  computed: {
    typeName() {
      const map = {
        subsidy: '补贴',
        deduct: '扣除',
      }
      return map[this.type]
    },
  },
  methods: {
    getUnit() {
      const map = {
        1: '件',
        2: '次',
        3: '小时',
        4: '天',
      }
      return map[this.form.StrRemunetype]
    },
    handleRegionChange(value) {
      console.log('111111', value)
    },
    changeDateRange() {
      const [startTime, endTime] = this.dateRange || []
      this.form.DteffecstartDate = startTime
        ? dayjs(startTime).format('YYYY-MM-DD')
        : ''
      this.form.DteffecendDate = endTime
        ? dayjs(endTime).format('YYYY-MM-DD')
        : ''
    },
    // 上传
    handleChangeFile(e, type) {
      const files = e.target.files
      if (type === 'attach') {
        this.attachments.push(files[0])
      }
      if (type === 'img') {
      }
    },
    handleDel(index, type) {
      if (type === 'attach') {
        this.attachments.splice(index, 1)
      }
      if (type === 'img') {
        this.images.splice(index, 1)
      }
    },
    handleAdd(type) {
      this.visible = true
      this.type = type
    },
    // 下一步
    handleStep(value) {
      if (this.step === 1) {
        // 保存任务基础信息
        console.log('111111', this.form)
      }
      this.step += value
    },
    // 取消
    handleCancel() {
      this.$router.go(-1)
    },
  },
}
</script>

<style lang="less" scoped>
.attach {
  display: flex;
  align-items: center;
  .attach-item {
    display: flex;
    align-items: center;
    margin-right: 15px;
    .name {
      color: #666;
      margin-right: 8px;
    }
    .close {
      color: #555;
      font-weight: bold;
      font-size: 15px;
    }
  }
  .btnText {
    color: #409eff;
    cursor: pointer;
    padding: 10px 0;
    box-sizing: border-box;
  }
}

.collapse {
  margin-left: 70px;
}
.position {
  .el-cascader {
    width: 340px;
  }
  .el-input {
    width: 340px;
    margin: 0 20px;
  }
  i {
    font-size: 20px;
    color: #606266;
  }
}
.inlineItem {
  display: flex;
  align-items: center;
  margin: 10px 0;
  span {
    font-size: 14px;
    color: #606266;
    &.label {
      padding-right: 20px;
    }
  }
  .el-input {
    width: 100px;
  }
  .rightArrow {
    color: #606266;
    font-size: 20px;
    margin: 0 10px;
  }
  .tip {
    margin-left: 10px;
  }
}
.margin-10 {
  margin: 0 10px;
}
.pl {
  padding-left: 64px;
  box-sizing: border-box;
}
.operate-btn {
  text-align: center;
  padding: 10px 0;
  box-sizing: border-box;
  .el-button {
    margin: 0 20px;
  }
}
.condDialog {
  .inlineItem {
    margin: 0;
    .el-select {
      width: 100px;
      margin-right: 20px;
    }
    .el-input {
      margin-right: 20px;
    }
  }
}
</style>

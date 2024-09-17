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
                :value="item.Taskid"
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
            <!--  -->
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
            <el-button type="text">上传</el-button>
          </el-form-item>
        </el-col>
      </el-row>
      <CollapsePanel title="任务报酬：">
        <el-radio-group v-model="form.StrRemunetype">
          <el-radio label="1">按件</el-radio>
          <el-radio label="2">按次</el-radio>
          <el-radio label="3">按时长</el-radio>
          <el-radio label="5">自定义</el-radio>
        </el-radio-group>
        <div class="inlineItem" v-if="form.StrRemunetype === '1'">
          <el-input v-model="form.DecTaskfound"></el-input>
          <span class="tip">元/件</span>
        </div>
        <div class="inlineItem" v-if="form.StrRemunetype === '2'">
          <el-input v-model="form.DecTaskfounds"></el-input>
          <i class="el-icon-right rightArrow"></i>
          <el-input v-model="form.DecTaskfounde"></el-input>
          <span class="tip">元/次</span>
        </div>
        <div class="inlineItem" v-if="form.StrRemunetype === '3'">
          <el-input v-model="form.DecTaskfounds"></el-input>
          <i class="el-icon-right rightArrow"></i>
          <el-input v-model="form.DecTaskfounde"></el-input>
          <span class="tip">
            <el-checkbox>元/小时</el-checkbox>
          </span>
          <span class="tip">
            <el-checkbox>元/天</el-checkbox>
          </span>
        </div>
        <div class="inlineItem" v-if="form.StrRemunetype === '5'">
          <el-input
            placeholder="输入自定义任务报酬"
            style="width: 400px"
            v-model="form.DecTaskfound"
          ></el-input>
        </div>
        <div class="inlineItem">
          <el-checkbox v-model="form.StrIsdeduct">扣除工时</el-checkbox>
          <el-input class="margin-10" v-model="form.Decdeduct"></el-input>
          <span>小时/天</span>
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
        <el-table :data="tableData">
          <el-table-column prop="type" label="类型" width="180">
          </el-table-column>
          <el-table-column prop="conditional" label="条件" width="180">
          </el-table-column>
          <el-table-column prop="amount" label="金额"> </el-table-column>
          <el-table-column prop="company" label="单位"> </el-table-column>
          <el-table-column>
            <template slot="header" slot-scope="scope">
              <el-button type="text" @click="handleAdd('subsidy')"
                >新增+</el-button
              >
            </template>
            <el-button type="text">编辑</el-button>
            <el-button type="text">删除</el-button>
          </el-table-column>
        </el-table>
      </CollapsePanel>
      <CollapsePanel title="扣除：">
        <el-table :data="tableData">
          <el-table-column prop="type" label="类型" width="180">
          </el-table-column>
          <el-table-column prop="conditional" label="条件" width="180">
          </el-table-column>
          <el-table-column prop="amount" label="金额"> </el-table-column>
          <el-table-column prop="company" label="单位"> </el-table-column>
          <el-table-column>
            <template slot="header" slot-scope="scope">
              <el-button type="text" @click="handleAdd('deduct')"
                >新增+</el-button
              >
            </template>
            <el-button type="text">编辑</el-button>
            <el-button type="text">删除</el-button>
          </el-table-column>
        </el-table>
      </CollapsePanel>
      <CollapsePanel title="二维码有效期：">
        <div class="inlineItem">
          <span class="label">报名二维码</span>
          <el-input></el-input>
        </div>
        <div class="inlineItem">
          <span class="label">签到二维码</span>
          <el-input></el-input>
        </div>
        <div class="inlineItem">
          <span class="label">签退二维码</span>
          <el-input></el-input>
        </div>
      </CollapsePanel>
      <div class="border-title">审批设置</div>
      <div class="pl">
        <div class="inlineItem">
          <el-checkbox v-model="form.StrIsReorderappr"
            >接单报名需审批：</el-checkbox
          >
          <span class="label">审批人：</span>
          <el-radio-group>
            <el-radio>企业管理员</el-radio>
            <el-radio>
              <span class="label">指定人员</span>
              <el-select placeholder="选择人员">
                <el-option
                  v-for="item in personList"
                  :label="item.username"
                  :value="item.userid"
                ></el-option>
              </el-select>
            </el-radio>
          </el-radio-group>
        </div>
        <div class="inlineItem">
          <el-checkbox v-model="form.StrIsCheckacappr"
            >验收需审批：</el-checkbox
          >
          <span class="label">审批人：</span>
          <el-checkbox>企业管理员</el-checkbox>
          <el-checkbox>
            <span class="label">指定人员</span>
            <el-select placeholder="选择人员">
              <el-option
                v-for="item in personList"
                :label="item.username"
                :value="item.userid"
              ></el-option>
            </el-select>
          </el-checkbox>
        </div>
        <div class="inlineItem">
          <el-checkbox v-model="form.StrIsGrantappr">发放需审批：</el-checkbox>
          <span class="label">审批人：</span>
          <el-checkbox>企业管理员</el-checkbox>
          <el-checkbox>
            <span class="label">指定人员</span>
            <el-select placeholder="选择人员">
              <el-option
                v-for="item in personList"
                :label="item.username"
                :value="item.userid"
              ></el-option>
            </el-select>
          </el-checkbox>
        </div>
      </div>
      <div class="border-title">通知设置</div>
      <div class="pl">
        <el-checkbox label="接单后短信通知接单人"></el-checkbox>
        <el-checkbox label="验收后短信通知接单人"></el-checkbox>
      </div>
      <div class="operate-btn">
        <el-button type="primary" @click="handleStep(1)">下一步</el-button>
        <el-button type="info">取消</el-button>
      </div>
    </el-form>
    <!-- 补贴、扣除 新增/编辑 -->
    <el-dialog
      title="新增补贴"
      :visible.sync="subsidyVisible"
      width="680px"
      class="condDialog"
    >
      <el-form label-width="100px">
        <el-form-item label="补贴类型">
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
        <el-form-item label="完成任务满">
          <div class="inlineItem">
            <el-input></el-input>
            <span class="label">件</span>
          </div>
        </el-form-item>
        <el-form-item label="补贴金额">
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
        <el-form-item label="补贴备注">
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
      taskList: [],
      taskTemplates: [],
      entList: [], // 企业列表
      channelList: [], // 通道列表
      invoiceList: [], // 开票内容
      personList: [],
      subsidyList: [], // 补贴类型列表
      form: {
        StrTaskName: '',
        ThoroughuId: '',
        InvoiceuId: '',
        StrcontactPhone: '',
        StrTaskpost: '',
        StrRemunetype: '1',
        DecTaskfound: '',
        DecTaskfounds: '',
        DecTaskfounde: '',
        StrIsdeduct: false,
        Decdeduct: '',
        DecPsnOne: '',
        DecOne: '',
        StrIsReorderappr: '',
        StrIsCheckacappr: '',
        StrIsGrantappr: '',
      },
      dateRange: [],
      tableData: [],
      subsidyVisible: false, // 补贴
      deductVisible: false, // 扣除
      step: 1,
    }
  },
  methods: {
    changeDateRange() {
      const [startTime, endTime] = this.dateRange || []
      this.form.DteffecstartDate = startTime
        ? dayjs(startTime).format('YYYY-MM-DD')
        : ''
      this.form.DteffecendDate = endTime
        ? dayjs(endTime).format('YYYY-MM-DD')
        : ''
    },
    handleAdd(type) {
      // 补贴
      if (type === 'subsidy') {
        this.subsidyVisible = true
      }
      // 扣除
      if (type === 'deduct') {
        this.deductVisible = true
      }
    },
    // 下一步
    handleStep(value) {
      if (this.step === 1) {
        // 保存任务基础信息
        console.log('111111', this.form)
      }
      this.step += value
    },
  },
}
</script>

<style lang="less" scoped>
.collapse {
  margin-left: 70px;
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

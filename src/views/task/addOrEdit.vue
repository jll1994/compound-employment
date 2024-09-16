<!-- 新建/编辑任务 -->
<template>
  <div>
    <el-form label-width="150px" v-if="step === 1">
      <div class="border-title">基础信息</div>
      <el-row :gutter="48">
        <el-col :span="12">
          <el-form-item label="从其他任务复制：">
            <el-select placeholder="请选择"></el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="选择模板：">
            <el-select placeholder="请选择"></el-select>
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
            <el-input placeholder="请输入"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="发放通道：">
            <el-select
              placeholder="请选择"
              v-model="form.ThoroughuId"
            ></el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="开票内容：">
            <el-select
              placeholder="请选择"
              v-model="form.InvoiceuId"
            ></el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="任务地点：">
            <el-select placeholder="请选择"></el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="任务有效期：">
            <el-date-picker
              v-model="form.DteffecstartDate"
              type="date"
              placeholder="请选择"
            >
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="任务内容：">
            <el-input type="textarea" v-model="form.StrTaskpost"></el-input>
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
          <el-input></el-input>
          <span class="tip">元/件</span>
        </div>
        <div class="inlineItem" v-if="form.StrRemunetype === '2'">
          <el-input></el-input>
          <i class="el-icon-right rightArrow"></i>
          <el-input></el-input>
          <span class="tip">元/次</span>
        </div>
        <div class="inlineItem" v-if="form.StrRemunetype === '3'">
          <el-input></el-input>
          <i class="el-icon-right rightArrow"></i>
          <el-input></el-input>
          <span class="tip">
            <el-checkbox>元/小时</el-checkbox>
          </span>
          <span class="tip">
            <el-checkbox>元/天</el-checkbox>
          </span>
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
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="type" label="类型" width="180">
          </el-table-column>
          <el-table-column prop="conditional" label="条件" width="180">
          </el-table-column>
          <el-table-column prop="amount" label="金额"> </el-table-column>
          <el-table-column prop="company" label="单位"> </el-table-column>
          <el-table-column>
            <template slot="header" slot-scope="scope">
              <el-button type="text" @click="handleAdd('subsidy')"
                >新增</el-button
              >
            </template>
            <el-button type="text">编辑</el-button>
            <el-button type="text">删除</el-button>
          </el-table-column>
        </el-table>
      </CollapsePanel>
      <CollapsePanel title="扣除：">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="type" label="类型" width="180">
          </el-table-column>
          <el-table-column prop="conditional" label="条件" width="180">
          </el-table-column>
          <el-table-column prop="amount" label="金额"> </el-table-column>
          <el-table-column prop="company" label="单位"> </el-table-column>
          <el-table-column>
            <template slot="header" slot-scope="scope">
              <el-button type="text" @click="handleAdd('deduct')"
                >新增</el-button
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
          <el-select></el-select>
        </div>
        <div class="inlineItem">
          <span class="label">签到二维码</span>
          <el-select></el-select>
        </div>
        <div class="inlineItem">
          <span class="label">签退二维码</span>
          <el-select></el-select>
        </div>
      </CollapsePanel>
      <div class="border-title">审批设置</div>
      <div class="pl">
        <div class="inlineItem">
          <el-checkbox v-model="form.StrIsReorderappr"
            >接单报名需审批：</el-checkbox
          >
          <span class="label">审批人：</span>
          <el-checkbox>企业管理员</el-checkbox>
          <el-checkbox>
            <span class="label">指定人员</span>
            <el-select placeholder="选择人员"></el-select>
          </el-checkbox>
        </div>
        <div class="inlineItem">
          <el-checkbox v-model="form.StrIsCheckacappr"
            >验收需审批：</el-checkbox
          >
          <span class="label">审批人：</span>
          <el-checkbox>企业管理员</el-checkbox>
          <el-checkbox>
            <span class="label">指定人员</span>
            <el-select placeholder="选择人员"></el-select>
          </el-checkbox>
        </div>
        <div class="inlineItem">
          <el-checkbox v-model="form.StrIsGrantappr">发放需审批：</el-checkbox>
          <span class="label">审批人：</span>
          <el-checkbox>企业管理员</el-checkbox>
          <el-checkbox>
            <span class="label">指定人员</span>
            <el-select placeholder="选择人员"></el-select>
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
    <!-- 新增/编辑 -->
    <el-dialog title="新增补贴" :visible.sync="subsidyVisible" width="680px">
      <el-form label-width="100px">
        <el-form-item label="补贴类型">
          <el-select></el-select>
        </el-form-item>
        <el-form-item label="完成任务满">
          <div class="inlineItem">
            <el-input></el-input>
            <span>件</span>
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
            <span>小时</span>
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
      form: {
        StrTaskName: '',
        StrRemunetype: '1',
      },
      tableData: [],
      subsidyVisible: false, // 补贴
      deductVisible: false, // 扣除
      step: 1,
    }
  },
  methods: {
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
    margin: 0 10px;
    font-size: 20px;
  }
  .tip {
    margin-left: 5px;
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
</style>

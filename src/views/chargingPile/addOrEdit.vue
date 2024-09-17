<template>
  <div>
    <el-form label-width="160px">
      <el-form-item label="请选择任务类型：">
        <el-select></el-select>
      </el-form-item>
      <div class="border-title">流程审批设置</div>
      <div class="pl">
        <div class="inlineItem">
          <el-checkbox v-model="form.StrIsReorderappr">勘测需审批：</el-checkbox>
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
          <el-checkbox v-model="form.StrIsCheckacappr">安装需审批：</el-checkbox>
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
      </div>
      <div class="border-title">通知设置</div>
      <div class="pl">
        <el-checkbox label="派单后后短信通知施工队负责人"></el-checkbox>
        <el-checkbox label="预约后短信通知客户"></el-checkbox>
        <el-checkbox label="审批后通知施工队负责人"></el-checkbox>
      </div>
      <div class="border-title">派单设置</div>
      <el-form-item label="允许接单次数：">
        <el-radio-group v-model="form.StrAllowtimes">
          <el-radio label="1">单次</el-radio>
          <el-radio label="2">不限</el-radio>
          <el-radio label="3">有上限多次</el-radio>
        </el-radio-group>
        <el-input
          v-if="form.count === '3'"
          v-model="form.IntAllowtimes"
        ></el-input>
      </el-form-item>
      <el-form-item label="单人接待上限：">
        <el-radio-group v-model="form.StrPsnAllowtimes">
          <el-radio label="1">单次</el-radio>
          <el-radio label="2">不限</el-radio>
          <el-radio label="3">有上限多次</el-radio>
        </el-radio-group>
        <el-input
          v-if="form.count === '3'"
          v-model="form.IntPsnAllowtimes"
        ></el-input>
      </el-form-item>
      <el-form-item label="分享设置：">
        <el-radio-group v-model="form.StrIsShare">
          <el-radio label="1">允许分享</el-radio>
          <el-radio label="0">不允许</el-radio>
        </el-radio-group>
      </el-form-item>
      <CollapsePanel title="派单方式：" class="modePanel">
        <template #extra>
          <el-radio-group v-model="form.StrDispatchtype">
            <el-radio label="1">抢单</el-radio>
            <el-radio label="2">指定</el-radio>
          </el-radio-group>
        </template>
        <!-- 抢单 -->
        <template v-if="form.StrDispatchtype === '1'">
          <el-form-item
            label-width="110px"
            label="允许抢单人员："
            class="assignPerson"
          >
            <el-radio-group class="vertical-radioGroup">
              <el-radio>全员</el-radio>
              <el-radio>
                <span class="label">设置范围：</span>
                <el-select></el-select>
                <el-button type="success" size="mini">增加</el-button>
              </el-radio>
            </el-radio-group>
            <div>
              <el-checkbox v-model="form.StrReceivedorder">曾接单人员</el-checkbox>
            </div>
          </el-form-item>
        </template>
        <!-- 指定人员 -->
        <el-form-item
          v-if="form.StrDispatchtype === '2'"
          label-width="100px"
          label="指定人员："
          class="assignPerson"
        >
          <el-radio-group class="vertical-radioGroup">
            <el-radio>
              <span class="label">人工指定</span>
              <el-select></el-select>
            </el-radio>
            <el-radio>
              <div>
                自动指定：（以下条件满足其中之一时，自动派单至指定人员）
              </div>
            </el-radio>
          </el-radio-group>
          <div class="rules">
            <div class="rule-item">
              <span>规则1</span>
              <el-select></el-select>
              <i class="el-icon-delete-solid icon"></i>
            </div>
            <el-button type="text" @click="addRule">新增规则+</el-button>
          </div>
        </el-form-item>
      </CollapsePanel>
      <div class="border-title">配置信息模板</div>
      <el-form-item label="勘测基本流程信息表">
        <el-select></el-select>
      </el-form-item>
      <el-form-item label="确定报装信息表">
        <el-select></el-select>
      </el-form-item>
      <el-form-item label="安装流程基本信息表">
        <el-select></el-select>
      </el-form-item>
    </el-form>
    <div class="operate-btn">
      <el-button type="primary">保存</el-button>
      <el-button type="info">取消</el-button>
    </div>
    <!-- 新增规则 -->
    <el-dialog title="新增规则" :visible.sync="visible" width="600px">
      <div slot="footer">
        <el-button type="primary" @click="visible = false">保 存</el-button>
        <el-button type="info" @click="visible = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        StrAllowtimes: '1',
        IntAllowtimes: '',
        StrPsnAllowtimes: '1',
        IntPsnAllowtimes: '',
        StrIsShare: '1',
        StrDispatchtype: '1',
        StrGenderreq: '0',
        StrIsAgereq: '0',
        IntAgereqstart: '',
        IntAgereqend: '',
        StrEdureq: '',
        StrExperreq: '',
        StrOther: '',
        StrIsOpen: '1',
      },
      visible: false,
    }
  },
  methods: {
    handleStep(value) {
      this.$emit('step', value)
    },
    // 新增规则
    addRule() {
      this.visible = true
    },
  },
}
</script>

<style lang="less" scoped>
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
.vertical-radioGroup {
  .el-radio {
    display: flex;
    align-items: center;
    line-height: 36px;
  }
  .label {
    margin-right: 10px;
  }
  .el-button {
    margin-left: 20px;
  }
}
.modePanel {
  margin-left: 60px;
  ::v-deep .collapse__content {
    background-color: #f2f2f2;
    border: none;
  }
}
.ageRequest {
  color: #606266;
  .el-input {
    width: 100px;
  }
  .rightArrow {
    margin: 0 10px;
    font-size: 20px;
  }
  .text {
    font-size: 14px;
    margin: 0 10px;
  }
}
.assignPerson {
  margin-bottom: 0;
}
.rule-item {
  margin: 10px 0;
  color: #606266;
  span {
    padding-right: 10px;
    font-size: 14px;
  }
  .icon {
    font-size: 18px;
    margin-left: 16px;
  }
}
.pl {
  margin-bottom: 20px;
  padding-left: 64px;
  box-sizing: border-box;
}
.operate-btn {
  text-align: center;
  padding: 10px 0;
  .el-button {
    margin: 0 20px;
  }
}
</style>

<template>
  <div>
    <div class="border-title">派单设置</div>
    <el-form label-width="160px">
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
                <el-select>
                  <el-option label="1" value="1"></el-option>
                </el-select>
                <el-button type="success" size="mini">增加</el-button>
              </el-radio>
            </el-radio-group>
            <div>
              <el-checkbox v-model="form.StrReceivedorder"
                >曾接单人员</el-checkbox
              >
            </div>
          </el-form-item>
          <CollapsePanel title="接单人要求：" class="demandPanel">
            <el-form label-width="100px">
              <el-form-item label="性别要求：">
                <el-radio-group v-model="form.StrGenderreq">
                  <el-radio label="1">男</el-radio>
                  <el-radio label="2">女</el-radio>
                  <el-radio label="0">不限</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="年龄要求：">
                <div class="flex-align-center ageRequest">
                  <el-input v-model="form.IntAgereqstart"></el-input>
                  <i class="el-icon-right rightArrow"></i>
                  <el-input v-model="form.IntAgereqend"></el-input>
                  <span class="text">岁</span>
                  <el-checkbox v-model="form.StrIsAgereq">不限</el-checkbox>
                </div>
              </el-form-item>
              <el-form-item label="学历要求：">
                <el-select>
                  <el-option label="1" value="1"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="工作要求：">
                <el-select>
                  <el-option label="1" value="1"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="其他要求：">
                <el-input></el-input>
              </el-form-item>
            </el-form>
          </CollapsePanel>
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
              <el-select>
                <el-option label="1" value="1"></el-option>
              </el-select>
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
              <el-select>
                <el-option label="1" value="1"></el-option>
              </el-select>
              <i class="el-icon-delete-solid icon"></i>
            </div>
            <el-button type="text" @click="addRule">新增规则+</el-button>
          </div>
        </el-form-item>
      </CollapsePanel>
      <el-form-item label="企业子账号是否可见：">
        <el-radio-group v-model="form.StrIsOpen">
          <el-radio label="1">可见</el-radio>
          <el-radio label="2">不可见</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <div class="operate-btn">
      <el-button type="success" @click="handleStep(-1)">上一步</el-button>
      <el-button type="primary" @click="handleStep(1)">下一步</el-button>
      <el-button type="info">取消</el-button>
    </div>
    <!-- 新增规则 -->
    <el-dialog title="新增规则" :visible.sync="visible" width="600px">
      <div class="ruleDialog">
        <div class="title">接单人须符合以下所有条件：</div>
        <div class="condition-item">
          <span class="label">接单人</span>
          <el-select placeholder="接单人所在城市"></el-select>
          <el-select placeholder="选择条件"></el-select>
          <span class="content">宁波</span>
        </div>
        <div class="condition-item">
          <span class="label">接单人</span>
          <el-select placeholder="选择人员属性"></el-select>
          <el-select placeholder="选择条件"></el-select>
          <span class="label">任务</span>
          <el-select placeholder="选择任务属性"></el-select>
          <el-button type="text">添加行+</el-button>
        </div>
      </div>
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
  .demandPanel {
    ::v-deep .collapse__content {
      background-color: #fff;
      border: 1px solid #dcdfe6;
    }
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
.ruleDialog {
  .title {
    margin-bottom: 10px;
  }
  .condition-item {
    margin-bottom: 10px;
    .label,
    .el-select,
    .content {
      margin-right: 10px;
    }
    .el-select {
      width: 120px;
    }
  }
}
.operate-btn {
  text-align: center;
  padding: 10px 0;
  .el-button {
    margin: 0 20px;
  }
}
</style>

<!-- 交付设置 -->
<template>
  <div>
    <div class="border-title">选择交付方式</div>
    <div class="delivery clockContent">
      <el-checkbox v-model="baseForm.StrIsClock" style="margin-right: 16px"
        >打卡</el-checkbox
      >
      <div class="flex-sub">
        <el-radio-group v-model="clockType" @change="changeClockType">
          <el-radio label="1" style="margin-bottom: 10px; margin-right: 0">
            <span class="label">常规打卡</span>
            <el-input
              placeholder="请输入需显示内容"
              v-model="baseForm.StrRegularCont"
            ></el-input>
            <el-checkbox v-model="baseForm.StrRegularposit"
              >需要地理位置</el-checkbox
            >
          </el-radio>
          <el-radio label="2" class="flex">
            <div class="flex">
              <span class="label">签到签退</span>
              <div class="signInOut">
                <div class="signInOut-item">
                  <el-checkbox label="签到打卡"></el-checkbox>
                  <el-input
                    v-model="baseForm.StrSigninCont"
                    placeholder="请输入需显示内容"
                  ></el-input>
                  <el-checkbox v-model="baseForm.StrSigninposit"
                    >需要地理位置</el-checkbox
                  >
                </div>
                <div class="signInOut-item">
                  <el-checkbox label="签退打卡"></el-checkbox>
                  <el-input
                    v-model="baseForm.StrSignoutCont"
                    placeholder="请输入需显示内容"
                  ></el-input>
                  <el-checkbox v-model="baseForm.StrSignoutposit"
                    >需要地理位置</el-checkbox
                  >
                </div>
              </div>
            </div>
          </el-radio>
        </el-radio-group>
      </div>
      <div class="flex-sub">
        <el-checkbox v-model="baseForm.Strlimitpostring"
          >限定打卡点（电子围栏）</el-checkbox
        >
        <div class="around">
          <span>周围</span>
          <span class="operator minus">-</span>
          <el-input v-model="baseForm.stringaround"></el-input>
          <span class="operator plus">+</span>
          <span>米</span>
        </div>
      </div>
    </div>
    <div class="delivery flex-align-center">
      <el-checkbox v-model="baseForm.StrIsPhograph">拍照</el-checkbox>
      <div class="delivery-condition">
        <el-input-number
          v-model="baseForm.stringPhographs"
          controls-position="right"
          :min="1"
        ></el-input-number>
        <span class="text">＜张数≤</span>
        <el-input-number
          v-model="baseForm.stringPhographe"
          controls-position="right"
          :min="1"
        ></el-input-number>
      </div>
      <div class="delivery-content">
        <span>显示内容：</span>
        <el-input
          v-model="baseForm.StrPhographeCont"
          placeholder="请输入需显示内容"
        ></el-input>
      </div>
    </div>
    <div class="delivery flex-align-center">
      <el-checkbox v-model="baseForm.StrIsAnnex">上传附件</el-checkbox>
      <div class="delivery-condition">
        <el-input-number
          v-model="baseForm.stringAnnexs"
          controls-position="right"
          :min="1"
        ></el-input-number>
        <span class="text">＜个数≤</span>
        <el-input-number
          v-model="baseForm.stringAnnexe"
          controls-position="right"
          :min="1"
        ></el-input-number>
      </div>
      <div class="delivery-content">
        <span>显示内容：</span>
        <el-input
          v-model="baseForm.StrAnnexCont"
          placeholder="请输入需显示内容"
        ></el-input>
      </div>
    </div>
    <div class="delivery">
      <el-checkbox v-model="baseForm.StrIsForm">填写表单</el-checkbox>
      <el-form
        inline
        class="inlineFormItem"
        v-for="(_, index) in formItems"
        :key="index"
      >
        <el-form-item>
          <el-checkbox v-model="formData[index].checked"></el-checkbox>
        </el-form-item>
        <el-form-item>
          <span>{{ index + 1 }}</span>
        </el-form-item>
        <el-form-item label="显示标题：">
          <el-input v-model="formData[index].StrTitle"></el-input>
        </el-form-item>
        <el-form-item label="行类型：">
          <el-select v-model="formData[index].Strfromtype">
            <el-option label="单选" value="single"></el-option>
            <el-option label="多选" value="multiple"></el-option>
          </el-select>
          <el-select
            v-model="formData[index].StrIsRequired"
            style="margin-left: 16px"
          >
            <el-option label="必填" value="1"></el-option>
            <el-option label="非必填" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="选择：">
          <el-select></el-select>
        </el-form-item>
        <el-form-item label="可选项：">
          <span>是，否</span>
          <i class="el-icon-edit-outline icon"></i>
        </el-form-item>
        <el-form-item label="选择方式：">
          <el-select></el-select>
        </el-form-item>
        <el-form-item label="字体大小：">
          <el-input class="fontSize"></el-input>
        </el-form-item>
        <el-form-item label="颜色：">
          <el-color-picker
            v-model="formData[index].StrFontcolor"
          ></el-color-picker>
        </el-form-item>
      </el-form>
      <div class="form-operate flex-center">
        <div class="checkAll">
          <el-checkbox>全选</el-checkbox>
        </div>
        <div class="btns">
          <div class="item" @click="handleAddRow">
            <i class="el-icon-circle-plus"></i>
            <span>添加行</span>
          </div>
          <div class="item" @click="handleDelRow">
            <i class="el-icon-remove"></i>
            <span>删除行</span>
          </div>
          <div class="item">
            <i class="el-icon-circle-plus"></i>
            <span>添加条件</span>
          </div>
          <div class="item">
            <i class="el-icon-circle-plus"></i>
            <span>添加条件行</span>
          </div>
        </div>
      </div>
    </div>
    <div class="operate-btn">
      <el-button type="success" @click="handleStep(-1)">上一步</el-button>
      <el-button type="primary">完成</el-button>
      <el-button type="warning">保存为模板</el-button>
      <el-button type="info">取消</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      clockType: '1', // 1=常规打卡；2=签到签退打卡
      baseForm: {
        StrIsClock: false,
        StrRegularCont: '',
        StrRegularposit: false,
        StrSigninCont: '',
        StrSigninposit: false,
        StrSignoutCont: '',
        StrSignoutposit: false,
        Strlimitpostring: false,
        stringaround: '',
        StrIsPhograph: false,
        stringPhographs: '',
        stringPhographe: '',
        StrPhographeCont: '',
        StrIsAnnex: false,
        stringAnnexs: '',
        stringAnnexe: '',
        StrAnnexCont: '',
        StrIsForm: false,
      },
      formParams: {
        StrTitle: '',
        Strfromtype: '',
        Strfromtypename: '',
        StrIsRequired: '1',
        StrOptional: [],
        StrOptiontype: '1',
        StrTypeface: '1',
        StrFontcolor: '',
      },
      formItems: [],
      formData: {},
    }
  },
  methods: {
    changeClockType(value) {
      if (value === '1') {
        this.baseForm.StrRegularClock = '1'
        this.baseForm.StrSignClock = ''
      }
      if (value === '2') {
        this.baseForm.StrSignClock = '1'
        this.baseForm.StrRegularClock = ''
      }
    },
    // 添加行
    handleAddRow() {
      const len = this.formItems.length
      this.formItems.push(this.formParams)
      this.$set(this.formData, len, {})
    },
    // 删除行
    handleDelRow() {},
    handleStep(value) {
      this.$emit('step', value)
    },
  },
}
</script>

<style lang="less" coped>
.delivery {
  color: #606266;
  padding: 10px 20px;
  margin-top: -1px;
  border: 1px solid #dcdfe6;
  &-condition {
    display: flex;
    align-items: center;
    margin: 0 10px;
    .el-input-number {
      width: 80px;
    }
    .text {
      margin: 0 10px;
    }
  }
  &-content {
    display: flex;
    align-items: center;
    span {
      width: 120px;
    }
  }
}
.clockContent {
  display: flex;
  .el-input {
    width: 180px;
    margin: 0 20px;
  }
  .label {
    margin-right: 20px;
  }
  .signInOut {
    .signInOut-item {
      margin-bottom: 10px;
    }
  }
}
.around {
  display: inline-block;
  margin-left: 20px;
  .operator {
    font-size: 18px;
    &.minus {
      margin-left: 20px;
    }
    &.plus {
      margin-right: 20px;
    }
  }
  .el-input {
    width: 50px;
    margin: 0 5px;
  }
}
.inlineFormItem {
  padding-left: 30px;
  margin-top: 15px;
  .el-form-item {
    margin-bottom: 0;
  }
  .el-select {
    width: 100px;
  }
  .icon {
    font-size: 16px;
    color: #000;
    margin: 0 5px;
  }
  .fontSize {
    width: 60px;
  }
}
.form-operate {
  padding: 8px 10px;
  border: 1px solid #dcdfe6;
  background-color: rgba(230, 162, 60, 0.1);
  margin: 15px 0 15px 30px;
  position: relative;
  .checkAll {
    position: absolute;
    top: 5px;
    left: 15px;
  }
  .btns {
    display: flex;
    align-items: center;
    .item {
      display: flex;
      align-items: center;
      margin: 0 25px;
      cursor: pointer;
      i {
        font-size: 18px;
        color: #409eff;
      }
      span {
        font-size: 14px;
        color: #409eff;
        margin-left: 8px;
      }
    }
  }
}
.operate-btn {
  text-align: center;
  padding: 10px 0;
  margin-top: 20px;
  .el-button {
    margin: 0 20px;
  }
}
</style>

<!-- 交付设置 -->
<template>
  <div>
    <div class="border-title">选择交付方式</div>
    <div class="delivery clockContent">
      <el-checkbox style="margin-right: 16px">打卡</el-checkbox>
      <div class="flex-sub">
        <el-radio-group>
          <el-radio style="margin-bottom: 10px; margin-right: 0">
            <span class="label">常规打卡</span>
            <el-input placeholder="请输入需显示内容"></el-input>
            <el-checkbox>需要地理位置</el-checkbox>
          </el-radio>
          <el-radio class="flex">
            <div class="flex">
              <span class="label">签到签退</span>
              <div class="signInOut">
                <div class="signInOut-item">
                  <el-checkbox label="签到打卡"></el-checkbox>
                  <el-input placeholder="请输入需显示内容"></el-input>
                  <el-checkbox>需要地理位置</el-checkbox>
                </div>
                <div class="signInOut-item">
                  <el-checkbox label="签退打卡"></el-checkbox>
                  <el-input placeholder="请输入需显示内容"></el-input>
                  <el-checkbox>需要地理位置</el-checkbox>
                </div>
              </div>
            </div>
          </el-radio>
        </el-radio-group>
      </div>
      <div class="flex-sub">
        <el-checkbox>限定打卡点（电子围栏）</el-checkbox>
      </div>
    </div>
    <div class="delivery flex-align-center">
      <el-checkbox>拍照</el-checkbox>
      <div class="delivery-condition">
        <el-input-number controls-position="right" :min="1"></el-input-number>
        <span class="text">＜张数≤</span>
        <el-input-number controls-position="right" :min="1"></el-input-number>
      </div>
      <div class="delivery-content">
        <span>显示内容：</span>
        <el-input placeholder="请输入需显示内容"></el-input>
      </div>
    </div>
    <div class="delivery flex-align-center">
      <el-checkbox>上传附件</el-checkbox>
      <div class="delivery-condition">
        <el-input-number controls-position="right" :min="1"></el-input-number>
        <span class="text">＜个数≤</span>
        <el-input-number controls-position="right" :min="1"></el-input-number>
      </div>
      <div class="delivery-content">
        <span>显示内容：</span>
        <el-input placeholder="请输入需显示内容"></el-input>
      </div>
    </div>
    <div class="delivery">
      <el-checkbox>填写表单</el-checkbox>
      <el-form
        inline
        class="inlineFormItem"
        v-for="(form, index) in formItems"
        :key="index"
      >
        <el-form-item>
          <el-checkbox></el-checkbox>
        </el-form-item>
        <el-form-item label="显示标题：">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="行类型：">
          <el-select>
            <el-option label="单选" value="single"></el-option>
            <el-option label="多选" value="multiple"></el-option>
          </el-select>
          <el-select style="margin-left: 16px">
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
          <el-select></el-select>
        </el-form-item>
      </el-form>
      <div class="form-operate">
        <div class="checkAll">
          <el-checkbox>全选</el-checkbox>
        </div>
        <div class="btns">
          <div class="item">
            <i class="el-icon-circle-plus"></i>
            <span>添加行</span>
          </div>
          <div class="item">
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
      formItems: [...Array.from({ length: 3 })].map(() => {
        return this.formParams
      }),
    }
  },
  methods: {
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
  .flex-sub {
    .el-input {
      width: 180px;
      margin-right: 20px;
    }
    .label {
      margin-right: 20px;
    }
  }
  .signInOut {
    .signInOut-item {
      margin-bottom: 10px;
    }
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
  display: flex;
  align-items: center;
  padding: 8px 10px;
  border: 1px solid #dcdfe6;
  background-color: rgba(230, 162, 60, 0.1);
  margin: 15px 0 15px 30px;
  .checkAll {
    margin-right: 100px;
  }
  .btns {
    display: flex;
    align-items: center;
    .item {
      display: flex;
      align-items: center;
      margin: 0 20px;
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

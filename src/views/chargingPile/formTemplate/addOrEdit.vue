<!-- 交付设置 -->
<template>
  <div>
    <el-form label-width="140px">
      <el-form-item label="选择表单类型：">
        <el-select></el-select>
      </el-form-item>
      <el-form-item label="表单模板名称：">
        <el-input></el-input>
      </el-form-item>
    </el-form>
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
          <span>添加子表单</span>
        </div>
      </div>
    </div>
    <div class="operate-btn">
      <el-button type="primary">保存</el-button>
      <el-button type="info" @click="handleCancel">取消</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      baseForm: {},
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
    // 添加行
    handleAddRow() {
      const len = this.formItems.length
      this.formItems.push(this.formParams)
      this.$set(this.formData, len, {})
    },
    // 删除行
    handleDelRow() {},
    // 取消
    handleCancel() {
      this.$router.go(-1)
    },
  },
}
</script>

<style lang="less" coped>
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

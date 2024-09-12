<!-- 交付设置 -->
<template>
  <div>
    <div class="inlineItem">
      <el-checkbox>拍照</el-checkbox>
      <div class="inlineItem-conditional">
        <el-input></el-input>
        <span>＜张数≤</span>
        <el-input></el-input>
      </div>
      <div class="inlineItem-content">
        <span>显示内容：</span>
        <el-input></el-input>
      </div>
    </div>
    <div class="inlineItem">
      <el-checkbox>上传附件</el-checkbox>
      <div class="inlineItem-conditional">
        <el-input></el-input>
        <span>＜个数≤</span>
        <el-input></el-input>
      </div>
      <div class="inlineItem-content">
        <span>显示内容：</span>
        <el-input></el-input>
      </div>
    </div>
    <div>
      <el-checkbox>填写表单</el-checkbox>
      <el-form inline class="inlineForm">
        <div
          class="inlineFormItem"
          v-for="(item, index) in formItems"
          :key="index"
        >
          <el-form-item>
            <el-checkbox></el-checkbox>
          </el-form-item>
          <el-form-item label="显示标题：">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="行类型：">
            <el-select></el-select>
            <el-select></el-select>
          </el-form-item>
          <el-form-item label="选择：">
            <el-select></el-select>
          </el-form-item>
          <el-form-item label="可选项：">
            <el-select></el-select>
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
        </div>
      </el-form>
      <div class="operate">
        <div class="checkAll">
          <el-checkbox>全选</el-checkbox>
        </div>
        <div class="operate-btn">
          <div class="item flex">
            <i class="el-icon-circle-plus"></i>
            <span>添加行</span>
          </div>
          <div class="item flex">
            <i class="el-icon-remove"></i>
            <span>删除行</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formItems: [...Array.from({ length: 5 })].map(() => {}),
    }
  },
}
</script>

<style lang="less" coped>
.flex {
  display: flex;
  align-items: center;
}
.inlineItem {
  display: flex;
  align-items: center;
  color: #606266;
  margin-bottom: 16px;
  &-conditional {
    display: flex;
    align-items: center;
    margin: 0 10px;
    .el-input {
      width: 100px;
    }
    span {
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
.inlineForm {
  .el-select {
    width: 100px;
  }
  .fontSize {
    width: 80px;
  }
}
.operate {
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #dcdfe6;
  .operate-btn {
    display: flex;
    align-items: center;
    .item {
      margin: 0 20px;
      span {
        color: #606266;
        margin-left: 8px;
      }
    }
  }
}
</style>

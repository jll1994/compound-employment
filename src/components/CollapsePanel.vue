<template>
  <div class="collapse">
    <label :for="title" class="collapse__title">
      <slot name="title"
        ><span class="label">{{ title }}</span></slot
      >
      <i class="el-icon-caret-bottom icon"></i>
      <slot name="extra"></slot>
    </label>
    <input type="checkbox" :id="title" hidden />
    <div class="collapse__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
  data() {
    return {}
  },
}
</script>

<style lang="less" scoped>
.collapse {
  &__title {
    display: flex;
    align-items: center;
    .label {
      padding-right: 12px;
      text-align: right;
      box-sizing: border-box;
      font-size: 14px;
      color: #606266;
      line-height: 36px;
    }
    .icon {
      font-size: 24px;
      color: #409eff;
      margin-right: 20px;
    }
  }
  &__content {
    // display: none;
    padding: 10px 30px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    margin: 6px 0;
  }
}
input[type='checkbox']:checked + .collapse__content {
  display: block;
}
</style>

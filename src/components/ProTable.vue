<template>
  <el-table v-bind="$attrs">
    <el-table-column v-for="item in columns" :key="item.prop" v-bind="item">
      <!--使用表格表格插槽 -->
      <template v-if="item.slot" v-slot="scope">
        <slot
          :name="item.prop || item.name"
          :row="scope.row"
          :index="scope.$index"
        ></slot>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style></style>

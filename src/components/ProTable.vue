<template>
  <el-table v-bind="$attrs">
    <el-table-column
      v-if="$attrs.type === 'selection'"
      type="selection"
      align="center"
      width="45"
    >
    </el-table-column>
    <el-table-column
      v-if="$attrs.type === 'index'"
      type="index"
      label="序号"
      align="center"
      width="50"
    >
    </el-table-column>
    <el-table-column
      v-for="(item, index) in columns"
      :key="item.prop + index"
      v-bind="item"
    >
      <!--使用表格插槽 -->
      <template
        v-if="item.hasOwnProperty('columnTemplate')"
        :slot="item.columnTemplate"
        slot-scope="scope"
      >
        <slot
          v-if="item.headerSlot"
          :name="item.headerSlot"
          :row="scope.row"
          :index="index"
        />
      </template>
      <template slot-scope="scope">
        <div v-if="item.isSlot">
          <slot
            :name="item.prop || item.name"
            :row="scope.row"
            :index="scope.$index"
          ></slot>
        </div>
        <div v-else>
          <span>{{ scope.row[item.prop] }}</span>
        </div>
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

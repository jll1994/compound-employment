<template>
  <div>
    <el-form label-width="100px">
      <el-row :gutter="48">
        <el-col :span="12">
          <el-form-item label="任务名称：">
            <el-input placeholder="请输入"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="发单企业：">
            <el-input placeholder="请输入"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="发放通道：">
            <el-select placeholder="请选择"></el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="开票内容：">
            <el-select placeholder="请选择"></el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="任务地点：">
            <el-select placeholder="请选择"></el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="任务有效期：">
            <el-select placeholder="请选择"></el-select>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="任务内容：">
            <el-input type="textarea"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="任务报酬">
        <el-radio-group v-model="form.type">
          <el-radio label="1">按件</el-radio>
          <el-radio label="2">按次</el-radio>
          <el-radio label="3">按时长</el-radio>
          <el-radio label="4">自定义</el-radio>
        </el-radio-group>
        <div class="inlineItem" v-if="form.type === '1'">
          <el-input></el-input>
          <span class="tip">元/件</span>
        </div>
        <div class="inlineItem" v-if="form.type === '2'">
          <el-input></el-input>
          <i class="el-icon-right rightArrow"></i>
          <el-input></el-input>
          <span class="tip">元/次</span>
        </div>
        <div class="inlineItem" v-if="form.type === '3'">
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
      </el-form-item>
      <el-form-item label="补贴">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="类型" width="180">
          </el-table-column>
          <el-table-column prop="name" label="条件" width="180">
          </el-table-column>
          <el-table-column prop="address" label="金额"> </el-table-column>
          <el-table-column prop="address" label="单位"> </el-table-column>
          <el-table-column>
            <el-button type="text" plain>编辑</el-button>
            <el-button type="text" plain>删除</el-button>
          </el-table-column>
        </el-table>
      </el-form-item>
      <el-form-item label="扣除">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="类型" width="180">
          </el-table-column>
          <el-table-column prop="name" label="条件" width="180">
          </el-table-column>
          <el-table-column prop="address" label="金额"> </el-table-column>
          <el-table-column prop="address" label="单位"> </el-table-column>
          <el-table-column>
            <el-button type="text" plain>编辑</el-button>
            <el-button type="text" plain>删除</el-button>
          </el-table-column>
        </el-table>
      </el-form-item>
    </el-form>
    <!-- 新增/编辑 -->
    <el-dialog title="新增补贴" :visible.sync="visible" width="680px">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        type: '1',
      },
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        },
      ],
      visible: true,
    }
  },
}
</script>

<style scoped>
.inlineItem {
  display: flex;
  align-items: center;
  margin: 10px 0;
}
.inlineItem .el-input {
  width: 100px;
}
.rightArrow {
  margin: 0 10px;
  font-size: 20px;
}
.margin-10 {
  margin: 0 10px;
}
.tip {
  margin-left: 5px;
}
</style>

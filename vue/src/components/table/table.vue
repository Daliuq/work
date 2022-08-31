<template>
  <div >
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      :row-class-name="tableRowClassName"
    >

      <el-table-column
        fixed
        prop="date"
        label="日期"
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="province"
        label="省份"
        width="120">
      </el-table-column>
      <el-table-column
        prop="city"
        label="市区"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        width="300">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="邮编"
        width="120">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <button @click="Click">点我</button>
  </div>
</template>
<style scoped>

</style>

<script>

import axios from "axios";
export default {
  name: "table",
  methods: {
    getMsg:function (){
      //发出get请求， 后续的.then()处理数据，
      // then中用箭头函数的形式，因为后续要处理到data中的msg变量
      axios.get('/getMsg').then((res) =>{
        //获取数据
        this.msg=res.data
        //获取请求状态
        console.log(res.status)
      }).catch(function (err){
        console.log(err)
      })
    },
    Click(row) {
      console.log(this.msg);
    },
    handleClick(row) {
        console.log(row);
      },
    tableRowClassName({row,rowIndex}){
        if (row.situation === 'danger'){
          return 'danger-row';
        }
        if (row.situation === 'warning'){
          return 'warning-row';
        }
        return "";
      }
    },

    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          situation:'general'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333,
          situation:'general'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333,
          situation: 'danger'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333,
          situation: 'warning'
        }],
        msg: ''
      }
    },
    mounted() {
      this.getMsg();
    }
}



</script>



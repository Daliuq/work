<template>
  <div>
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <Aside></Aside>
        </el-aside>
        <el-main>
          <component :is="mainName"></component>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from "./aside/aside"
import Table from "./table/table"
import Pubsub from "pubsub-js";
import TestTable from "./table/testTable";
export default {
  name: 'index',
  components: {Aside,Table,TestTable},
  data(){
    return{
      mainName:''
    }
  },
  mounted(){
    Pubsub.subscribe("mainName",(key,value)=>{
       console.log(key,value);
       this.mainName=value;
    })
    Pubsub.subscribe("TestTable",(key,value)=>{
      console.log(key,value);
      this.mainName=value;
    })
  }
}
</script>

<style scoped>

</style>

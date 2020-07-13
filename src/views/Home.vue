<template>
  <div class="page">
    <h2>Home page</h2>
    <!--测试axios
        <el-button type="primary" @click="testAxios()">测试Axios</el-button>
    -->
    <el-button type="primary" @click="getUser()">获取用户信息</el-button>
    <el-button type="primary" @click="getMenu()">获取菜单信息</el-button>
    
    <el-row class="container">
      <el-col :span="24"></el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
import mock from "@/mock/mock.js";
export default {
  name: "Home",
  methods: {
    testAxios() {
      axios
        .get("http://localhost:3333")
        .then(function(res) {
          alert(res.data);
        })
        .catch(function(res) {
          alert(res);
        });
    },
    getUser() {
      axios
        .get("http://localhost:3333/user")
        .then(function(res) {
          alert(JSON.stringify(res.data));
        })
        .catch(function(res) {
          alert(res);
        });
    },
    getMenu() {
      axios
        .get("http://localhost:3333/menu")
        .then(function(res) {
          alert(JSON.stringify(res.data));
        })
        .catch(function(res) {
          alert(res);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
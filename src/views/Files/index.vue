<template>
  <el-container>
    <el-aside width="250px">
      <asideMenu />
    </el-aside>
    <el-main>
      <router-link></router-link>
    </el-main>
  </el-container>
</template>

<script>
import asideMenu from "./components/menu";

export default {
  components: {
    asideMenu
  }
};
</script>

<style scoped>
</style>

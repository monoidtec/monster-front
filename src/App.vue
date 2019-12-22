<template>
  <div id="app">
    <el-container>
      <el-header class="header">
        <themenu />
      </el-header>
      <el-main>
        <router-view transition="fade"></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import themenu from "./components/Menu/index.vue";

export default {
  name: "app",
  components: {
    themenu
  },
  methods: {}
};
</script>

<style>
#app {
  font-family: 14px/1.5 Helvetica Neue, Helvetica, Arial, Microsoft Yahei,
    Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-bottom: 60px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

<style scoped>
.header {
  padding: 0;
}
</style>

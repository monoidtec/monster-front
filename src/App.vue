<template>
  <div id="app">
    <el-container>
      <el-header>
        <hello />
      </el-header>
      <el-main>
        <router-view transition="fade"></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import hello from "./components/HelloWorld";

export default {
  name: "app",
  components: {
    hello
  },
  methods: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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

<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">
            <svg-icon icon-class="home" />
          </el-breadcrumb-item>
          <el-breadcrumb-item v-for="(item, index) in paths" :key="index">
            {{ item }}
          </el-breadcrumb-item>
        </el-breadcrumb>
        <div class="addOption">
          <svg-icon icon-class="add" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    paths: {
      type: Array,
      default: []
    }
  }
};
</script>

<style scoped></style>

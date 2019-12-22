<template>
  <div>
    <ul>
      <li>
        <a class="active"> <svg-icon icon-class="folder" /> 所有文件 </a>
      </li>
      <li>
        <a> <svg-icon icon-class="time" /> 最近 </a>
      </li>
      <li>
        <a> <svg-icon icon-class="Star" /> 收藏 </a>
      </li>
      <li>
        <a> <svg-icon icon-class="share" /> 分享 </a>
      </li>
      <li>
        <a> <svg-icon icon-class="tag" /> 标签 </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 200px;
  position: fixed;
  height: 100%;
  border-right: 1px solid #dcdfe6;
}
li a {
  display: block;
  color: #000;
  padding: 10px 20px;
  text-decoration: none;
  color: #606266;
  border: none;
  border-right: 4px solid white;
}
li a:hover:not(.active),
li a.active {
  color: black;
  border: none;
  border-right: 4px solid #cc4849;
  background-color: #f2f2f2;
}
li a:hover {
  cursor: pointer;
  border-right: 4px solid #cc4849;
}
</style>

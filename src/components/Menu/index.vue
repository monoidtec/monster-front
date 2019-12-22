<template>
  <div>
    <ul>
      <li>
        <a class="logo">
          <img src="../../assets/logo.png" alt="logo" />
        </a>
      </li>
      <li>
        <a>
          <svg-icon icon-class="folder" />
        </a>
      </li>
      <li>
        <a>
          <svg-icon icon-class="activity" />
        </a>
      </li>
      <li>
        <a>
          <svg-icon icon-class="picture" />
        </a>
      </li>
      <span class="menuRight">
        <li>
          <a>
            <svg-icon icon-class="search" />
          </a>
        </li>
        <li>
          <a>
            <svg-icon icon-class="notice" />
          </a>
        </li>
        <li>
          <a>
            <svg-icon icon-class="user" />
          </a>
        </li>
        <li>
          <a class="img">
            <el-dropdown>
              <span class="el-dropdown-link">
                <img class="userImg" src="../../assets/user.png" />
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>设置</el-dropdown-item><br/>
                <el-dropdown-item>帮助</el-dropdown-item><br/>
                <el-dropdown-item>登出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </a>
        </li>
      </span>
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
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
li {
  float: left;
}
li a:not(.logo):not(.img) {
  display: block;
  text-align: center;
  padding: 16px 20px;
  text-decoration: none;
}
li a:hover {
  cursor: pointer;
  color: #cc4849;
}
a.img,
a.logo {
  display: block;
  text-align: center;
  padding: 10px 16px;
  text-decoration: none;
}
a.logo img {
  height: 30px;
  width: 30px;
}
span.menuRight {
  float: right;
}
.userImg {
  border-radius: 50%;
  width: 30px;
  height: 30px;
}
</style>

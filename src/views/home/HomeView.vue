<template>
  <div id="homew-view">
    <el-container>
      <el-header>
        <div class="header-img" @click="backHome">
          <img src="~assets/logo.png" alt="">
          <span>电商管理平台</span>
        </div>
        <el-button type="info" @click='cancelHome'>退出</el-button>
      </el-header>
      <el-container>
        <el-aside :width="isCollapse?'':'200px'">
          <home-menu @toggleMenu='toggleMenu' :asideMenu='asideMenu' ref='homemenu'/>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import {getAsideMenu} from '@/network/home'
import HomeMenu from './childComp/HomeMenu'
export default {
  name: 'HomewView',
  data () {
    return {
      asideMenu: [],
      isCollapse: false
     }
  },
  created() {
    this.getAsideMenu()
  },
  methods: {
     async getAsideMenu() {
      const {data: res} = await getAsideMenu()
      this.asideMenu = res.data
    },
    toggleMenu() {
      this.isCollapse = !this.isCollapse
    },
    cancelHome() {
      this.$router.push('/login')
      window.sessionStorage.clear()
    },
    backHome() {
      this.$router.push('/home')
    }
  },
  components: {
    HomeMenu
  }
}
</script>
<style lang='less' scoped>
.el-container {
  color: white;
  height:100vh;
  .el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    background-color: #373d41;
    .header-img {
      display: flex;
      align-items: center;
      cursor: pointer;
      img{
        box-sizing: border-box;
        width: 50px;
        padding: 1px;
        border: 3px solid white;
        border-radius: 50%;
        margin-right: 4px;
      }
      span {
        font-size: 20px;
      }
    }
  }
  .el-aside {
    background-color: rgb(51, 55, 68);
  }
  .el-main {
    background-color: #eaedf1;
  }
}
</style>

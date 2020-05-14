<template>
<div>
  <div class="collapsebtn" @click='toggleMenu'>|||</div>
  <el-menu
    background-color="#333744"
    :collapse-transition='false'
    :default-active = 'currentPath'
    unique-opened
    router
    :collapse='isCollapse'
    text-color="#fff">
    <el-submenu :index="item.authName+''" v-for='(item,index) in asideMenu' :key='item.id'>
      <template slot="title">
        <i :class="['iconfont', iconArr[index]]"></i>
        <span>{{item.authName}}</span>
      </template>
      <el-menu-item 
        :index="''+ subitem.path" 
        v-for="subitem in item.children" 
        :key='subitem.id'>
        <i class="el-icon-menu"></i>
        {{subitem.authName}}
      </el-menu-item>
    </el-submenu>
  </el-menu>
</div>
</template>
<script>
export default {
  name: 'HomeMenu',
  data () {
    return {
      isCollapse: false,
      iconArr: ['icon-yonghu', 'icon-quanxian','icon-shangpin', 'icon-dingdan', 'icon-shuju']
     }
  },
  methods: {
     toggleMenu() {
       this.$emit('toggleMenu')
       this.isCollapse = !this.isCollapse
    }
  },
  props: {
    asideMenu: {
      type: Array,
      default() {
        return []
      }
    }
  },
  created() {
  },
  computed: {
    currentPath() {
      const path = this.$route.path.split('/')
    //  console.log(this.$route,path)
      return path[2]
    } 
  }
}
</script>
<style lang='less' scoped>
.collapsebtn {
  padding: 5px;
  background-color: #4a5064;
  text-align: center;
  cursor: pointer;
  letter-spacing: 5px;
}
.iconfont {
  padding-right: 20px;
}
.el-menu {
  border: none !important;
}
</style>

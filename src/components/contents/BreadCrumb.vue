<template>
  <el-breadcrumb separator=">">
    <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item v-for="(item,index) in breaditem" :key="index">
      {{item}}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
export default {
  name: 'BreadCrumb',
  data () {
    return { }
  },
  props: {
    breaditem: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
<style>

</style>

<template>
  <el-row :gutter='20'>
    <el-col :span='7'>
      <el-input placeholder="请输入搜索内容" v-model="queryData" class="search-input">
        <el-button slot="append" icon="el-icon-search" @click='queryClick'></el-button>
      </el-input>
    </el-col>
    <el-col :span='2'><slot></slot></el-col>
  </el-row>
</template>
<script>
export default {
  name: 'QueryView',
  data () {
    return {
      queryData: ''
     }
  },
  methods: {
    queryClick() {
      this.$emit('queryClick', this.queryData)
    }
  }
}
</script>
<style lang='less' scoped>

</style>

<template>
  <el-pagination
  @size-change="handleSizeChange"
  @current-change="handleCurrentChange"
  :current-page="queryData.pagenum"
  :page-sizes="[1, 2, 5, 10]"
  :page-size="queryData.pagesize"
  layout="total, sizes, prev, pager, next, jumper"
  :total="total">
</el-pagination>
</template>
<script>
export default {
  name: 'PagiNation',
  data () {
    return { }
  },
  methods: {
   handleSizeChange(val) {
     this.$emit('handleSizeChange', val)
    },
    handleCurrentChange(val) {
     this.$emit('handleCurrentChange',val)
    }
  },
  props: {
    queryData: {
      type: Object,
      default() {
        return {}
      }
    },
    total: Number
  }
}
</script>
<style>

</style>

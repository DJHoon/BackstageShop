<template>
  <div class="user">
    <bread-crumb :breaditem='breaditem'/>
    <el-card class="box-card">
     <query-view @queryClick='queryClick'>
       <el-button type='primary' @click='addUser'>添加用户</el-button>
     </query-view>
     <!-- 列表 -->
      <el-table
        :data="userlist.users"
        border
        style="width: 100%">
        <el-table-column prop="username" label="姓名"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column prop="mobile" label="电话"></el-table-column>
        <el-table-column prop="role_name" label="角色"></el-table-column>
        <el-table-column  label="状态">
          <template v-slot:default='scope'>
          <el-switch
              v-model="scope.row.mg_state"
              active-color="#13ce66"
              @change='changeUserState(scope.row.id,scope.row.mg_state)'
              inactive-color="#cccccc">
            </el-switch>
          </template>
        </el-table-column>   
        <el-table-column label="操作">
          <template v-slot:default='scope'>
            <el-button type="primary" icon="el-icon-edit" size='mini' @click='editUser(scope.row.id)'></el-button>
              <el-button type="danger" icon="el-icon-delete" size='mini'  @click='deleteUser(scope.row.id)'></el-button>
              <el-tooltip content="分配权限" placement="top" :enterable='false'>
                <el-button type="warning" icon="el-icon-setting" size='mini'  @click='setUser'></el-button>
              </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页组件 -->
     <pagi-nation
        @handleSizeChange='SizeChange'
        @handleCurrentChange='CurrentChange'
        :queryData='queryData'
        :total="userlist.total">
     </pagi-nation>
     <!-- 分页组件结束 -->
    </el-card>
    <user-info ref='UserInfo' 
      :title='getTitle'
      @getUserList='getUserList'
      :isdisable='isdisable' 
      :userForm='userForm'/>
  </div>
</template>
<script>
import BreadCrumb from '@/components/contents/BreadCrumb'
import QueryView from '@/components/contents/QueryView'
import PagiNation from '@/components/common/PagiNation'
import UserInfo from './UserInfo'
import {getUserList, changeUserState, queryUserById,deleteUserById} from '@/network/home.js'
export default {
  name: 'UserView',
  data () {
    return {
      breaditem: ['用户管理', '用户列表'],
      isdisable: false,
      queryData: {
        query: '',
        pagenum: 1,
        pagesize: 5
      },
      userlist: {},
      currentPage: 1,
      dialogVisible: false,
      userForm: {
        id: '',
        username: '12312',
        password: 'admin',
        email: 'admin@qq.com',
        mobile: '15914780936'
      },
    }
  },
  components: {
    BreadCrumb,
    QueryView,
    PagiNation,
    UserInfo
  },
  methods: {
    // 获取用户列表
    async getUserList() {
      const {data: res} = await getUserList(this.queryData)
      this.userlist = res.data
  //    console.log(res,this.userlist)
    },
    // 更改页面数量
    SizeChange(val) {
      console.log('sizeChange'+val)
      this.queryData.pagenum = 1
      this.queryData.pagesize = val
      this.getUserList()
    },
    // 更改当前页码
    CurrentChange(val) {
       console.log('CurrentChange'+val)
      this.queryData.pagenum = val
      this.getUserList()
    },
    // 查询点击
    queryClick(val) {
      this.queryData.query = val
      this.getUserList()
    },
    // 更改用户状态
    changeUserState(id, state) {
      changeUserState(id, state)
    },
    setUser() {

    },
    // 删除用户
    deleteUser(id) {
      this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        const {data: res} = await deleteUserById(id)
        if(res.meta.status!== 200) return this.$message.error('删除失败')
        this.getUserList()
        this.$message.success('删除成功')
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });
    },
    async editUser(id) {
      const {data: res} = await queryUserById(id)
      if(res.meta.status !==200) return this.$message.error('获取用户数据失败')
      this.userForm.email = res.data.email
      this.userForm.id = id
      this.userForm.mobile = res.data.mobile
      this.userForm.username = res.data.username
      this.isdisable = true
      this.$refs.UserInfo.dialogVisible = true
    },
    // 添加用户
    addUser() {
      for(let n in this.userForm) {
       this.userForm[n] = ''
      }
       this.isdisable = false
      this.$refs.UserInfo.dialogVisible = true
    }
  },
  created() {
    this.getUserList()
  },
  computed: {
    getTitle() {
      if(!this.isdisable) return '添加用户'
      return '编辑用户'
    }
  }
}
</script>
<style lang='less' scoped>
</style>

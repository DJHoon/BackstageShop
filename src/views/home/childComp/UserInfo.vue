<template>
  <el-dialog
    :title="title"
    @close='cancelDialog'
    destroy-on-close
    :visible.sync="dialogVisible">
    <el-form ref="userFormRef"  :model='userForm' label-width="60px" :rules='userFormRules'>
      <el-form-item label="用户" prop='username'>
        <el-input v-model="userForm.username" :disabled='isdisable'></el-input>
      </el-form-item>
      <el-form-item label="密码" prop='password' :class='{show: isdisable}'>
        <el-input v-model="userForm.password"></el-input>
      </el-form-item>
       <el-form-item label="邮箱" prop='email'>
        <el-input v-model="userForm.email"></el-input>
      </el-form-item>
       <el-form-item label="手机" prop='mobile'>
        <el-input v-model="userForm.mobile"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancelDialog">取 消</el-button>
      <el-button type="primary" @click="confirmDialog">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script>
import {addUser, editUserById} from '@/network/home'
export default {
  name: 'UserInfo',
  data () {
    var validateEmail = (rule, value, callback) => {
      var EMAIL_REGEXP = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      if(!EMAIL_REGEXP.test(value)) return callback(new Error('请输入正确的邮箱'));
       callback();
    }
    var validateMobile = (rule, value, callback) => {
      var TEL_REGEXP = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/
       if(!TEL_REGEXP.test(value)) return callback(new Error('请输入正确的手机号码'));
       callback();
    }
    return { 
      dialogVisible: false,
      // 规则
      userFormRules: {
        username: [
          { required: true, message: '请输入用户名称', trigger: 'blur' },
          { min: 3, max: 7, message: '长度在 3 到 7 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入用户密码', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入用户邮箱', trigger: 'blur' },
          { validator: validateEmail, trigger: 'blur' }
        ],
        mobile: [
          { required: true, message: '请输入用户手机', trigger: 'blur' },
          { validator: validateMobile, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    cancelDialog() {
      this.dialogVisible = false
      this.$refs.userFormRef.resetFields()
    },
    confirmDialog() {
      this.$refs.userFormRef.validate(async validate => {
        if(!validate) return ;
        if(!this.isdisable) {
           const { data: res } = await addUser(this.userForm)
          if(res.meta.status!=201) return this.$message.error('创建失败')
          this.$message.success('创建成功')
          this.$emit('getUserList')
           this.dialogVisible = false
        }else {
          const { data: res } = await editUserById(this.userForm.id,this.userForm)
          if(res.meta.status!=200) return this.$message.error('更改失败')
          this.$message.success('更改成功')
          this.$emit('getUserList')
           this.dialogVisible = false
        }
      })
    }
  },
  props: {
    title: String,
    isdisable: {
      type: Boolean,
      default() {
        return false
      }
    },
    userForm: {
      type: Object,
      default(){
        return {}
      }
    }
  }
}
</script>
<style lang='less' scoped>
.el-form {
  width: 100%;
}
.show {
  display: none;
}
</style>

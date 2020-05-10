<template>
  <div id='login-view'>
    <div class='login'>
      <div class='loginimg'>
        <img src="~assets/logo.png" />
      </div>
      <el-form ref='LoginViewForm' :rules='loginRules' :model="loginForm">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username">
            <svg slot="prefix" t="1589131661004" class="icon el-input__icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2325" width="200" height="200"><path d="M776.066919 737.105567c-30.582439-108.462598-114.785191-189.084517-214.114892-210.745601 80.668008-23.258868 139.845111-97.747281 139.845111-185.799132 0-106.600092-86.730607-193.330699-193.330699-193.330699s-193.330699 86.730607-193.330699 193.330699c0 88.192485 59.365008 162.782532 140.231558 185.913766-91.442415 20.538381-169.532933 93.066199-202.952858 193.240883-9.55716 28.67148-14.049155 60.545619-13.371988 94.731345 0.638168 31.796141 23.437319 58.567298 53.045961 62.271037 2.643671 0.332084 5.31216 0.50108 8.046829 0.50108l416.661213 0c2.70867 0 5.442157-0.163087 8.202825-0.495171 34.218816-4.050005 60.02563-34.5639 60.02563-70.989124C785.02491 781.284535 782.004247 758.199391 776.066919 737.105567zM328.467547 340.560835c0-99.250522 80.74128-179.99771 179.99771-179.99771s179.99771 80.747189 179.99771 179.99771-80.74128 179.99771-179.99771 179.99771S328.467547 439.811356 328.467547 340.560835zM723.42395 863.484147c-2.226498 0.267085-4.439996 0.404173-6.627495 0.404173L300.135241 863.888321c-2.161499 0-4.284-0.129997-6.3805-0.397082-23.085144-2.890666-40.872311-24.081396-41.3793-49.303222-0.651168-32.668304 3.619832-63.033293 12.69482-90.25235 37.916647-113.67076 135.727744-190.042951 243.394996-190.042951 115.676263 0 220.439849 85.051279 254.762663 206.833866 5.612335 19.908485 8.464001 41.783473 8.464001 65.012797C771.691921 834.916665 750.4941 860.287397 723.42395 863.484147z" p-id="2326"></path></svg>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" type='password'>
            <svg slot="prefix" t="1589131742838" class="icon el-input__icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3105" width="200" height="200"><path d="M779.821998 367.986566l-5.15869 0c-2.579345 0-2.579345 0-5.15869 0L769.504618 272.550798C770.3644 116.930311 657.732997 0 508.990764 0c-146.162888 0-257.934509 116.930311-257.934509 272.550798l0 95.435768-7.738035 0c-78.240134 0-141.004198 66.203191-141.004198 143.583543l0 367.986566c0 80.819479 63.623846 143.583543 141.004198 143.583543l536.503778 0c78.240134 0 141.004198-66.203191 141.004198-143.583543L920.826196 511.570109C919.106633 431.610411 855.482788 367.986566 779.821998 367.986566zM294.905122 270.831234c0-134.125945 90.277078-228.701931 214.085642-228.701931 126.387909 0 216.664987 97.155332 216.664987 228.701931l0 95.435768L292.325777 366.267003 292.325777 270.831234 294.905122 270.831234zM877.837112 879.556675c0 55.88581-43.848866 102.314022-97.155332 102.314022L243.31822 981.870697c-53.306465 0-97.155332-46.428212-97.155332-102.314022L146.162888 511.570109c0-55.88581 43.848866-102.314022 97.155332-102.314022L257.934509 409.256087l36.970613 0 434.189757 0 51.586902 0 0 0c53.306465 0 97.155332 46.428212 97.155332 102.314022L877.837112 879.556675 877.837112 879.556675z" p-id="3106"></path><path d="M507.271201 567.455919c-34.391268 0-61.0445 29.232578-61.0445 63.623846 0 24.073887 12.036944 43.848866 31.811923 55.88581l0 104.893367c0 17.195634 14.616289 31.811923 31.811923 31.811923s31.811923-14.616289 31.811923-31.811923L541.662469 686.965575c19.774979-12.036944 31.811923-31.811923 31.811923-55.88581C567.455919 597.548279 540.802687 567.455919 507.271201 567.455919z" p-id="3107"></path></svg>
          </el-input>
        </el-form-item>
      </el-form>
      <el-row>
        <el-button type="primary" @click="loginUser">登录</el-button>
        <el-button type="info" @click='resetLoginForm'>重置</el-button>
      </el-row>
    </div>
  </div>
</template>
<script>
import {postLoginInfo} from '@/network/login'
export default {
  name: 'LoginView',
  data () {
    return { 
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      loginRules: {
        username: [
          { required: true, message: '请填写用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    resetLoginForm() {
      this.$refs.LoginViewForm.resetFields();
    },
     loginUser() {
        this.$refs.LoginViewForm.validate(async valid => {
        if(!valid) return ;
        const {data: res} =  await postLoginInfo(this.loginForm)
        if(res.meta.status !== 200) return this.$message.error('登录失败')
        window.sessionStorage.setItem('token', res.data.token)
        this.$router.push('/home')
        this.$message.success('登录成功')
      })
     }
  }
}
</script>
<style lang="less" scoped>
#login-view {
  background-color: #2b4b6b;
  height:100%;
  width: 100%;
  .login {
    width: 400px;
    height: 300px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 100px;
      background-color: #ccc;
      border: 10px solid white;
      border-radius: 50%;
      box-shadow: 0px 5px 5px #ccc;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .el-form {
     margin-top: 100px;
     padding: 15px;
  }
  .el-row {
    float: right;
     padding-right: 15px;
  }
}
</style>

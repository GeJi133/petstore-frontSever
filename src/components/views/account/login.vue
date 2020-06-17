<template>
  <div class="connect-container align-content-stretch d-flex flex-wrap">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-5 col-md-offset-3">
          <div class="auth-form">
            <div class="row">
              <div class="col">
                <div class="logo-box">
                  <a href="#" class="logo-text">Connect</a>
                </div>

                <form  ref="loginForm">
                  <!--                                    <form action="http://127.0.0.1/users/login" method="post">-->
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      value="a"
                      v-model="loginForm.username"
                      name="username"
                      aria-describedby="emailHelp"
                      placeholder="用户名"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      class="form-control"
                      value="a"
                      v-model="loginForm.password"
                      name="password"
                      placeholder="Password"
                    />
                  </div>
                  <button type="submit" @click="handleLogin" class="btn btn-primary btn-block btn-submit">Sign In</button>

                  <a href="/users/registerForm" class="forgot-link">注册新用户</a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    name: "login",
    data(){
        return{
            loginForm: {
                username: "admin",
                password: "123456"
            },
            loading: false,
            pwdType: "password",
        };
    },
    methods: {
    handleLogin(){
        if(this.loginForm.username === '' || this.loginForm.password === ''){
            alert('账号或密码不能为空');
        }else{
         
                this.loading = true;
                this.$store
                    .dispatch("Login",this.loginForm)
                    .then(response => {
                        this.loading = false;
                        let code = response.data.code;
                        if(code == 200){
                            this.$router.push({
                                path: "/main",
                                query: {data: response.data.data}
                            });
                        }else{
                            this.$router.push({
                                path: "login",
                                query: {message:response.data.message}
                            });
                        }
                    })
                    .catch(()=>{
                        this.loading=false;
                    });
                    
        }
    }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>

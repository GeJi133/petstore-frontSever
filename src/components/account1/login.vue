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
                <button @click = "main" style = "font-size:25px;">点我</button>

                <form  >
                    <p>llll+{{ $store.state.user }}</p>
        
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
                  
                  <a @blur="main" href="#" class="forgot-link">注册新用户</a>
                </form>
                <button  @click="handleLogin" class="btn btn-primary btn-block btn-submit">Sign In</button>
                  
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
                username: "",
                password: ""
            },
            loading: false,
            pwdType: "password",
        };
    },
    methods: {
    main(){
      console.log("进入main");
      this.$router.push({
                                path: "/main",
                                query: {message:"response.data.message"}
                            });
    },
    handleLogin(){
        console.log("调用login",this.$store);
        this.$store.dispatch("getOrder");
        console.log("通过了");
        if(this.loginForm.username === '' || this.loginForm.password === ''){
            alert('账号或密码不能为空');
        }else{
                this.loading = true;
                this.$store.dispatch('Login',this.loginForm)
                    .then(response => {
                        this.loading = false;
                        console.log("进来了",response);
                        let status = response.data.code;

                        console.log('code',status);
                        if(status == 200){
                          if(response.data.data){
                            this.$router.push({
                                path: "/main",
                                query: {}
                            });
                          }
                          else{
                            this.$router.push({
                                path: "/login",
                                query: {}
                            });
                          }
                        }else{
                            this.$router.push({
                                path: "/login",
                                query: {}
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
/* @import "../../assets/css/connect.min.css";
@import "../../assets/css/admin3.css";
@import "../../assets/css/dark_theme.css";
@import "../../assets/css/custom.css"; */
</style>

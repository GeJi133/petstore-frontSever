<template>
  <div class="page-container">
    <div class="page-header">
      <nav class="navbar navbar-expand">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <ul class="navbar-nav">
          <li class="nav-item small-screens-sidebar-link">
            <a href="#" class="nav-link">
              <i class="material-icons-outlined">menu</i>
            </a>
          </li>
          <li class="nav-item nav-profile dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span>username</span>
              <i class="material-icons dropdown-icon">keyboard_arrow_down</i>
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">
                LogOut
                <span class="badge badge-pill badge-info float-right">2</span>
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
    <div class="page-content">
      <!-- 页面信息 -->
      <div class="page-info">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="#">Order</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">ViewOrders</li>
          </ol>
        </nav>
      </div>

      <!-- 页面内容 -->
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

                    <form>
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
                    <button
                      @click="handleLogin"
                      class="btn btn-primary btn-block btn-submit"
                    >Sign In</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 页面内容 -->
    </div>

    <!-- 一下是buttom部分 -->
    <div class="page-footer">
      <div class="row">
        <div class="col-md-12">
          <span class="footer-text">
            2019 ©
            <a href="http://www.bootstrapmb.com/">stacks</a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex';
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapMutations(["ChangeLogin"]),
    main() {
      console.log("进入main");
      this.$router.push({
        path: "/main",
        query: { message: "response.data.message" }
      });
    },
    handleLogin() {
      console.log("调用login", this.$store);
      this.$store.dispatch("getOrder");
      console.log("通过了");
      if (this.loginForm.username === "" || this.loginForm.password === "") {
        alert("账号或密码不能为空");
      } else {
        this.loading = true;
        this.$store
          .dispatch("Login", this.loginForm)
          .then(response => {
            this.loading = false;
            console.log("进来了", response);
            let status = response.data.code;
            let _this=this;
            console.log("code", status);
            if (status == 200) {
              if (response.data.data) {
             console.log('token',response.data.data);
                  _this.ChangeLogin(response.data.data);
                this.$router.push({
                  
                  path: "/main",
                  query: {}
                });
              } else {
                this.$router.push({
                  path: "/login",
                  query: {}
                });
              }
            } else {
              this.$router.push({
                path: "/login",
                query: {}
              });
            }
          })
          .catch(() => {
            this.loading = false;
          });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* @import "../../assets/css/connect.min.css";
@import "../../assets/css/admin3.css";
@import "../../assets/css/dark_theme.css";
@import "../../assets/css/custom.css"; */
</style>
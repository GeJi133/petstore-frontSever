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
              <a href="#">Account</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">editPassword</li>
          </ol>
        </nav>
      </div>

      <!-- 页面内容 -->
      <div class="main-wrapper">
        <div class="row">
          <div class="col-xl">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">修改密码</h5>
             
                <form>
                  
                  <div class="form-group">
                    <label for="exampleInputPassword1">密码</label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      v-model="userForm.password"
                      placeholder="Password"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">重复密码</label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      v-model="userForm.repeatPassword"
                      placeholder="Password"
                    />
                  </div>
                  <div class="custom-control custom-checkbox form-group">
                    <input type="checkbox" class="custom-control-input" id="exampleCheck1" />
                  </div>
              
                </form>
                <button @click="updateUser" class="btn btn-primary" type="submit">Submit form</button>
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
export default {
  name: "First",
  data() {
    return {
      userForm: {
      }
    };
  },
  created() {
    this.userForm = this.$route.query.user;
  },
  beforeMount() {
    console.log("beforeMonut");
    var user = sessionStorage.getItem("user");
    console.log("user", user);
    this.user = JSON.parse(user);
  },
  beforeUpdate() {
    sessionStorage.setItem("user", this.user);
  },
  methods: {
    updateUser() {
      console.log("pass",this.userForm.password,this.userForm.repeadPassword)
      if(this.userForm.password==this.userForm.repeatPassword){
      var _this = this;
      console.log("newItem", _this.userForm);
      this.loading = true;
      console.log("userForm");
      this.$store.dispatch("UpdateUser", _this.userForm).then(response => {
        this.loading = false;
        let status = response.data.code;
        if (status == 204) {
          alert("修改成功");
        } else {
          alert(response.data.message);
        }
      });
    }else{
      alert('两次密码输入不一致');
    }
    }
  }
};
</script>

<style>
</style>


        
    
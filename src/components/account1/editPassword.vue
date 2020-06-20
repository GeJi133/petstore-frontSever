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
              <a href="#">catalog</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">addItem</li>
          </ol>
        </nav>
      </div>

      <!-- 页面内容 -->
      <div class="main-wrapper">
        <div class="row">
          <div class="col-xl">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">添加商品</h4>
                <h5 class="card-title">itemid</h5>

                <form>
                  <div class="form-group">
                    <label for="exampleInputEmail1" >itemId</label>
                    <input
                      type="text"
                      v-model="itemForm.itemId"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                  </div>

                  <div class="form-group">
                    <label for="sel1">类别</label>
                    <select class="form-control"  v-on:change="getProducts($event)">
                      <option
                        v-for="category in categoryList"
                        v-bind:value="category.categoryId"
                      >{{category.categoryId}}</option>
                    </select>
                
                    <!-- <select class="form-control" @change="getProducts()" ref v-model="itemForm.categoryId" id="sel1">
                      <option
                        v-for="category in categoryList"
                        v-bind="category.categoryId"
                      >{{category.name}}</option>
                    </select>-->
                  </div>
                  <div class="form-group">
                    <label for="sel1">种类</label>
                    <select class="form-control" v-model="itemForm.productId" id="sel1">
                      <option
                        v-for="product in productList"
                        v-bind="product.productId"
                      >{{product.productId}}</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <label for="exampleInputEmail1">商品特性</label>
                    <input
                      type="text"
                      v-model="itemForm.attribute1"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">商品特性2</label>
                    <input
                      type="text"
                      v-model="itemForm.attribute2"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">商品特性3</label>
                    <input
                      type="text"
                      v-model="itemForm.attribute3"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">数量</label>
                    <input
                      type="text"
                      v-model="itemForm.quantity"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">最低价格</label>
                    <input
                      type="text"
                      v-model="itemForm.listPrice"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">价格</label>
                    <input
                      type="text"
                      v-model="itemForm.unitCost"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                  </div>
                </form>
                <button @click="newItem()" class="btn btn-primary">提交修改</button>
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
      userForm: {},
      user
    };
  },
  created(){
      this.userForm=this.$route.query.user;
      console.log('beforeMonut');
  },
  methods: {
    updateUser(){
      var _this=this;
      console.log("newItem",_this.userForm);
      this.loading = true;
      console.log("userForm")
      this.$store.dispatch("UpdateUser",_this.userForm).then(response => {
        this.loading = false;
        let status = response.data.code;
        if (status == 204) {
          alert("修改成功");
        }else{
          alert("修改失败");
        }
      });
    }
  }
};
</script>

<style>
</style>


        
    
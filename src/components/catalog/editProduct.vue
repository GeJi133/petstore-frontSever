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
            <li class="breadcrumb-item active" aria-current="page">editProduct</li>
          </ol>
        </nav>
      </div>

      <!-- 页面内容 -->
      <div class="main-wrapper">
        <div class="row">
          <div class="col-xl">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">修改商品</h4>
                <h5 class="card-title">productid</h5>
                <form>
                  <div class="form-group">
                    <label for="exampleInputEmail1">商品名</label>
                    <input
                      type="text"
                      v-model="productForm.name"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                  </div>
                  <div class="form-group">
                    <label for="sel1">类别</label>
                    <select class="form-control" v-model="productForm.categoryId" id="sel1">
                      <option
                        v-for="category in categoryList"
                        v-bind="category.categoryId"
                      >{{category.name}}</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">{{product.description}}</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="productForm.description"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">详细描述</label>
                    <textarea
                      type="text"
                      class="form-control"
                      v-model="productForm.descriptionText"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                  </div>

                  <button type="submit" class="btn btn-primary">提交修改</button>
                </form>
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
  name: "orderList",
  data() {
    return {
      productForm: {
        productId: "",
        categoryId:"",
        description:""
      },
      categoryList: {},
      productList: {}
    };
  },

  created() {
      this.productForm=this.$route.params.product
    this.loading = true;
    this.$store.dispatch("GetCategorys").then(response => {
      this.loading = false;
      console.log("进来categoryList");
      let status = response.data.code;
      console.log("orderList", response.data.data);
      if (status == 200) {
        this.categoryList = response.data.data;
        console.log("order", productList[1].categoryId);
        console.log("manageCategory");
      }
    });
  },
  methods: {
    viewOrder(orderId) {},
    ship(orderId) {},
    getProducts() {
      var categoryId = this.selectCategory;
      console.log("getProducts");
      this.loading = true;
      this.$store.dispatch("GetProducts", categoryId).then(response => {
        this.loading = false;
        console.log("进来orderList");
        let status = response.data.code;
        console.log("orderList", response.data.data);

        if (status == 200) {
          this.productList = response.data.data;
          console.log("order", orderList[1].orderId);
        }
      });
    },
    newProduct() {
      console.log("newProduct");
      this.loading = true;
      this.$store.dispatch("newProduct", this.productForm).then(response => {
        this.loading = false;
        let status = response.data.code;
        if (status == 204) {
          alert("插入成功");
        } else {
          alert("插入失败");
        }
      });
    }
  }
};
</script>
<style>
</style>
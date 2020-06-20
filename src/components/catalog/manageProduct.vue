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
            <li class="breadcrumb-item active" aria-current="page">manageProduct</li>
          </ol>
        </nav>
      </div>

      <!-- 页面内容 -->
      <div class="main-wrapper">
        <div class="row">
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">商品列表</h5>
                <a href="#" @click="addProduct()" class="btn btn-primary m-b-md">添加商品</a>
                <table id="zero-conf" class="display" style="width:100%">
                  <thead>
                    <tr>
                      <th>商品id</th>
                      <th>商品类别</th>
                      <th>商品名</th>
                      <th>商品描述</th>
                      <th>操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="product in productList">
                      <td @click="getItems(product.productId)">{{product.productId}}</td>
                      <td>{{product.categoryId}}</td>
                      <td>{{product.name}}</td>
                      <td>{{product.descn}}</td>
                      <td>
                        <button
                          @click="deleteProduct(product.productId)"
                          type="button"
                          class="btn btn-outline-info"
                        >删除</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
      productList: {},
      categoryId:""
    };
  },
  created() {
    this.productList = this.$route.query.productList;
    this.categoryId = this.$route.query.categoryId;
  },
  methods: {
    getItems(productId) {
      console.log("getItems");
      this.loading = true;
      this.$store.dispatch("GetItems", productId).then(response => {
        this.loading = false;
        let status = response.data.code;
        console.log("orderList", response.data.data);

        if (status == 200) {
          var itemList = response.data.data;

          this.$router.push({
            // path: "/orderList",
            path: "/manageItems",
            query: {
              itemList: itemList
            }
          });
        }
      });
    },
    addProduct() {
      console.log("进入addproduct");
      this.$router.push({
        // path: "/orderList",
        path: "/addProduct",
        query: {}
      });
    },
    deleteProduct(productId) {
      console.log("delete");
      this.loading = true;
      this.$store.dispatch("DeleteProduct", productId).then(response => {
        this.loading = false;
        let status = response.data.code;
        console.log("orderList", response.data.data);
        console.log("status",status);


        if (status == 204) {
          console.log("getProducts");
          this.loading = true;
          this.$store
            .dispatch("GetProducts", this.categoryId)
            .then(response => {
              this.loading = false;
              console.log("进来orderList");
              let status = response.data.code;
              console.log("orderList", response.data.data);
              console.log("status",status);

              if (status == 200) {
                this.productList = response.data.data;
                console.log("productList");
              }
            });
        }
      });
    }
  }
};
</script>
<style>
</style>
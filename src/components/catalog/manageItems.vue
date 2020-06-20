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
            <li class="breadcrumb-item active" aria-current="page">manageItem</li>
          </ol>
        </nav>
      </div>

      <!-- 页面内容 -->
      <div class="main-wrapper">
        <div class="row">
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Zero Configuration</h5>
                <a href="#" @click="addItem()" class="btn btn-primary m-b-md">添加商品</a>
                <table id="zero-conf" class="display" style="width:100%">
                  <thead>
                    <tr>
                      <th>商品id</th>
                      <th>商品类别</th>
                      <th>最低价格</th>
                      <th>供应商</th>
                      <th>数量</th>
                      <th>修改</th>
                      <th>删除</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in itemList">
                      <td>
                        <a href="#" @click="viewItem(item.itemId)">{{item.itemId}}</a>
                      </td>
                      <td>{{productId}}</td>
                      <td>{{item.listPrice}}</td>
                      <td>{{item.status}}</td>
                      <td>{{item.quantity}}</td>
                      <td>
                        <button
                          @click="updateItem(item.itemId)"
                          type="button"
                          class="btn btn-outline-info"
                        >修改</button>
                      </td>
                      <td>
                        <button
                          @click="deleteItem(item.itemId)"
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
  name: "itemList",
  data() {
    return {
      itemList: {},
      productId:""
    };
  },
  created() {
    this.itemList = this.$route.query.itemList;
    this.productId=this.$route.query.productId;
    console.log("productIdll",this.productId);
  },
  methods: {
    addItem() {
      console.log("进入addproduct");
      this.$router.push({
        path: "/addItem",
        query: {}
      });
    },
    updateItem(itemId) {
      console.log("updateItem");
      this.loading = true;
      this.$store.dispatch("GetItem", itemId).then(response => {
        this.loading = false;
        let status = response.data.code;
        console.log("item", response.data.data);

        if (status == 200) {
          var item = response.data.data;

          this.$router.push({
            // path: "/orderList",
            path: "/editItem",
            query: {
              item: item
            }
          });
        }
      });
    },
    viewItem(itemId) {
      console.log("viewItem");
      this.loading = true;
      this.$store.dispatch("GetItem", itemId).then(response => {
        this.loading = false;
        let status = response.data.code;
        console.log("item", response.data.data);

        if (status == 200) {
          var item = response.data.data;

          this.$router.push({
            // path: "/orderList",
            path: "/viewItem",
            query: {
              item: item
            }
          });
        }
      });
    },
        deleteItem(itemId) {
      console.log("delete");
      this.loading = true;
      console.log("itemID",itemId);
      this.$store.dispatch("DeleteItem", itemId).then(response => {
        this.loading = false;
        let status = response.data.code;
        console.log("orderList", response.data.data);
        console.log("status",status);


        if (status == 204) {
          console.log("getItems",this.productId);
          this.loading = true;
          this.$store
            .dispatch("GetItems", this.productId)
            .then(response => {
              this.loading = false;
              console.log("进来orderList");
              let status = response.data.code;
              console.log("orderList", response.data.data);
              console.log("status",status);

              if (status == 200) {
                this.itemList = response.data.data;
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
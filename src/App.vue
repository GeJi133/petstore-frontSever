<template>
  <!-- <img src="./assets/logo.png"> -->
  <div id="app" class="connect-container align-content-stretch d-flex flex-wrap">
    <div class="page-sidebar">
      <div class="logo-box">
        <a href="#" class="logo-text">Connect</a>
        <a href="#" id="sidebar-close">
          <i class="material-icons">close</i>
        </a>
        <a href="#" id="sidebar-state">
          <i class="material-icons">adjust</i>
          <i class="material-icons compact-sidebar-icon">panorama_fish_eye</i>
        </a>
      </div>
      <div class="page-sidebar-inner slimscroll">
        <ul class="accordion-menu">
          <p id="checkInfo"></p>
          <li>
            <a >
              <i class="material-icons">text_format</i>用户管理
              <i class="material-icons has-sub-menu">add</i>
            </a>
            <ul class="sub-menu">
              <li>
                <a @click="editAccount()">信息查看</a>
              </li>
              <li>
                <a @click="editPassword()">修改密码</a>
              </li>
            </ul>
          </li>
          <li>
            <a >
              <i class="material-icons">apps</i>商品管理
              <i class="material-icons has-sub-menu">add</i>
            </a>
            <ul>
              <li>
                <a @click="managecategory">管理商品种类</a>
              </li>
            </ul>
          </li>
          <li>
            <a @click="orderList">
              <i class="material-icons">card_giftcard</i>订单管理
              <i class="material-icons has-sub-menu">add</i>
            </a>
            <ul class="sub-menu">
              <li>
                <a @click="orderList">查看订单</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <!-- 以上是top部分 -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    "remote-js": {
      render(createElement) {
        return createElement("script", {
          attrs: { type: "text/javascript", src: this.src }
        });
      },
      props: {
        src: { type: String, required: true }
      }
    }
  },
  methods: {
    managecategory() {
      this.loading = true;
      this.$store.dispatch("GetCategorys").then(response => {
        this.loading = false;
        console.log("进来categoryList");
        let status = response.data.code;
        console.log("orderList", response.data.data);
        if (status == 200) {
          var categoryList = response.data.data;
          console.log("manageCategory");
          this.$router.push({
            path: "/manageCategory",
            query: { categoryList: categoryList, username: "a" }
          });
        }
      });
    },
    manageProduct() {},
    manageItem() {
      console.log("manageItem");
      this.$router.push({
        path: "/manageItem",
        query: {}
      });
    },
    orderList() {
      console.log("orderList");
      this.loading = true;
      this.$store.dispatch("GetOrders").then(response => {
        this.loading = false;
        console.log("进来orderList");
        let status = response.data.code;
        console.log("orderList", response.data.data);

        if (status == 200) {
          var orderList = response.data.data;
          console.log("order", orderList[1].orderId);
          this.$router.push({
            path: "/orderList",
            query: {
              orderList: orderList,
              username: "username"
            }
          });
        }
      });
    },
    editAccount() {
  
      this.loading = true;
      this.$store
        .dispatch("GetUser")
        .then(response => {
          this.loading = false;
          console.log("进来orderList");
          let status = response.data.code;
          console.log("orderList", response.data.data);

          if (status == 200) {
            var user = response.data.data;
            this.$router.push({
              // path: "/orderList",
              path: "/editUser",
              query: {
                user: user
              }
            });
          }
        });
    },
        editPassword() {
  
      this.loading = true;
      this.$store
        .dispatch("GetUser")
        .then(response => {
          this.loading = false;
          console.log("进来orderList");
          let status = response.data.code;
          console.log("orderList", response.data.data);

          if (status == 200) {
            var user = response.data.data;
            this.$router.push({
              // path: "/orderList",
              path: "/editPassword",
              query: {
                user: user
              }
            });
          }
        });
    }
  }
};
</script>
<style>
/* @import "assets/css/connect2.css"; */
@import "assets/plugins/bootstrap/css/bootstrap.min.css";
@import "assets/plugins/font-awesome/css/all.min.css";
@import "assets/css/dark_theme.css";
@import "assets/css/custom.css";
@import "assets/css/admin3.css";
@import url("https://fonts.googleapis.com/css?family=Lato:400,700,900&display=swap");
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,700&display=swap");
@import url("https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp");
</style>

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
            <a href="#">
              <i class="material-icons">text_format</i>用户管理
              <i class="material-icons has-sub-menu">add</i>
            </a>
            <ul class="sub-menu">
              <li>
                <a href="/users/viewAccount">信息查看</a>
              </li>
              <li>
                <a href="/users/editAccountInfoForm">信息修改</a>
              </li>
              <li>
                <a href="/users/editPasswordForm">密码重置</a>
              </li>
            </ul>
          </li>
          <li>
            <a href>
              <i class="material-icons">apps</i>商品管理
              <i class="material-icons has-sub-menu">add</i>
            </a>
            <ul class="sub-menu">
              <li>
                <a href="../catalog/manageCategory.html">管理商品种类</a>
              </li>
              <li>
                <a href="../catalog/manageProduct.html">管理商品类型</a>
              </li>
              <li>
                <a href="../catalog/manageItems.html">管理商品</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i class="material-icons">card_giftcard</i>订单管理
              <i class="material-icons has-sub-menu">add</i>
            </a>
            <ul class="sub-menu">
              <li>
                <a href="../order/orderList.html">查看订单</a>
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

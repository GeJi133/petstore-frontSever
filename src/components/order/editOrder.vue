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
            <li class="breadcrumb-item active" aria-current="page">editOrder</li>
          </ol>
        </nav>
      </div>
      <!-- 页面内容 -->
      <div class="main-wrapper">
        <div class="row">
          <div class="col-xl">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">修改订单信息</h4>
                <h5 class="card-title">orderId{{this.order.orderId}}</h5>
                <h5 class="card-title">卖家姓名{{this.order.username}}</h5>

                <h5 class="card-title">收获地址{{this.order.billAddress1}}</h5>

                <h5 class="card-title">下单时间{{this.order.OrderDate}}</h5>

                <h5 class="card-title">总价{{this.order.totalPrice}}</h5>

                <h5 class="card-title">付款方式{{this.order.cardType}}</h5>

                <h5 class="card-title">订单状态{{this.order.status}}</h5>

                <form>
                  <div class="form-group">
                    <label for="exampleInputEmail1">发货地址1</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="order.billAddress1"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      v-bind="order.billAddress1"
                      placeholder="Enter email"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">发货地址2</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="order.billAddress2"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      v-bind="order.billAddress2"
                      placeholder="Enter email"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">备注</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="备注"
                    />
                  </div>

                  <button @click="updateOrder()" class="btn btn-primary">提交修改</button>
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
      order: {}
    };
  },

  created() {
    this.order = this.$route.query.order;
  },
  methods: {
    ship() {
      console.log("getItem");
      this.order.status = "r";
      this.loading = true;
      this.$store.dispatch("UpdateItem", this.order).then(response => {
        this.loading = false;
        console.log("进来orderList");
        let status = response.data.code;
        console.log("orderList", response.data.data);

        if (status == 200) {
          var order = response.data.data;
          console.log("order", order.orderId);
          alert("发货成功");
        }
      });
    },
    updateOrder() {
      this.loading = true;
      this.$store.dispatch("UpdateOrder", this.order).then(response => {
        this.loading = false;
        console.log("updateOrder");
        let status = response.data.code;
        console.log("orderList", response.data.data);

        if (status == 200) {
          alert("修改成功");
        }
      });
    }
  }
};
</script>
<style>
</style>
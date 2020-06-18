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
      <div class="main-wrapper">
        <div class="row">
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">订单列表</h5>
                <h5 class="card-title">{{this.$route.query.username}}</h5>

                <table id="zero-conf" class="display" style="width:100%">
                  <thead>
                    <tr>
                      <th>订单号</th>
                      <th>下单用户</th>
                      <th>下单时间</th>
                      <th>订单状态</th>
                      <th>总价</th>
                      <th>查看详情</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr v-for="order in this.$route.query.orderList">
                      <td>{{order.orderId}}</td>
                      <td>{{order.username}}</td>
                      <td>{{order.orderDate}}</td>
                      <td>
                        <p v-if="order.status=='s'">未支付</p>
                        <p v-if="order.status=='p'">待发货</p>
                        <p v-if="order.status=='r'">已发货</p>
                      </td>
                      <td>{{order.totalPrice}}</td>
                      <td>
                        <a href="#" @click="getOrder(order.orderId)">查看详情</a>
                      </td>
                      <td v-if="order.status=='p'">
                        <a @click="ship(order.orderId)"></a>
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
      orderList: []
    };
  },
  mounted: function() {
    this.orderList = this.$route.params.orderList;
  },
  methods: {
    ship(itemId) {
      var order = {};
      this.$store.dispatch("GetItem", itemId).then(response => {
        this.loading = false;
        order = response.data.data;
        let status = response.data.code;
        console.log("orderList", response.data.data);

        if (status == 200) {
          order.status = "r";
          console.log("getItem");
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
        }
      });
    },
    getOrder(orderId) {
      console.log("getItem");
      this.loading = true;
      this.$store.dispatch("GetOrder", orderId).then(response => {
        this.loading = false;
        console.log("进来orderList");
        let status = response.data.code;
        console.log("orderList", response.data.data);

        if (status == 200) {
          var order = response.data.data;
          console.log("order", order.orderId);
          this.$router.push({
            // path: "/orderList",
            path: "/editOrder",
            query: {
              order: order
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
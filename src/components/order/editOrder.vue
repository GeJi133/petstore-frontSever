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
              <span>后台管理</span>
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

                                <li class="breadcrumb-item"><a href="#">home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">home</li>
                            </ol>
                        </nav>
                    </div>
                    <!-- 页面内容 -->
                    <div class="main-wrapper">
                        <div class="row">
                            <div class="col-xl">
                                <div class="card">                                  
                                    <!-- <img src="/images/card_1.jpg" class="img" alt="Placeholder"> -->
                                    <div class="card-body">
                                        <h5 class="card-title">订单详情</h5>
                                        
                                        <table class="table table-borderless">
                                            
                                            <tbody>
                                               
                                             
                                                <tr>
                                                    <th scope="row">订单号</th>
                                                    <td>{{order.orderId}}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">卖家姓名</th>
                                                    <td>{{order.username}}</td>
                                                </tr>

                                                <tr>
                                                    <th scope="row">收获地址</th>
                                                    <td>{{order.billAddress1}}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">下单时间</th>
                                                    <td>{{order.orderDate}}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">总价</th>
                                                    <td>{{order.totalPrice}}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">付款方式</th>
                                                    <td>{{order.cardType}}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">订单状态</th>
                                                    <td>{{order.status}}</td>
                                                </tr>
                                            
                                                        
                                            </tbody>
                                        </table>   
                                    </div>
                                </div>
                            </div>                               
                        </div>
                   
                            
                            
                        </div>
                    </div>
                    
                    <!-- 页面内容 -->





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
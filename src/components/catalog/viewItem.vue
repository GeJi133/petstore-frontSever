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
                                        <h5 class="card-title">itemId</h5>
                                        
                                        <table class="table table-borderless">
                                            
                                            <tbody>
                                               
                                                <tr>
                                                    <th scope="row">商品编号</th>
                                                    <td>{{item.itemId}}</td>
                                                    
                                                </tr>
                                                <tr>
                                                    <th scope="row">商品名</th>
                                                    <td>{{item.productId}}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">最低价格</th>
                                                    <td>{{item.listPrice}}</td>
                                                </tr>

                                                <tr>
                                                    <th scope="row">供应商</th>
                                                    <td>{{item.supplierId}}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">特性</th>
                                                    <td>{{attribute1}}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">数量</th>
                                                    <td>{{item.quantity}}</td>
                                                </tr>
                                                        
                                            </tbody>
                                        </table>   
                                        <a href="#l" @click="updateItem(item.itemId)" class="btn btn-primary" >修改商品信息</a>
                                    </div>
                                </div>
                            </div>                               
                        </div>
                   
                            
                            
                        </div>
                
                    
                    <!-- 页面内容 -->
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
      item: {}
    };
  },

  created() {
    this.item = this.$route.query.item;
  },
  methods: {
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
    }
  }
};
</script>
<style>
</style>
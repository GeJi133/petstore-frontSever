<template>
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
                                                    <td>{{item.supplier}}</td>
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
                    </div>
                    
                    <!-- 页面内容 -->
    </div>
</template>
<script>
export default {
  name: "orderList",
  data() {
    return {
      item: {},

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
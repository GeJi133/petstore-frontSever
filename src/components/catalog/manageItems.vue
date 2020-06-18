<template>
  <div class="page-container">
    <!-- 页面信息 -->
    <div class="page-info">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">home</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">home</li>
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
              <a href="../catalog/addItem.html" class="btn btn-primary m-b-md">Add Row</a>
              <table id="zero-conf" class="display" style="width:100%">
                <thead>
                  <tr>
                    <th>商品id</th>
                    <th>商品类别</th>
                    <th>最低价格</th>
                    <th>供应商</th>
                    <th>数量</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <a href="../catalog/viewItem.html">itemid</a>
                    </td>
                    <td>productid</td>
                    <td>listprice</td>
                    <td>status</td>
                    <td>quantity</td>
                    <td>
                      <button type="button" class="btn btn-outline-info">删除</button>
                    </td>
                  </tr>
                  <tr>
                    <td>itemid</td>
                    <td>productid</td>
                    <td>listprice</td>
                    <td>status</td>
                    <td>quantity</td>
                    <td>
                      <button type="button" class="btn btn-outline-info">删除</button>
                    </td>
                  </tr>
                  <tr>
                    <td>itemid</td>
                    <td>productid</td>
                    <td>listprice</td>
                    <td>status</td>
                    <td>quantity</td>
                    <td>
                      <button type="button" class="btn btn-outline-info">删除</button>
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
</template>
<script>
export default {};
</script>
<style>
</style>
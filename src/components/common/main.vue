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
            <a href="#">Product</a>
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
              <a href="../catalog/addProduct.html" class="btn btn-primary m-b-md">添加商品</a>
              <table id="zero-conf" class="display" style="width:100%">
                <thead>
                  <tr>
                    <th>
                      <a href="../catalog/editProduct.html"></a>商品id
                    </th>
                    <th>商品类别</th>
                    <th>商品名</th>
                    <th>商品描述</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>productId</td>
                    <td>category</td>
                    <td>name</td>
                    <td>descn</td>
                    <td>
                      <button type="button" class="btn btn-outline-info">删除</button>
                    </td>
                  </tr>
                  <tr>
                    <td>productId</td>
                    <td>category</td>
                    <td>name</td>
                    <td>descn</td>
                    <td>
                      <button type="button" class="btn btn-outline-info">删除</button>
                    </td>
                  </tr>
                  <tr>
                    <td>productId</td>
                    <td>category</td>
                    <td>name</td>
                    <td>descn</td>
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
export default {};
</script>
<style>
</style>
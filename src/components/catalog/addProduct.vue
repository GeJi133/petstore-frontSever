<template>
  <div class="page-content">
    <!-- 页面信息 -->
    <div class="page-info">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">商品管理</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">修改Product</li>
        </ol>
      </nav>
    </div>
    <!-- 页面内容 -->
    <div class="main-wrapper">
      <div class="row">
        <div class="col-xl">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">添加商品</h4>
              <h5 class="card-title">productid</h5>
              <form>
                <div class="form-group">
                  <label for="exampleInputEmail1">种类名</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">种类id</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div class="form-group">
                  <label for="inputState">商品种类</label>
                  <select id="inputState" class="form-control custom-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">商品描述</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>

                <button type="submit" class="btn btn-primary">提交修改</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 页面内容 -->
  </div>
</template>
<script></script>
<style></style>
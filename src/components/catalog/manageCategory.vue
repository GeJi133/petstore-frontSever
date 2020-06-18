<template>
    <div class="page-container">
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
                            <div class="col">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">商品种类</h5>
                                        <a href="../catalog/addCategory.html"  class="btn btn-primary m-b-md">添加商品种类</a>
                                        <table id="zero-conf" class="display" style="width:100%">
                                            <thead>
                                                <tr>
                                                    
                                                    <th>商品名</th>
                                                    <th>商品描述</th>
                                                    <th>操作</th>
                                                 
                                                </tr>
                                                
                                            </thead>
                                            <tbody>
                                                <tr>
                                                  
                                                    <td>name</td>
                                                    <td>descn</td>
                                                    <td>
                                                    <button type="button" class="btn btn-outline-info">删除</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                  
                                                    <td>name</td>
                                                    <td>descn</td>
                                                    <td>
                                                    <button type="button" class="btn btn-outline-info">删除</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                  
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
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>
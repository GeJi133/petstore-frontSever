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
              ref="navbarDropdown"
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
              <a href="#">home</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">home</li>
          </ol>
        </nav>
      </div>
      <!-- 页面内容 -->
      <div class="main-wrapper">
        <div class="row">
          <div class="col-xl">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Validation</h5>
                <p>Provide valuable, actionable feedback to your users with HTML5 form validation.</p>
                <form action="/users/editAccount" method="post" class="needs-validation" novalidate>
                  <div class="form-row">
                    <div class="col-md-4 mb-3">
                      <label for="inputPhone">手机号</label>
                      <input
                        type="text"
                        class="form-control"
                        ref="inputPhone"
                        name="phone"
                        eplaceholder="First name"
                        value="Mark"
                        required
                      />
                      <div class="valid-feedback">Looks good!</div>
                    </div>
                    <div class="col-md-4 mb-3">
                      <label for="inputState">State</label>
                      <input
                        type="text"
                        class="form-control"
                        ref="inputState"
                        name="state"
                        placeholder="Last name"
                        value="Otto"
                        required
                      />
                      <div class="valid-feedback">Looks good!</div>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-md-6 mb-3">
                      <label for="inputCity">City</label>
                      <input
                        type="text"
                        class="form-control"
                        ref="inputCity"
                        name="city"
                        placeholder="City"
                        required
                      />
                      <div class="invalid-feedback">Please provide a valid city.</div>
                    </div>
                    <div class="col-md-3 mb-3">
                      <label for="inputAddress1">Address1</label>
                      <input
                        type="text"
                        class="form-control"
                        name="address1"
                        ref="inputAddress1"
                        placeholder="State"
                        required
                      />
                      <div class="invalid-feedback">Please provide a valid state.</div>
                    </div>
                    <div class="col-md-3 mb-3">
                      <label for="inputAddress1">Address1</label>
                      <input
                        type="text"
                        class="form-control"
                        name="address2"
                        placeholder="State"
                        required
                      />
                      <div class="invalid-feedback">Please provide a valid state.</div>
                    </div>
                    <div class="col-md-3 mb-3">
                      <label for="inputZip">Zip</label>
                      <input
                        type="text"
                        class="form-control"
                        name="zip"
                        ref="inputZip"
                        placeholder="Zip"
                        required
                      />
                      <div class="invalid-feedback">Please provide a valid zip.</div>
                    </div>
                    <div class="col-md-3 mb-3">
                      <label for="inputStatus">Status</label>
                      <input
                        type="text"
                        class="form-control"
                        name="status"
                        ref="inputStatus"
                        placeholder="Zip"
                        required
                      />
                      <div class="invalid-feedback">Please provide a valid zip.</div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="custom-control custom-checkbox">
                      <input
                        class="custom-control-input"
                        type="checkbox"
                        value
                        ref="invalidCheck"
                        required
                      />
                      <label
                        class="custom-control-label"
                        for="invalidCheck"
                      >Agree to terms and conditions</label>
                      <div class="invalid-feedback">You must agree before submitting.</div>
                    </div>
                  </div>
                  <button class="btn btn-primary" type="submit">Submit form</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 页面内容 -->
    </div>
  </div>
</template>

<script>
export default {
  name: "First",
  data() {
    return {
      msg: "firsthellopagssse"
    };
  },
  methods: {
    check() {
      // var flag=false;
      // var phone = $('#phonenumber').val();
      // var state = $('#inputState').val();
      // var address1 = $('#inputAddress1').val();
      // var address2 = $('#inputAddress2').val();
      // var city = $('#inputCity').val();
      // var zip = $('#inputZip').val();
      // var status = $('#inputStatus').val();
      // if (phone && state && address1 && address2 && city && zip) {
      //     flag=true;
      // } else {
      //     $('#checkInfo').text("请输入完整信息");
      // }
      // return flag;
    }
  }
};
</script>

<style>
</style>


        
    
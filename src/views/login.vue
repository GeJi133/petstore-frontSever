<div class="connect-container align-content-stretch d-flex flex-wrap">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-5 col-md-offset-3">
                        <div class="auth-form">
                            <div class="row">
                                <div class="col ">
                                    <div class="logo-box"><a href="#" class="logo-text">Connect</a></div>
                                    <% if(message){%>
                                    <p>
                                        <%=message%>
                                    </p>
                                    <% } %>

                                    <form action="/users/login" method="post">

<!--                                    <form action="http://127.0.0.1/users/login" method="post">-->
                                        <div class="form-group">
                                            <input type="text" class="form-control" value="a"  name="username" aria-describedby="emailHelp" placeholder="Enter email">
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" value="a" name="password" placeholder="Password">
                                        </div>
                                        <button type="submit" class="btn btn-primary btn-block btn-submit">Sign In</button>

                                            <a href="/users/registerForm" class="forgot-link">注册新用户</a>
                                       
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
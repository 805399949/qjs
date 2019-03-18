<template>
  <div class="public">
    <div class="pageTopWrap" style="height: 106px">
      <div class="headerWrap">
        <header class="wrap">
          <a href="javascript:;">
            <img src="@/assets/img/logo.png" alt>
          </a>
          <div class="topBarBox">
            <div class="server clearfix">
              <ul class="sign_btn">
                <li>
                  <a href="javascript:;" class="user_login">登录</a>
                </li>
                <li>
                  <a href="javascript:;" class="register">注册</a>
                </li>
              </ul>
              <ul class="user_name" style="display: none"></ul>
            </div>
          </div>
        </header>
      </div>
      <div class="global_nav">
        <div class="wrap">
          <Nav></Nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Nav from "./components/Nav";

export default {
  name: "home",
  components: {
    Nav
  },
  data() {
    return {};
  },
  methods: {
    handleSelect() {}
  },
  mounted() {
    var nav = document.getElementsByClassName("ivu-menu");
    console.log(nav);
  }
};
</script>

<style>
.headerWrap {
  height: 58px;
  width: 100%;
  box-shadow: 0 -1px 4px 0 #e9e9e9;
  text-align: center;
}
.headerWrap header img {
  max-width: 112px;
  max-height: 58px;
  width: 82%;
  vertical-align: top;
  /* margin: 12px 0; */
}
.topBarBox {
  position: absolute;
  top: 0;
  right: 0;
  font-weight: bold;
  height: 58px;
  line-height: 58px;
}
.topBarBox .server {
  display: inline-block;
  position: relative;
}
.topBarBox .server ul {
  float: left;
}
.topBarBox .server .sign_btn li {
  float: left;
}
.topBarBox .server .sign_btn a {
  display: inline-block;
  color: #0b71b2;
  font-size: 14px;
  height: 30px;
  line-height: 30px;
  padding: 0 15px;
}
.topBarBox .server .sign_btn .register {
  border: 1px solid rgba(6, 114, 180, 0.16);
  border-radius: 26px;
  position: relative;
}
/* nav style */
.global_nav {
  height: 46px;
  line-height: 46px;
  background: #ffffff;
  border-top: 1px solid #f7f7f7;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
  -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid #ededed;
}
.global_nav .ivu-menu-horizontal {
  height: 46px;
  line-height: 46px;
}
</style>


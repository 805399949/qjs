
<style lang="less">
@import "./home.less";
.routerView {
  background: #ececec url(../../assets/img/bg.png) repeat fixed;
  padding: 10px;
}
</style>


<template>
  <div class="home-wrap">
    <v-header ref="header">
      <a slot="logo" href="javascript:;" @click="handleClickLogo">
        <img src="@/assets/img/qjs-logo.png" alt />
      </a>
    </v-header>
    <Modal ref="loginModal" v-model="isLoginModalShow" title="登陆" width="600" :mask-closable="false">
      <v-login @on-success-valid="login"></v-login>
      <div slot="footer"></div>
    </Modal>
    <router-view class="routerView"></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
import Header from "@/views/Public/header";
import Footer from "@/views/Public/footer";
import Login from "@/components/Login/Login";
import animate from "animate.css";
import { mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    vHeader: Header,
    vFooter: Footer,
    vLogin: Login
  },
  inject: ["reload"],
  data() {
    return {
      isRouterAlive: true,
      isLoginModalShow: false
    };
  },
  methods: {
    ...mapActions(["handleSelected", "handleLogin"]),
    handleClickLogo() {
      let _this = this;
      _this.handleSelected("home");
      // this.$router.push({
      //     name: 'home'
      // })
      _this.reload();
    },
    loginModalShow() { // 显示登陆框
      let _this = this;
      _this.isLoginModalShow = true;
    },
    login({ userName, password }) { // 触发登陆动作
      this.handleLogin({ userName, password }).then(res => {
        // console.log(this.$refs.loginModal.reomve());
        
        let _this = this
        _this.isLoginModalShow = false
        // _this.$router.push({
        //   name: _this.$config.homeName
        // })
        _this.$refs.header.reload() // 成功登陆后刷新
        
      }).catch();
    }
  },
  created() {
    let _this = this;
    _this.handleSelected("home");
    _this.$on("login", this.loginModalShow);
  },
  watch: {}
};
</script>



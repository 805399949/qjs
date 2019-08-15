
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
        <img src="@/assets/img/logo.png" alt />
      </a>
    </v-header>
    <Modal ref="loginModal" v-model="isLoginModalShow" title="登陆" width="600" :mask-closable="false">
      <v-login @on-register="register" @on-success-valid="login"></v-login>
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
    register() {
       let _this = this
        _this.isLoginModalShow = false
        _this.$refs.header.reload() // 成功登陆后刷新
    },
    login({ userName, password }) { // 触发登陆动作
      // 先进行handleLogin(在sotre中), 如果成功 关闭登陆框 并刷新页面
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
    
    // 接受子组件header传递过来的自定义事件login 并触发loginModalShow方法
    _this.$on("login", this.loginModalShow);
  },
  watch: {}
};
</script>



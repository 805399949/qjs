<template>
  <div class="header-wrap">
    <div class="logo">
      <slot name="logo"></slot>
    </div>
    <div class="nav">
      <Nav></Nav>
    </div>
    <div class="quick-menu" v-if="!userInfo">
      <div class="top-bar-box">
        <Button style="" @click="handleLogin" type="text" size="large">登录</Button>
        <Button @click="HandleRegister" shape="circle" size="large">注册</Button>
      </div>
    </div>
    <User @logOut="logOut" :userName="userInfo.name" :userAvator="userInfo.avator" style="float: right" v-else />
  </div>
</template>

<script>
import Nav from "_c/nav/Nav";
import User from "_c/User/User";
// import { type, userInfo } from "os";
import { getSessionItem } from "@/lib/util";
import { constants } from "crypto";
import { mapActions } from 'vuex';
import Emitter from '@/lib/mixins/emitter.js';

export default {
  name: "Header",
  components: {
    Nav,
    User
  },
  mixins: [ Emitter ],
  inject: ["reload"],
  data() {
    return {
      isRouterAlive: true,
    };
  },
  computed: {
    userInfo() {
      // if (!getSessionItem('userInfo')) {
      //   this.reload()
      // }
      return getSessionItem("userInfo");
    }
  },
  methods: {
    ...mapActions([
      'handleLogOut',
      'handleSelected'
    ]),
    handleLogin() {
      
      this.dispatch('Home', 'login');
      // this.$router.push({
      //   name: "login"
      // });
    },
    HandleRegister() {
      console.log("注册");
    },
    logOut() {
      this.handleLogOut().then(() => {
        this.handleSelected("home");
        this.$router.push({
          name: 'home'
        })
        this.reload()
      });
    }
  },
  created() {
    //
  },
  mounted() {
    //
  }
};
</script>

<style scoped lang="less">
.header-wrap {
  width: 1000px;
  height: 60px;
  line-height: 60px;
  margin: 0 auto;
  .logo {
    float: left;
    width: 125px;
    height: 60px;
    margin-right: 40px;
    a {
      img {
        width: 125px;
        height: 60px;
      }
    }
  }
  .nav {
    float: left;
  }
  .quick-menu {
    float: right;
    .top-bar-box {
      font-weight: bold;
      height: 60px;
      line-height: 60px;
    }
    .ivu-btn:focus {
        box-shadow: none
    }
  }
}
</style>


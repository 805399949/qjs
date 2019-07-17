<style lang="less">
@import "./login.less";
</style>

<template>
  <div class="login">
    <Row class="login-wrap">
      <Col span="24">
        <Form
          ref="loginForm"
          :model="loginData"
          :rules="loginRule"
          @keydown.enter.native="handleSubmit"
        >
          <input type="password" style="display: none;" />
          <FormItem prop="userName" class="mb15">
            <div class="loginLabel">用户名</div>
            <Input type="text" v-model="loginData.userName" placeholder autocomplete="off">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password" class="mb15">
            <div class="loginLabel">密码</div>
            <div class="loginLabel forgetPwd">忘记密码</div>
            <Input type="password" v-model="loginData.password" placeholder autocomplete="off">
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
        </Form>
      </Col>

      <Col span="24" class="mt15">
        <a
          href="/user/phoneLogin"
          class="phoneLogin"
          style="color: #009a61;text-decoration: none; font-size: 14px"
        >手机验证码登录</a>
      </Col>

      <Col span="24" class="mt15">
        <Button class="loginBtn" @click="handleSubmit" type="success" long>登陆</Button>
      </Col>

      <Col span="24" class="more-login-area">
        <span class="more-login-words">更多登录方式</span>
      </Col>

      <Col span="24" class="widget-login mb15">
        <a href="/user/oauth/google" class>
          <span class="icon-sn-google"></span>
        </a>
        <a href="/user/oauth/github" class>
          <span class="icon-sn-github"></span>
        </a>
        <a href="/user/oauth/weibo" class>
          <span class="icon-sn-weibo"></span>
        </a>
        <a href="/user/oauth/qq" class>
          <span class="icon-sn-qq"></span>
        </a>
        <a href="/user/oauth/weixin" class>
          <span class="icon-sn-weixin"></span>
        </a>
        <a href="/user/oauth/linkedin" class>
          <span class="icon-sn-linkedin"></span>
        </a>
        <!-- <span id="loginShowMore" style="cursor: pointer" class="mb5">
            <span class="icon-sn-dotted"></span>
        </span>-->
        <a href="/user/oauth/twitter" class="hidden">
          <span class="icon-sn-twitter"></span>
        </a>
        <a href="/user/oauth/facebook" class="hidden">
          <span class="icon-sn-facebook"></span>
        </a>
        <a href="/user/oauth/douban" class="hidden">
          <span class="icon-sn-douban"></span>
        </a>
      </Col>

      <Col span="24" class="mt15">
        <Button class="registNum" type="default" long>注册新账号</Button>
      </Col>

      <Col span="24" class="mt15" style="text-align: center; color: #777">
        登录即表示你同意网站的
        <a href="/tos" target="_blank">《服务条款》</a>
      </Col>
    </Row>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    userNameRules: {
      type: Array,
      default: () => {
        return [{ required: true, message: "账号不能为空", trigger: "blur" }];
      }
    },
    passwordRules: {
      type: Array,
      default: () => {
        return [{ required: true, message: "密码不能为空", trigger: "blur" }];
      }
    }
  },
  data() {
    return {
      loginData: {
        userName: "",
        password: ""
      }
    };
  },
  computed: {
    loginRule() {
      return {
        userName: this.userNameRules,
        password: this.passwordRules
      };
    }
  },
  methods: {
    ...mapActions(["handleLogin"]),
    handleSubmit() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$emit("on-success-valid", {
            userName: this.loginData.userName,
            password: this.loginData.password
          });
        }
      });
    }
  },
  mounted() {
    //
  }
};
</script>

<style>
</style>

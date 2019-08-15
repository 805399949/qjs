<template>
  <div id="register" class="wp">
    <div class="userAvatar">
      <div class="userAvatarWrap">
        <h5>头像</h5>
        <img src alt />
      </div>
    </div>
    <Form
      class="registerForm"
      ref="registerForm"
      :model="registerForm"
      :rules="registerValidate "
      :label-width="100"
    >
      <FormItem label="手机号:" prop="phoneNum">
        <Input v-model="registerForm.phoneNum" placeholder="请输入手机号"></Input>
      </FormItem>
      <FormItem label="验证码:" prop="verifyCode">
        <Input class="verifyInput" v-model="registerForm.verifyCode" placeholder="请输验证码"></Input>
        <span>
          <Button style="float: right">获取验证码</Button>
        </span>
      </FormItem>
      <FormItem label="密码:" prop="passWord">
        <Input v-model="registerForm.passWord" placeholder="密码"></Input>
      </FormItem>
      <FormItem label="确认密码:" prop="surePassWord">
        <Input v-model="registerForm.surePassWord" placeholder="确认密码"></Input>
      </FormItem>
      <FormItem prop="agreement">
        <CheckboxGroup v-model="registerForm.agreement">
          <Checkbox label>
            <span style="color: #57a3f3">同意《服务协议》</span>
          </Checkbox>
        </CheckboxGroup>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('registerForm')">注册</Button>
        <Button @click="handleReset('registerForm')" style="margin-left: 8px">清空内容</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      registerForm: {
        phoneNum: "",
        verifyCode: "",
        passWord: "",
        surePassWord: "",
        agreement: []
      },
      registerValidate: {
        phoneNum: [
          {
            required: true,
            message: "手机号不能为空",
            trigger: "blur"
          }
        ],
        verifyCode: [
          {
            required: true,
            message: "验证码不能为空",
            trigger: "blur"
          },
          { type: "email", message: "Incorrect email format", trigger: "blur" }
        ],
        passWord: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "change"
          }
        ],
        surePassWord: [
          { required: true, message: "请确认密码", trigger: "blur" }
        ],
        agreement: [
          {
            required: true,
            type: "array",
            min: 1,
            message: "请同意服务协议",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    }
  }
};
</script>

<style lang="less">
@import url("./register");
</style>
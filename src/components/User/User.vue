<template>
  <div class="user-avator-dropdown">
    <Dropdown @on-click="handleClick">
      <Avatar :src="userAvator"/>
      <h3 class="userName" style="display: inline">{{ userName }}</h3>
      <Icon :size="18" type="md-arrow-dropdown"></Icon>
      <DropdownMenu slot="list">
        <DropdownItem name="logout">退出登录</DropdownItem>
        <DropdownItem name="personalCenter">个人中心</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
import "./user.less";
import { mapActions } from 'vuex'
export default {
  name: "User",
  props: {
    userAvator: {
      type: String,
      default: ""
    },
    userName: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick(name) {
      switch (name) {
        case "logout":
            this.$emit('logOut','');
          break;
      }
    }
  },
  mounted () {}
};
</script>

